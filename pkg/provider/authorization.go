// MIT License
//
// Copyright (c) 2025 Eigen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package provider

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"slices"
	"strconv"
	"strings"
	"time"

	"connectrpc.com/authn"
	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/query"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"github.com/Eigen438/opgo/pkg/model"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (p *Provider) Authorization(ctx context.Context,
	req *connect.Request[oppb.AuthorizationRequest]) (*connect.Response[oppb.AuthorizationResponse], error) {
	if iss := auth.CheckIssuer(ctx, req); iss == nil {
		return nil, authn.Errorf("invalid authorization(Authorization)")
	} else {
		var parseTarget string
		if req.Msg.Method == http.MethodGet {
			// parse url and get raw query
			u, err := url.Parse(req.Msg.Url)
			if err != nil {
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("url.Parse error"))
			}
			parseTarget = u.RawQuery

		} else if req.Msg.Method == http.MethodPost {
			// check content-type and get post data
			if ct := req.Msg.ContentType; !strings.HasPrefix(ct, httphelper.MimeTypeWwwFormUnlencoded) {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequest("When using the Post method, Content-Type must be specified as \"application/x-www-form-urlencoded\""),
					},
				}), nil
			}
			parseTarget = req.Msg.Form

		} else {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("Must use the GET or POST method to call the Authorization Endpoint"),
				},
			}), nil
		}

		// parse query
		params := parseParams(parseTarget)

		// check required
		// https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
		// scope, response_type, client_id, redirect_uri
		if len(params.Scopes) == 0 {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("scope is required"),
				},
			}), nil
		}
		if len(params.ResponseType) == 0 {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("response_type is required"),
				},
			}), nil
		}
		if !slices.Contains(oauth.ResponseTypesSupported(), params.ResponseType) {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest(fmt.Sprintf("response_type(%s) is unsupported", params.ResponseType)),
				},
			}), nil
		}
		if len(params.ClientId) == 0 {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("client_id is required"),
				},
			}), nil
		}
		client := &model.Client{
			Identity: &oppb.ClientIdentity{
				ClientId: params.ClientId,
			},
			Issuer: iss.Key,
		}
		if err := dataprovider.Get(ctx, client); err != nil {
			if status.Code(err) == codes.NotFound {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationUnauthorizedClient("Unknown client_id"),
					},
				}), nil
			}
			return nil, err
		}
		if len(params.RedirectUri) == 0 {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("redirect_uri is required"),
				},
			}), nil
		}
		if len(client.Meta.RedirectUris) > 0 {
			if !slices.Contains(client.Meta.RedirectUris, params.RedirectUri) {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequest("redirect_uri not match"),
					},
				}), nil
			}
		}

		res, err := authorization(ctx, iss, params, client, req.Msg.Sessions)
		if err != nil {
			return nil, err
		}

		if fail := res.Msg.GetFail(); fail != nil {
			res, err := makeFailResponse(ctx, iss, client, params, fail)
			if err != nil {
				return nil, err
			}
			if res.html != nil {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Html{
						Html: res.html,
					},
				}), nil
			} else {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Redirect{
						Redirect: res.redirect,
					},
				}), nil
			}
		}
		return res, nil
	}
}

type failResponse struct {
	redirect *oppb.AuthorizationRedirectResponse
	html     *oppb.AuthorizationHtmlResponse
}

func makeFailResponse(
	ctx context.Context,
	iss *model.Issuer,
	client *model.Client,
	params *oppb.AuthorizationParameters,
	fail *oppb.AuthorizationFailResponse) (*failResponse, error) {
	vals := map[string]string{}
	vals["error"] = string(fail.Error.Error)
	vals["error_description"] = string(fail.Error.ErrorDescription)
	vals["error_uri"] = string(fail.Error.ErrorUri)
	vals["state"] = string(params.State)
	if iss.Meta.AuthorizationResponseIssParameterSupported {
		vals["iss"] = iss.Meta.Issuer
	}

	builder, err := NewRedirectBuilder(iss, client, params, vals)
	if err != nil {
		return nil, err
	}
	out, err := builder.Build(ctx, time.Now())
	if err != nil {
		return nil, err
	}
	if builder.IsFormPost() {
		return &failResponse{
			html: &oppb.AuthorizationHtmlResponse{
				Content: out,
			},
		}, nil
	} else {
		return &failResponse{
			redirect: &oppb.AuthorizationRedirectResponse{
				Url: out,
			},
		}, nil
	}
}

func parseParams(parseTarget string) *oppb.AuthorizationParameters {
	vals := query.Parse(parseTarget)
	params := &oppb.AuthorizationParameters{
		Scopes:              []string{},
		ResponseType:        vals.Get("response_type"),
		ClientId:            vals.Get("client_id"),
		RedirectUri:         vals.Get("redirect_uri"),
		State:               vals.Get("state"),
		ResponseMode:        vals.Get("response_mode"),
		Nonce:               vals.Get("nonce"),
		Display:             vals.Get("display"),
		Prompts:             []string{},
		MaxAge:              vals.Get("max_age"),
		UiLocales:           []string{},
		IdTokenHint:         vals.Get("id_token_hint"),
		LoginHint:           vals.Get("login_hint"),
		AcrValues:           []string{},
		ClaimsLocales:       vals.Get("claims_locales"),
		Claims:              vals.Get("claims"),
		ClientAssertionType: vals.Get("client_assertion_type"),
		ClientAssertion:     vals.Get("client_assertion"),
		CodeChallenge:       vals.Get("code_challenge"),
		CodeChallengeMethod: vals.Get("code_challenge_method"),
		Request:             vals.Get("request"),
		RequestUri:          vals.Get("request_uri"),
	}
	if len(vals.Get("scope")) > 0 {
		params.Scopes = strings.Split(vals.Get("scope"), " ")
	}
	if len(vals.Get("prompt")) > 0 {
		params.Prompts = strings.Split(vals.Get("prompt"), " ")
	}
	if len(vals.Get("ui_locales")) > 0 {
		params.UiLocales = strings.Split(vals.Get("ui_locales"), " ")
	}
	if len(vals.Get("acr_values")) > 0 {
		params.AcrValues = strings.Split(vals.Get("acr_values"), " ")
	}
	return params
}

func authorization(ctx context.Context,
	iss *model.Issuer,
	params *oppb.AuthorizationParameters,
	client *model.Client,
	sessions map[string]string,
) (*connect.Response[oppb.AuthorizationResponse], error) {

	requestUri := params.RequestUri
	isPar := false
	if len(requestUri) > 0 {
		if !iss.Meta.RequestUriParameterSupported {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationRequestUriNotSupported(),
				},
			}), nil
		}

		pushedId, ok := strings.CutPrefix(requestUri, oauth.SchemeRequestURI)
		if ok {
			isPar = true
			// Use PushedAuthorizationRequest(PAR)
			// PushedAuthorization read
			par := &model.PushedAuthorization{
				Key: &oppb.CommonKey{
					Id: pushedId,
				},
				Client: client,
			}
			if err := dataprovider.Get(ctx, par); err != nil {
				if status.Code(err) == codes.NotFound {
					return connect.NewResponse(&oppb.AuthorizationResponse{
						AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
							Fail: failAuthorizationInvalidRequestUri("PushedAuthorization is expired"),
						},
					}), nil
				}
				return nil, err
			}
			if time.Now().Unix() > par.ExpireAt.Unix() {
				// 該当のPARが期限切れ場合
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri("PushedAuthorization is expired"),
					},
				}), nil
			}
			// override to PushedAuthorizationRequest
			params = par.Params
			// https://www.rfc-editor.org/rfc/rfc9126.html#section-7.3
			// An attacker could replay a request URI captured from a legitimate authorization request. In order to cope with
			// such attacks, the authorization server SHOULD make the request URIs one-time use.
			_ = dataprovider.Delete(ctx, par)

		} else {
			// get authrorization request
			r, err := http.NewRequest(http.MethodGet, requestUri, nil)
			if err != nil {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri(err.Error()),
					},
				}), nil
			}
			c := &http.Client{}
			resp, err := c.Do(r)
			if err != nil {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri(err.Error()),
					},
				}), nil
			}
			defer resp.Body.Close()
			b, err := io.ReadAll(resp.Body)
			if err != nil {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri(err.Error()),
					},
				}), nil
			}

			oldResponseType := params.ResponseType
			oldClientId := params.ClientId
			fail := analyzeAuthorizationRequestJwt(ctx, iss, client, string(b), params)
			if fail != nil {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: fail,
					},
				}), nil
			}

			// https://openid.net/specs/openid-connect-core-1_0.html#RequestObject
			// So that the request is a valid OAuth 2.0 Authorization Request,
			// values for the response_type and client_id parameters MUST be included using
			// the OAuth 2.0 request syntax, since they are REQUIRED by OAuth 2.0.
			// The values for these parameters MUST match those in the Request Object, if present.
			//
			if params.ResponseType != oldResponseType {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri("Parameter response_type not match"),
					},
				}), nil
			}
			if params.ClientId != oldClientId {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequestUri("Parameter client_id not match"),
					},
				}), nil
			}
		}
	}

	// リクエストオブジェクト処理
	request := params.Request
	if len(request) > 0 {
		if !iss.Meta.RequestParameterSupported {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationRequestNotSupported(),
				},
			}), nil
		}

		oldResponseType := params.ResponseType
		oldClientId := params.ClientId
		fail := analyzeAuthorizationRequestJwt(ctx, iss, client, request, params)
		if fail != nil {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: fail,
				},
			}), nil
		}

		// https://openid.net/specs/openid-connect-core-1_0.html#RequestObject
		// So that the request is a valid OAuth 2.0 Authorization Request,
		// values for the response_type and client_id parameters MUST be included using
		// the OAuth 2.0 request syntax, since they are REQUIRED by OAuth 2.0.
		// The values for these parameters MUST match those in the Request Object, if present.
		//
		if params.ResponseType != oldResponseType {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("Parameter response_type not match"),
				},
			}), nil
		}
		if params.ClientId != oldClientId {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("Parameter client_id not match"),
				},
			}), nil
		}
	}

	if client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server
		// FAPIではrequest/request_uriを使用しなければならない
		if request == "" && requestUri == "" {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("FAPI needs request or request_uri"),
				},
			}), nil
		}

		// https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server
		// FAPIではresponse_type:"code id_token" もしくは response_type:"code" + response_mode:"jwt" or 指定無し以外は許容しない
		if !(params.ResponseType == "code id_token") && !(params.ResponseType == "code" && params.ResponseMode == "jwt") {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest(fmt.Sprintf("FAPI does not allow response_type:%s response_mode:%s", params.ResponseType, params.ResponseMode)),
				},
			}), nil
		}

		if slices.Contains(params.Scopes, "openid") {
			// https://openid.net/specs/openid-financial-api-part-1-1_0.html#client-requesting-openid-scope
			if len(params.Nonce) == 0 {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequest("FAPI require nonce when requesting openid scope"),
					},
				}), nil
			}
		} else {
			// https://openid.net/specs/openid-financial-api-part-1-1_0.html#clients-not-requesting-openid-scope
			if len(params.State) == 0 {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequest("FAPI require state when not requesting openid scope"),
					},
				}), nil
			}
		}

		// https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#rfc.section.5.2.2
		// FAPIではPARを用いる場合、PKCE(256)を要求する
		if isPar {
			if !(len(params.CodeChallenge) > 0) || !(params.CodeChallengeMethod == oauth.PkceAlgorithmS256) {
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationInvalidRequest(fmt.Sprintf("FAPI require code_challenge and code_challenge_method(S256): %s, %s", params.CodeChallenge, params.CodeChallengeMethod)),
					},
				}), nil
			}
		}

	} else if client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
		// https://openid.net/specs/fapi-2_0-security-profile.html#section-5.3.1.2
		// FAPIではPARを使用しなければならない
		if requestUri == "" {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest("FAPI needs request_uri"),
				},
			}), nil
		}

		// https://openid.net/specs/fapi-2_0-security-profile.html#section-5.3.1.1
		// FAPI-2.0ではresponse_type:"code"のみ許可される
		if !(params.ResponseType == "code") {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest(fmt.Sprintf("FAPI does not allow response_type:%s response_mode:%s", params.ResponseType, params.ResponseMode)),
				},
			}), nil
		}

		// https://openid.net/specs/fapi-2_0-security-profile.html#section-5.3.1.2
		// PKCE(S256) は必須
		if !(len(params.CodeChallenge) > 0) || !(params.CodeChallengeMethod == oauth.PkceAlgorithmS256) {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest(fmt.Sprintf("FAPI require code_challenge and code_challenge_method(S256): %s, %s", params.CodeChallenge, params.CodeChallengeMethod)),
				},
			}), nil
		}
	}

	// implicitモードの場合はnonceが必須
	if strings.Contains(params.ResponseType, oauth.ResponseTypeIdToken) {
		if len(params.Nonce) == 0 {
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationInvalidRequest(fmt.Sprintf("Missing nonce: response_type:%s", params.ResponseType)),
				},
			}), nil
		}
	}

	var r *model.Request
	if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
		// リクエスト情報を生成する
		requestId, err := randutil.UniqueId()
		if err != nil {
			return err
		}
		r = model.NewRequest(requestId, iss.Meta.Issuer, client, params, time.Now())
		return dataprovider.Create(ctx, r)
	}); err != nil {
		log.Printf("[BACKEND_ERROR] request Set retry over:%v", err)
		return nil, err
	}

	// セッション状態を確認する
	ses := &model.Session{
		Details: model.SessionDetails{
			Issuer: iss.Key,
			Key: &oppb.CommonKey{
				Id: "",
			},
		},
	}
	sg := &model.SessionGroup{
		Key: &oppb.CommonKey{
			Id: client.Attribute.SessionGroupId,
		},
		Issuer: iss.Key,
	}
	if err := dataprovider.Get(ctx, sg); err != nil {
		return nil, err
	}

	if len(sessions[sg.Key.Id]) > 0 {
		// セッション情報が存在する
		ses = &model.Session{
			Details: model.SessionDetails{
				Issuer: iss.Key,
				Key: &oppb.CommonKey{
					Id: sessions[sg.Key.Id],
				},
			},
		}
		if err := dataprovider.Get(ctx, ses); err == nil {
			if ses.Details.SessionGroup.Key.Id == sg.Key.Id {
				age := time.Now().Unix() - ses.CreateAt.Unix()
				// maxageパラメータが存在する場合は認証期間のチェックを行う
				if len(params.MaxAge) > 0 {
					maxAge, _ := strconv.Atoi(params.MaxAge)
					if age > int64(maxAge) {
						// 認証情報が古すぎる
						ses.Details.Key.Id = ""
					}
				}
			} else {
				// sessionGroup名不一致
				ses.Details.Key.Id = ""
			}
		} else {
			// セッション情報取得失敗
			ses.Details.Key.Id = ""
		}
	}

	if slices.Contains(params.Prompts, "none") {
		if params.IdTokenHint != "" {
			hintClaims, err := VerifyIdToken(ctx, iss, params.IdTokenHint)
			if err != nil {
				log.Printf("VerifyIdToken error:%v", err)
				return connect.NewResponse(&oppb.AuthorizationResponse{
					AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
						Fail: failAuthorizationLoginRequired(),
					},
				}), nil
			}

			// id_token_hintが存在する場合は後段処理で、認可コード発行まで行う
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Issue{
					Issue: &oppb.AuthorizationNextActionIssue{
						RequestId:  r.Details.Key.Id,
						Subject:    hintClaims.Subject,
						Client:     client.Meta,
						AuthParams: params,
					},
				},
			}), nil
		} else if ses.Details.Key.Id == "" {
			// セッションが存在しない場合はエラー応答する
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Fail{
					Fail: failAuthorizationLoginRequired(),
				},
			}), nil
		} else {
			// セッションが存在する場合は後段処理で、認可コード発行まで行う
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Issue{
					Issue: &oppb.AuthorizationNextActionIssue{
						RequestId:  r.Details.Key.Id,
						SessionId:  ses.Details.Key.Id,
						Subject:    ses.Details.Meta.Subject,
						Client:     client.Meta,
						AuthParams: params,
					},
				},
			}), nil
		}

	} else if len(params.Prompts) == 0 {
		if ses.Details.Key.Id == "" {
			// セッションが存在しない場合は後段処理で、ログイン画面表示を行う
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Login{
					Login: &oppb.AuthorizationNextActionLogin{
						RequestId:  r.Details.Key.Id,
						Client:     client.Meta,
						AuthParams: params,
					},
				},
			}), nil
		} else {
			// セッションが存在する場合は後段処理で、認可コード発行まで行う
			return connect.NewResponse(&oppb.AuthorizationResponse{
				AuthorizationResponseOneof: &oppb.AuthorizationResponse_Issue{
					Issue: &oppb.AuthorizationNextActionIssue{
						RequestId:  r.Details.Key.Id,
						SessionId:  ses.Details.Key.Id,
						Subject:    ses.Details.Meta.Subject,
						Client:     client.Meta,
						AuthParams: params,
					},
				},
			}), nil
		}

	} else {
		return connect.NewResponse(&oppb.AuthorizationResponse{
			AuthorizationResponseOneof: &oppb.AuthorizationResponse_Login{
				Login: &oppb.AuthorizationNextActionLogin{
					RequestId:  r.Details.Key.Id,
					Client:     client.Meta,
					AuthParams: params,
				},
			},
		}), nil
	}
}
