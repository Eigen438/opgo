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
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/claims"
	"github.com/Eigen438/opgo/internal/query"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

func (p *Provider) Userinfo(ctx context.Context,
	req *connect.Request[oppb.UserinfoRequest]) (*connect.Response[oppb.UserinfoResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		// アクセストークン取得
		var accessToken = ""
		// https://www.rfc-editor.org/rfc/rfc9110#name-authentication-scheme
		// 認証スキームは大文字小文字を区別しない
		authHeaderStrings := strings.Split(req.Msg.Authorization, " ")
		if len(authHeaderStrings) == 2 && strings.ToLower(authHeaderStrings[0]) == "bearer" {
			// Authorizationヘッダから取得
			accessToken = authHeaderStrings[1]
		} else if req.Msg.Method == http.MethodPost {
			// Content-Typeチェック
			if ct := req.Msg.ContentType; strings.HasPrefix(ct, httphelper.MimeTypeWwwFormUnlencoded) {
				// Formから取得
				vals := query.Parse(req.Msg.Form)
				accessToken = vals.Get("access_token")
			}
		}

		if accessToken == "" {
			return errorNoToken()
		}

		// アクセストークン取得
		access := &model.TokenIdentifier{
			Details: model.TokenIdentifierDetails{
				Identifier: accessToken,
				Authorized: model.Authorized{
					Request: model.RequestDetails{
						Client: &model.Client{
							Issuer: iss.Key,
						},
					},
				},
			},
		}
		if err := dataprovider.Get(ctx, access); err != nil {
			return errorInvalidToken()
		}

		// FAPI ClientCertificate チェック
		if access.Details.Authorized.Request.Client.Meta.TlsClientCertificateBoundAccessTokens {
			if access.Details.TlsClientCertificate != req.Msg.TlsClientCertificate {
				return errorInvalidRequest("Client certificate unmatch")
			}
		}

		in := map[string]interface{}{}
		err := json.Unmarshal([]byte(access.Details.Authorized.Claims), &in)
		if err != nil {
			return nil, err
		}

		// クレーム情報からユーザ情報の応答を作成する
		u := jwt.MapClaims{}
		// 必須クレーム設定
		u["sub"] = access.Details.Authorized.Subject

		// ClaimRulesを復元
		cr := claims.NewClaimRules()
		if err := json.Unmarshal(access.Details.Authorized.Request.RequestClaims, cr); err != nil {
			return nil, err
		}
		cr.MekeUserinfoClaims(in, u)

		if access.Details.Authorized.Request.Client.Meta.UserinfoSignedResponseAlg == "" {
			return responseJson(u)
		} else {
			u["iss"] = iss.Meta.Issuer
			u["aud"] = access.Details.Authorized.Request.Client.Identity.ClientId
			jwt, err := makeJwt(ctx, iss, u, access.Details.Authorized.Request.Client.Meta.UserinfoSignedResponseAlg)
			if err != nil {
				return nil, err
			}
			return responseJwt(jwt)
		}
	}
}

// https://datatracker.ietf.org/doc/html/rfc6750#section-3.1
// If the request lacks any authentication information (e.g., the client
// was unaware that authentication is necessary or attempted using an
// unsupported authentication method), the resource server SHOULD NOT
// include an error code or other error information.
//
// For example:
//
//	HTTP/1.1 401 Unauthorized
//	WWW-Authenticate: Bearer realm="example"
func errorNoToken() (*connect.Response[oppb.UserinfoResponse], error) {
	return connect.NewResponse(&oppb.UserinfoResponse{
		Headers: map[string]string{
			"WWW-Authenticate": "Bearer realm=\"token_access\"",
		},
		StatusCode: http.StatusUnauthorized,
	}), nil
}

// https://datatracker.ietf.org/doc/html/rfc6750#section-3.1
// invalid_request
//
//	The request is missing a required parameter, includes an
//	unsupported parameter or parameter value, repeats the same
//	parameter, uses more than one method for including an access
//	token, or is otherwise malformed.  The resource server SHOULD
//	respond with the HTTP 400 (Bad Request) status code.
func errorInvalidRequest(errorDescription string) (*connect.Response[oppb.UserinfoResponse], error) {
	return connect.NewResponse(&oppb.UserinfoResponse{
		Headers: map[string]string{
			"WWW-Authenticate": fmt.Sprintf("Bearer realm=\"token_access\", error=\"invalid_request\", error_description=\"%s\"", errorDescription),
		},
		StatusCode: http.StatusUnauthorized,
	}), nil
}

// https://datatracker.ietf.org/doc/html/rfc6750#section-3.1
// invalid_token
//
//	The access token provided is expired, revoked, malformed, or
//	invalid for other reasons.  The resource SHOULD respond with
//	the HTTP 401 (Unauthorized) status code.  The client MAY
//	request a new access token and retry the protected resource
//	request.
func errorInvalidToken() (*connect.Response[oppb.UserinfoResponse], error) {
	return connect.NewResponse(&oppb.UserinfoResponse{
		Headers: map[string]string{
			"WWW-Authenticate": "Bearer realm=\"token_access\", error=\"invalid_token\", error_description=\"The access token expired\"",
		},
		StatusCode: http.StatusUnauthorized,
	}), nil
}

func responseJson(claims any) (*connect.Response[oppb.UserinfoResponse], error) {
	b, err := json.MarshalIndent(claims, "", "  ")
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(&oppb.UserinfoResponse{
		Headers:    httphelper.DefaultJsonHeader(),
		StatusCode: http.StatusOK,
		Body:       string(b),
	}), nil
}

func responseJwt(jwt string) (*connect.Response[oppb.UserinfoResponse], error) {
	return connect.NewResponse(&oppb.UserinfoResponse{
		Headers:    httphelper.DefaultJwtHeader(),
		StatusCode: http.StatusOK,
		Body:       jwt,
	}), nil
}
