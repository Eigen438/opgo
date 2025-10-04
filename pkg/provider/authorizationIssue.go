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
	"log"
	"slices"
	"strconv"
	"strings"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

type responseSuccess struct {
	AccessToken string `json:"access_token,omitempty"`
	Code        string `json:"code,omitempty"`
	ExpiresIn   int    `json:"expires_in,omitempty"`
	IdToken     string `json:"id_token,omitempty"`
	State       string `json:"state,omitempty"`
	TokenType   string `json:"token_type,omitempty"`
}

func (p *Provider) AuthorizationIssue(ctx context.Context,
	req *connect.Request[oppb.AuthorizationIssueRequest]) (*connect.Response[oppb.AuthorizationIssueResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		// リクエスト情報を取り出す
		r := &model.Request{
			Details: model.RequestDetails{
				Key: &oppb.CommonKey{
					Id: req.Msg.RequestId,
				},
				Client: &model.Client{
					Issuer: iss.Key,
				},
			},
		}
		if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
			return dataprovider.Get(ctx, r)
		}); err != nil {
			log.Printf("[BACKEND_ERROR] request Get retry over:%v", err)
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("request not found"))
		}

		authTime := time.Now()
		if req.Msg.SessionId != "" {
			ses := &model.Session{
				Details: model.SessionDetails{
					Key: &oppb.CommonKey{
						Id: req.Msg.SessionId,
					},
					Issuer: r.Details.Client.Issuer,
				},
			}
			if err := dataprovider.Get(ctx, ses); err == nil {
				if req.Msg.Subject != ses.Details.Meta.Subject {
					log.Printf("[BACKEND_ERROR] subject mismatch: %s != %s", req.Msg.Subject, ses.Details.Meta.Subject)
					return nil, connect.NewError(connect.CodePermissionDenied, fmt.Errorf("subject mismatch"))
				}
				authTime = ses.CreateAt
			}
		}

		authorized := model.Authorized{
			AuthTime:  authTime,
			Claims:    req.Msg.Claims,
			Request:   r.Details,
			SessionId: req.Msg.SessionId,
			Subject:   req.Msg.Subject,
		}

		success := &responseSuccess{
			State: r.Details.AuthParams.State,
		}

		if slices.Contains(strings.Split(r.Details.AuthParams.ResponseType, " "), oauth.ResponseTypeCode) {
			var authCode *model.AuthorizationCode
			if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				// 認可コード情報を生成する
				code, err := randutil.UuidV4()
				if err != nil {
					return err
				}
				authCode = &model.AuthorizationCode{
					CreateAt: time.Now(),
					Details: model.AuthorizationCodeDetails{
						Authorized: authorized,
						Code:       code,
					},
					ExpireAt: time.Now().Add(time.Duration(r.Details.Client.Attribute.AuthorizationCodeLifetimeSeconds) * time.Second),
				}
				// 認可コード情報を作成する
				if err := dataprovider.Create(ctx, authCode); err != nil {
					return err
				}

				if r.Details.AuthParams.IsPar {
					// https://www.rfc-editor.org/rfc/rfc9126.html#section-7.3
					// An attacker could replay a request URI captured from a legitimate authorization request. In order to cope with
					// such attacks, the authorization server SHOULD make the request URIs one-time use.
					par := &model.PushedAuthorization{
						Params: &oppb.AuthorizationParameters{
							ParKey: r.Details.AuthParams.ParKey,
						},
						Client: r.Details.Client,
					}
					if err := dataprovider.Delete(ctx, par); err != nil {
						return err
					}
				}

				// リクエスト情報を削除する
				return dataprovider.Delete(ctx, r)
			}); err != nil {
				log.Printf("[BACKEND_ERROR] DB write error(AuthorizationCode)")
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("DB write error"))
			}
			success.Code = authCode.Details.Code
		}

		if slices.Contains(strings.Split(r.Details.AuthParams.ResponseType, " "), oauth.ResponseTypeToken) {
			if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				access, err := makeAccessTokenIdentifier(authorized, time.Now(), "")
				if err != nil {
					log.Printf("makeAccessTokenIdentifier error:%s", err.Error())
					return err
				}
				if err := dataprovider.Create(ctx, access); err != nil {
					return err
				}
				success.AccessToken = access.Details.Identifier
				success.ExpiresIn = int(r.Details.Client.Attribute.AccessTokenLifetimeSeconds)
				success.TokenType = "Bearer"
				return nil
			}); err != nil {
				log.Printf("[BACKEND_ERROR] DB write error(TokenIdentifier)")
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("DB write error"))
			}
		}

		if slices.Contains(strings.Split(r.Details.AuthParams.ResponseType, " "), oauth.ResponseTypeIdToken) {
			if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
				id, err := makeIdTokenIdentifier(authorized, time.Now())
				if err != nil {
					log.Printf("makeIdTokenIdentifier error:%s", err.Error())
					return err
				}
				if err := dataprovider.Create(ctx, id); err != nil {
					return err
				}

				claims, err := makeIdTokenClaims(iss, id, time.Now(), success.Code, success.AccessToken, success.State)
				if err != nil {
					return err
				}
				success.IdToken, err = makeJwt(ctx, iss, claims, id.Details.Authorized.Request.Client.Meta.IdTokenSignedResponseAlg)
				return err
			}); err != nil {
				log.Printf("[BACKEND_ERROR] DB write error(TokenIdentifier)")
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("DB write error"))
			}
		}

		vals := map[string]string{}
		vals["access_token"] = success.AccessToken
		if len(success.AccessToken) > 0 {
			vals["expires_in"] = strconv.Itoa(success.ExpiresIn)
			vals["token_type"] = success.TokenType
		}
		vals["code"] = success.Code
		vals["id_token"] = success.IdToken
		vals["session_state"] = getSessionState(r.Details.Client.Issuer.Id, r.Details.Client.Identity.ClientId, req.Msg.SessionId)
		vals["state"] = success.State

		builder, err := newRedirectBuilder(iss, r.Details.Client, r.Details.AuthParams, vals)
		if err != nil {
			log.Printf("[BACKEND_ERROR] redirect build error")
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("NewRedirectBuilder error: %v", err))
		}
		out, err := builder.Build(ctx, time.Now())
		if err != nil {
			log.Printf("[BACKEND_ERROR] redirect build error: %v", err)
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("builder.Build error: %v", err))
		}
		if builder.IsFormPost() {
			return connect.NewResponse(&oppb.AuthorizationIssueResponse{
				AuthorizationIssueResponseOneof: &oppb.AuthorizationIssueResponse_Html{
					Html: &oppb.AuthorizationHtmlResponse{
						Content: out,
					},
				},
			}), nil
		} else {
			return connect.NewResponse(&oppb.AuthorizationIssueResponse{
				AuthorizationIssueResponseOneof: &oppb.AuthorizationIssueResponse_Redirect{
					Redirect: &oppb.AuthorizationRedirectResponse{
						Url: out,
					},
				},
			}), nil
		}
	}
}
