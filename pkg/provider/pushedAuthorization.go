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
	"net/http"
	"net/url"
	"slices"
	"strings"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/query"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (p *Provider) PushedAuthorization(ctx context.Context,
	req *connect.Request[oppb.PushedAuthorizationRequest]) (*connect.Response[oppb.PushedAuthorizationResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		if req.Msg.Method == http.MethodPost {
			// Check content type.
			if ct := req.Msg.ContentType; !strings.HasPrefix(ct, httphelper.MimeTypeWwwFormUnlencoded) {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusUnsupportedMediaType,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "Unsupported content type:" + ct,
							},
						},
					},
				}), nil
			}
		} else {
			// Unexpected method used.
			return connect.NewResponse(&oppb.PushedAuthorizationResponse{
				PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
					Fail: &oppb.PushedAuthorizationFailResponse{
						StatusCode: http.StatusMethodNotAllowed,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorInvalidRequest,
							ErrorDescription: "Method not allowed:" + req.Msg.Method,
						},
					},
				},
			}), nil
		}

		vals := query.Parse(req.Msg.Form)
		clientId := vals.Get("client_id")
		clientAssertion := vals.Get("client_assertion")

		// Identify client_id
		if len(clientId) > 0 {
			// use clientId
		} else if len(clientAssertion) > 0 {
			// Get from client_assertion
			rc := &jwt.RegisteredClaims{}
			_, _, err := jwt.NewParser().ParseUnverified(clientAssertion, rc)
			if err != nil {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "Could not parse client_assertion:" + clientAssertion,
							},
						},
					},
				}), nil
			}
			clientId = rc.Issuer
		} else {
			// If neither of the above applies
			return connect.NewResponse(&oppb.PushedAuthorizationResponse{
				PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
					Fail: &oppb.PushedAuthorizationFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorInvalidClient,
							ErrorDescription: "clinet_id not found",
						},
					},
				},
			}), nil
		}

		client := &model.Client{
			Issuer: iss.Key,
			Identity: &oppb.ClientIdentity{
				ClientId: clientId,
			},
		}
		if err := dataprovider.Get(ctx, client); err != nil {
			if status.Code(err) == codes.NotFound {
				// If neither of the above applies
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidClient,
								ErrorDescription: fmt.Sprintf("Clinet not found:%s err:%v", clientId, err),
							},
						},
					},
				}), nil
			}
			return nil, err
		}

		params := parseParams(client, req.Msg.Form)

		// Reject if request_uri is present in the request.
		// https://www.rfc-editor.org/rfc/rfc9126.html#section-2.1
		if len(params.RequestUri) > 0 {
			return connect.NewResponse(&oppb.PushedAuthorizationResponse{
				PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
					Fail: &oppb.PushedAuthorizationFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.OauthError{
							Error:            oauth.TokenErrorInvalidRequest,
							ErrorDescription: "Denied request_uri parameter:" + params.RequestUri,
						},
					},
				},
			}), nil
		}

		// Endpoint authentication check
		cauth := &clientAuthentication{
			AllowAudience: []string{
				iss.Meta.PushedAuthorizationRequestEndpoint,
				iss.Meta.TokenEndpoint,
				iss.Meta.Issuer,
			},
			BasicAuth: req.Msg.BasicAuth,
			Client:    client,
			Issuer:    iss,
			Values:    query.Parse(req.Msg.Form),
		}
		if terr := checkClientAuthentication(ctx, cauth); terr != nil {
			return connect.NewResponse(&oppb.PushedAuthorizationResponse{
				PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
					Fail: &oppb.PushedAuthorizationFailResponse{
						StatusCode: http.StatusBadRequest,
						Error:      terr.Error,
					},
				},
			}), nil
		}

		// Request object processing
		if len(params.Request) > 0 {
			if !iss.Meta.RequestParameterSupported {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.AuthorizationErrorRequestNotSupported,
								ErrorDescription: "request parametaer not supported",
							},
						},
					},
				}), nil
			}
			oldResponseType := params.ResponseType
			oldClientId := params.ClientId
			res := analyzeAuthorizationRequestJwt(ctx, iss, client, params.Request, params)
			if res != nil {
				// Request object parsing failed
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: res.StatusCode,
							Error: &oppb.OauthError{
								Error:            res.Error.Error,
								ErrorDescription: res.Error.ErrorDescription,
							},
						},
					},
				}), nil
			}

			// https://openid.net/specs/openid-connect-core-1_0.html#RequestObject
			// So that the request is a valid OAuth 2.0 Authorization Request,
			// values for the response_type and client_id parameters MUST be included using
			// the OAuth 2.0 request syntax, since they are REQUIRED by OAuth 2.0.
			// The values for these parameters MUST match those in the Request Object, if present.
			//
			if len(oldResponseType) > 0 && params.ResponseType != oldResponseType {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "Parameter response_type not match",
							},
						},
					},
				}), nil
			}
			if len(oldClientId) > 0 && params.ClientId != oldClientId {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "Parameter client_id not match",
							},
						},
					},
				}), nil
			}

			// Reject if request_uri is present in the request.
			// https://www.rfc-editor.org/rfc/rfc9126.html#section-2.1
			if len(params.RequestUri) > 0 {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.AuthorizationErrorInvalidRequestObject,
								ErrorDescription: "Denied request_uri parameter:" + params.RequestUri,
							},
						},
					},
				}), nil
			}
		}

		// redirect_uri check
		if len(client.Meta.RedirectUris) > 0 {
			u, err := url.Parse(params.RedirectUri)
			if err != nil {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "redirect_uri parse error",
							},
						},
					},
				}), nil
			}

			if !slices.Contains(client.Meta.RedirectUris, u.Scheme+"://"+u.Host+u.Path) {
				return connect.NewResponse(&oppb.PushedAuthorizationResponse{
					PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Fail{
						Fail: &oppb.PushedAuthorizationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.OauthError{
								Error:            oauth.TokenErrorInvalidRequest,
								ErrorDescription: "invalid redirect_uri",
							},
						},
					},
				}), nil
			}
		}

		// set par flag
		params.IsPar = true

		var pa *model.PushedAuthorization
		if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
			// Generate PAR information
			pushId, err := randutil.UniqueId()
			if err != nil {
				return err
			}
			params.ParKey = pushId
			pa = &model.PushedAuthorization{
				Client:   client,
				Params:   params,
				CreateAt: time.Now(),
				ExpireAt: time.Now().Add(time.Duration(60) * time.Second),
			}
			return dataprovider.Create(ctx, pa)
		}); err != nil {
			return nil, err
		}

		return connect.NewResponse(&oppb.PushedAuthorizationResponse{
			PushedAuthorizationResponseOneof: &oppb.PushedAuthorizationResponse_Success{
				Success: &oppb.PushedAuthorizationSuccessResponse{
					RequestUri: oauth.SchemeRequestURI + pa.Params.ParKey,
					ExpiresIn:  60,
				},
			},
		}), nil
	}
}
