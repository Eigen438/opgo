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
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"log"
	"net/http"
	"slices"
	"strings"
	"sync"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/query"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

type tokenRequest struct {
	ClientAssertion     string
	ClientAssertionType string
	ClientId            string
	ClientSecret        string
	Code                string
	CodeVerifier        string
	GrantType           string
	RedirectUri         string
	RefreshToken        string
	Scope               string
}

func (p *Provider) Token(ctx context.Context,
	req *connect.Request[oppb.TokenRequest]) (*connect.Response[oppb.TokenResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		// ヘッダチェック
		if ct := req.Msg.ContentType; !strings.HasPrefix(ct, httphelper.MimeTypeWwwFormUnlencoded) {
			return connect.NewResponse(&oppb.TokenResponse{
				TokenResponseOneof: &oppb.TokenResponse_Fail{
					Fail: &oppb.TokenFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorInvalidRequest,
							ErrorDescription: "content-type does not has " + httphelper.MimeTypeWwwFormUnlencoded + ":" + ct,
						},
					},
				},
			}), nil
		}

		// パラメータパース（Query)
		vals := query.Parse(req.Msg.Form)
		tr := &tokenRequest{
			Code:         vals.Get("code"),
			CodeVerifier: vals.Get("code_verifier"),
			GrantType:    vals.Get("grant_type"),
			RedirectUri:  vals.Get("redirect_uri"),
			RefreshToken: vals.Get("refresh_token"),
			Scope:        vals.Get("scope"),
		}

		switch tr.GrantType {
		case "authorization_code":
			authCode := &model.AuthorizationCode{
				Details: model.AuthorizationCodeDetails{
					Code: tr.Code,
					Authorized: model.Authorized{
						Request: model.RequestDetails{
							Client: &model.Client{
								Issuer: iss.Key,
							},
						},
					},
				},
			}
			if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				return dataprovider.Get(ctx, authCode)
			}); err != nil {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: fmt.Sprintf("Auth code not found:%s err:%v", tr.Code, err),
							},
						},
					},
				}), nil
			}

			// エンドポイント認証チェック
			params := &clientAuthentication{
				AllowAudience: []string{
					iss.Meta.TokenEndpoint,
					iss.Meta.Issuer,
				},
				BasicAuth: req.Msg.BasicAuth,
				Client:    authCode.Details.Authorized.Request.Client,
				Issuer:    iss,
				Values:    vals,
			}
			if terr := checkClientAuthentication(ctx, params); terr != nil {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: terr,
					},
				}), nil
			}

			if params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 ||
				params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
				// FAPIの場合はさらにClientCertificateをチェックする
				// checkClientAuthenticationの中では実施しない。
				// pushedAuthenticationRequestでもcheckClientAuthenticationを使用しているため。
				if !slices.Contains(authCode.Details.Authorized.Request.Client.Attribute.TlsClientCertificates, req.Msg.TlsClientCertificate) {
					return connect.NewResponse(&oppb.TokenResponse{
						TokenResponseOneof: &oppb.TokenResponse_Fail{
							Fail: &oppb.TokenFailResponse{
								StatusCode: http.StatusBadRequest,
								Error: &oppb.OauthError{
									Error:            oauth.TokenErrorInvalidRequest,
									ErrorDescription: "invalid client certificate",
								},
							},
						},
					}), nil
				}
			}

			// 認可コード検証①：期限切れ
			if time.Now().After(authCode.ExpireAt) {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Auth code is expired:" + tr.Code,
							},
						},
					},
				}), nil
			}
			// 認可コード検証②：使用済み
			if authCode.Details.IsUsed {
				// 不正アクセスが疑われるため、関連するトークンを全て無効化する
				// https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2
				// If an authorization code is used more than
				// once, the authorization server MUST deny the request and SHOULD
				// revoke (when possible) all tokens previously issued based on
				// that authorization code.
				p.callbacks.DeleteTokensWithRequetId(ctx, authCode.Details.Authorized.Request.Client.Issuer.Id, authCode.Details.Authorized.Request.Key.Id)
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Auth code was used:" + tr.Code,
							},
						},
					},
				}), nil
			}

			// PKCEチェック
			if authCode.Details.Authorized.Request.AuthParams.CodeChallenge != "" {
				switch authCode.Details.Authorized.Request.AuthParams.CodeChallengeMethod {
				case oauth.PkceAlgorithmS256:
					sha := sha256.Sum256([]byte(tr.CodeVerifier))
					encodedSha := base64.URLEncoding.WithPadding(base64.NoPadding).EncodeToString(sha[:])
					if encodedSha != authCode.Details.Authorized.Request.AuthParams.CodeChallenge {
						return connect.NewResponse(&oppb.TokenResponse{
							TokenResponseOneof: &oppb.TokenResponse_Fail{
								Fail: &oppb.TokenFailResponse{
									StatusCode: http.StatusBadRequest,
									Error: &oppb.OauthError{
										Error:            oauth.TokenErrorInvalidGrant,
										ErrorDescription: "verfier unmatch(S256)",
									},
								},
							},
						}), nil
					}
				case oauth.PkceAlgorithmPlane:
					if tr.CodeVerifier != authCode.Details.Authorized.Request.AuthParams.CodeChallenge {
						return connect.NewResponse(&oppb.TokenResponse{
							TokenResponseOneof: &oppb.TokenResponse_Fail{
								Fail: &oppb.TokenFailResponse{
									StatusCode: http.StatusBadRequest,
									Error: &oppb.OauthError{
										Error:            oauth.TokenErrorInvalidGrant,
										ErrorDescription: "verfier unmatch(plane)",
									},
								},
							},
						}), nil
					}
				case "":
					if tr.CodeVerifier != authCode.Details.Authorized.Request.AuthParams.CodeChallenge {
						return connect.NewResponse(&oppb.TokenResponse{
							TokenResponseOneof: &oppb.TokenResponse_Fail{
								Fail: &oppb.TokenFailResponse{
									StatusCode: http.StatusBadRequest,
									Error: &oppb.OauthError{
										Error:            oauth.TokenErrorInvalidGrant,
										ErrorDescription: "verfier unmatch(plane)",
									},
								},
							},
						}), nil
					}
				}
			}

			success := &oppb.TokenSuccessResponse{}
			err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				// トランザクションのためauthCodeを再取得
				if err := dataprovider.Get(ctx, authCode); err != nil {
					log.Printf("authCode get error:%s", err.Error())
					return err
				}
				if authCode.Details.IsUsed {
					log.Printf("authCode was used")
					return fmt.Errorf("authCode was used")
				}

				// トランザクション内の並行処理
				var goError error
				wg := sync.WaitGroup{}

				// アクセストークン生成
				wg.Add(1)
				go func() {
					defer wg.Done()
					access, err := MakeAccessTokenIdentifier(authCode.Details.Authorized, time.Now(), req.Msg.TlsClientCertificate)
					if err != nil {
						log.Printf("data.MakeAccessTokenIdentifier error:%s", err.Error())
						goError = err
						return
					}
					if err := dataprovider.Create(ctx, access); err != nil {
						log.Printf("create access token error:%s", err.Error())
						goError = err
						return
					}
					success.AccessToken = access.Details.Identifier
					success.ExpiresIn = authCode.Details.Authorized.Request.Client.Attribute.AccessTokenLifetimeSeconds
					success.TokenType = "Bearer"
				}()

				// リフレッシュトークン生成
				wg.Add(1)
				go func() {
					defer wg.Done()
					if slices.Contains(authCode.Details.Authorized.Request.AuthParams.Scopes, "offline_access") {
						refresh, err := MakeRefreshTokenIdentifier(authCode.Details.Authorized, time.Now())
						if err != nil {
							log.Printf("data.MakeRefreshTokenIdentifier error:%s", err.Error())
							goError = err
							return
						}
						if err := dataprovider.Create(ctx, refresh); err != nil {
							log.Printf("create refresh token error:%s", err.Error())
							goError = err
							return
						}
						success.RefreshToken = refresh.Details.Identifier
					}
				}()

				// IDトークン生成
				wg.Add(1)
				go func() {
					defer wg.Done()
					if slices.Contains(authCode.Details.Authorized.Request.AuthParams.Scopes, "openid") {
						id, err := MakeIdTokenIdentifier(authCode.Details.Authorized, time.Now())
						if err != nil {
							log.Printf("data.MakeIdTokenIdentifier error:%s", err.Error())
							goError = err
							return
						}

						// IDトークン署名
						wg.Add(1)
						go func() {
							defer wg.Done()
							claims, err := MakeIdTokenClaims(iss, id, time.Now(), "", "", "")
							if err != nil {
								goError = err
								return
							}
							success.IdToken, err = makeJwt(ctx, iss, claims, id.Details.Authorized.Request.Client.Meta.IdTokenSignedResponseAlg)
							if err != nil {
								goError = err
								return
							}
						}()

						if err := dataprovider.Create(ctx, id); err != nil {
							log.Printf("create idToken error:%s", err.Error())
							goError = err
							return
						}
					}
				}()
				wg.Wait()

				// 並列処理中のエラーを判定する
				if goError != nil {
					return goError
				}

				authCode.Details.IsUsed = true // 使用済みにする
				if err := dataprovider.Set(ctx, authCode); err != nil {
					log.Printf("update authCode error:%s", err.Error())
					return err
				}
				return nil
			})
			if err != nil {
				log.Printf("[ERROR] exchange authorization code exchange:%#v", err)
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Auth code exchange transaction error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			return connect.NewResponse(&oppb.TokenResponse{
				TokenResponseOneof: &oppb.TokenResponse_Success{
					Success: success,
				},
			}), nil

		case "refresh_token":
			refreshToken := &model.TokenIdentifier{
				Details: model.TokenIdentifierDetails{
					Identifier: tr.RefreshToken,
					Authorized: model.Authorized{
						Request: model.RequestDetails{
							Client: &model.Client{
								Issuer: iss.Key,
							},
						},
					},
				},
			}
			if err := dataprovider.Get(ctx, refreshToken); err != nil {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Refresh token not found:" + tr.RefreshToken,
							},
						},
					},
				}), nil
			}

			// tokenエンドポイント認証チェック
			params := &clientAuthentication{
				AllowAudience: []string{
					iss.Meta.TokenEndpoint,
					iss.Meta.Issuer,
				},
				BasicAuth: req.Msg.BasicAuth,
				Client:    refreshToken.Details.Authorized.Request.Client,
				Issuer:    iss,
				Values:    vals,
			}
			if terr := checkClientAuthentication(ctx, params); terr != nil {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: terr,
					},
				}), nil
			}

			if params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 ||
				params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
				// FAPIの場合はさらにClientCertificateをチェックする
				// checkClientAuthenticationの中では実施しない。
				// pushedAuthenticationRequestでもcheckClientAuthenticationを使用しているため。
				if !slices.Contains(refreshToken.Details.Authorized.Request.Client.Attribute.TlsClientCertificates, req.Msg.TlsClientCertificate) {
					return connect.NewResponse(&oppb.TokenResponse{
						TokenResponseOneof: &oppb.TokenResponse_Fail{
							Fail: &oppb.TokenFailResponse{
								StatusCode: http.StatusBadRequest,
								Error: &oppb.OauthError{
									Error:            oauth.TokenErrorInvalidRequest,
									ErrorDescription: "invalid client certificate",
								},
							},
						},
					}), nil
				}
			}

			// リフレッシュトークン有効期限切れチェック
			if time.Now().After(refreshToken.ExpireAt) {
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Refresh token is expired:" + tr.RefreshToken,
							},
						},
					},
				}), nil
			}

			success := &oppb.TokenSuccessResponse{}
			err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				// トランザクションのためrefreshTokenを再取得
				if err := dataprovider.Get(ctx, refreshToken); err != nil {
					log.Printf("refreshToken get error:%s", err.Error())
					return err
				}

				tlsClientCertificate := req.Msg.TlsClientCertificate
				access, err := MakeAccessTokenIdentifier(refreshToken.Details.Authorized, time.Now(), tlsClientCertificate)
				if err != nil {
					return err
				}
				if err := dataprovider.Create(ctx, access); err != nil {
					log.Printf("create access token error:%s", err.Error())
					return err
				}
				success.AccessToken = access.Details.Identifier
				success.ExpiresIn = refreshToken.Details.Authorized.Request.Client.Attribute.AccessTokenLifetimeSeconds
				success.TokenType = "Bearer"

				if slices.Contains(refreshToken.Details.Authorized.Request.AuthParams.Scopes, "offline_access") {
					refresh, err := MakeRefreshTokenIdentifier(refreshToken.Details.Authorized, time.Now())
					if err != nil {
						log.Printf("data.MakeRefreshTokenIdentifier error:%s", err.Error())
						return err
					}
					if err := dataprovider.Create(ctx, refresh); err != nil {
						log.Printf("create refresh token error:%s", err.Error())
						return err
					}
					success.RefreshToken = refresh.Details.Identifier
				}

				if slices.Contains(refreshToken.Details.Authorized.Request.AuthParams.Scopes, "openid") {
					id, err := MakeIdTokenIdentifier(refreshToken.Details.Authorized, time.Now())
					if err != nil {
						log.Printf("data.MakeIdTokenIdentifier error:%s", err.Error())
						return err
					}
					if err := dataprovider.Create(ctx, id); err != nil {
						return err
					}

					claims, err := MakeIdTokenClaims(iss, id, time.Now(), "", "", "")
					if err != nil {
						return err
					}
					success.IdToken, err = makeJwt(ctx, iss, claims, id.Details.Authorized.Request.Client.Meta.IdTokenSignedResponseAlg)
					if err != nil {
						return err
					}
				}
				return nil
				// リフレッシュトークンを１回限りの使用にするかは拡張フラグで制御すること
				// return dataprovider.Delete(ctx, refreshToken)
			})
			if err != nil {
				log.Printf("[ERROR] exchange refresh token exchange:%#v", err)
				return connect.NewResponse(&oppb.TokenResponse{
					TokenResponseOneof: &oppb.TokenResponse_Fail{
						Fail: &oppb.TokenFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidGrant,
								ErrorDescription: "Refresh token exchange transaction error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			return connect.NewResponse(&oppb.TokenResponse{
				TokenResponseOneof: &oppb.TokenResponse_Success{
					Success: success,
				},
			}), nil

		default:
			return connect.NewResponse(&oppb.TokenResponse{
				TokenResponseOneof: &oppb.TokenResponse_Fail{
					Fail: &oppb.TokenFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorUnsupportedGrantType,
							ErrorDescription: "unknown grant_type:" + tr.GrantType,
						},
					},
				},
			}), nil
		}
	}
}

type clientAuthentication struct {
	AllowAudience []string
	BasicAuth     *oppb.BasicAuth
	Client        *model.Client
	Issuer        *model.Issuer
	Values        *query.Result
}

func checkClientAuthentication(ctx context.Context, params *clientAuthentication) *oppb.TokenFailResponse {
	if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodNone {
		return nil
	}
	if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodClientSecretPost {
		if params.Client.Identity.ClientId == params.Values.Get("client_id") &&
			params.Client.Identity.ClientSecret == params.Values.Get("client_secret") {
			return nil
		} else {
			return &oppb.TokenFailResponse{
				StatusCode: http.StatusBadRequest,
				Error: &oppb.OauthError{
					Error:            oauth.TokenErrorInvalidGrant,
					ErrorDescription: "client_secret_post: client_id or client_secret not match",
				},
			}
		}
	} else if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodClientSecretBasic {
		if params.BasicAuth != nil {
			if params.Client.Identity.ClientId == params.BasicAuth.Username &&
				params.Client.Identity.ClientSecret == params.BasicAuth.Password {
				return nil
			} else {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidGrant,
						ErrorDescription: "client_secret_basic: client_id or client_secret not match",
					},
				}
			}
		} else {
			return &oppb.TokenFailResponse{
				StatusCode: http.StatusBadRequest,
				Error: &oppb.OauthError{
					Error:            oauth.TokenErrorInvalidGrant,
					ErrorDescription: "client_secret_basic: missig basic authorization",
				},
			}
		}
	} else if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodPrivateKeyJwt {
		// private_key_jwt
		clientAssertion := params.Values.Get("client_assertion")
		clientAssertionType := params.Values.Get("client_assertion_type")
		if (len(clientAssertion) > 0) && (len(clientAssertionType) > 0) {
			rc := &jwt.RegisteredClaims{}
			// invalid_grant
			// The provided authorization grant (e.g., authorization
			// code, resource owner credentials) or refresh token is
			// invalid, expired, revoked, does not match the redirection
			// URI used in the authorization request, or was issued to
			// another client.
			token, err := parseJwt(ctx, params.Client.Meta, clientAssertion, rc)
			if err != nil {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidGrant,
						ErrorDescription: "private_jwt parse error:" + err.Error(),
					},
				}
			}
			exp, err := rc.GetExpirationTime()
			if err != nil {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidGrant,
						ErrorDescription: "private_jwt no exp:" + err.Error(),
					},
				}
			}
			if exp.Unix() < time.Now().Unix() {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidGrant,
						ErrorDescription: "private_jwt expired",
					},
				}
			}

			if params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 ||
				params.Client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
				// https://openid.net/specs/openid-financial-api-part-2-1_0.html#algorithm-considerations
				// FAPIではクライアントjwtの署名アルゴリズムは制限がある
				if slices.Contains(fapiRejectionAlg, fmt.Sprintf("%v", token.Header["alg"])) {
					return &oppb.TokenFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorInvalidClient,
							ErrorDescription: fmt.Sprintf("signing alg not allow:%v", token.Header["alg"]),
						},
					}
				}
			}

			if (rc.Issuer != params.Client.Identity.ClientId) || (rc.Subject != params.Client.Identity.ClientId) {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidClient,
						ErrorDescription: fmt.Sprintf("invalid claims(client):%+v", rc),
					},
				}
			}
			// https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication
			allow := false
			for _, aud := range params.AllowAudience {
				if slices.Contains(rc.Audience, aud) {
					allow = true
					break
				}
			}
			if !allow {
				return &oppb.TokenFailResponse{
					StatusCode: http.StatusBadRequest,
					Error: &oppb.OauthError{
						Error:            oauth.TokenErrorInvalidRequest,
						ErrorDescription: fmt.Sprintf("invalid claims(audience):%+v", rc),
					},
				}
			}
			return nil
		} else {
			return &oppb.TokenFailResponse{
				StatusCode: http.StatusBadRequest,
				Error: &oppb.OauthError{
					Error:            oauth.TokenErrorInvalidRequest,
					ErrorDescription: "missing client_assertion or client_assertion_type",
				},
			}
		}
	} else if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodTlsClientAuth {
		if params.Client.Identity.ClientId != params.Values.Get("client_id") {
			return &oppb.TokenFailResponse{
				StatusCode: http.StatusBadRequest,
				Error: &oppb.OauthError{
					Error:            oauth.TokenErrorInvalidGrant,
					ErrorDescription: "The client is invalid",
				},
			}
		}
		return nil
	} else if params.Client.Meta.TokenEndpointAuthMethod == oauth.TokenEndpointAuthMethodSelfSignedTlsClientAuth {
		if params.Client.Identity.ClientId != params.Values.Get("client_id") {
			return &oppb.TokenFailResponse{
				StatusCode: http.StatusBadRequest,
				Error: &oppb.OauthError{
					Error:            oauth.TokenErrorInvalidGrant,
					ErrorDescription: "The client is invalid",
				},
			}
		}
		return nil
	} else {
		return &oppb.TokenFailResponse{
			StatusCode: http.StatusInternalServerError,
			Error: &oppb.OauthError{
				Error:            oauth.TokenErrorUnauthorizedClient,
				ErrorDescription: "unknown token_endpoint_auth_method:" + params.Client.Meta.TokenEndpointAuthMethod,
			},
		}
	}
}
