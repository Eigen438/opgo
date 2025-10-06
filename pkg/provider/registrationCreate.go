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
	"log"
	"net/http"
	"net/url"
	"slices"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/protohelper"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

func (p *Provider) RegistrationCreate(ctx context.Context,
	req *connect.Request[oppb.RegistrationCreateRequest]) (*connect.Response[oppb.RegistrationCreateResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		magicWord, err := randutil.UniqueId()
		if err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("create client_id error"))
		}
		client := model.MakeDefaultClient(iss, magicWord, magicWord, time.Now())

		if len(req.Msg.RedirectUris) == 0 {
			return connect.NewResponse(&oppb.RegistrationCreateResponse{
				RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
					Fail: &oppb.RegistrationFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.RegistrationError{
							Error:            "invalid_client_metadata",
							ErrorDescription: "redirect_uris is required",
						},
					},
				},
			}), nil
		}

		// check redirect_uris
		for _, uri := range req.Msg.RedirectUris {
			u, err := url.Parse(uri)
			if err != nil {
				return connect.NewResponse(&oppb.RegistrationCreateResponse{
					RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
						Fail: &oppb.RegistrationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.RegistrationError{
								Error:            "invalid_client_metadata",
								ErrorDescription: "redirect_uris parse error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			if len(u.Fragment) > 0 {
				return connect.NewResponse(&oppb.RegistrationCreateResponse{
					RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
						Fail: &oppb.RegistrationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.RegistrationError{
								Error:            "invalid_client_metadata",
								ErrorDescription: "redirect_uris has fragment:" + uri,
							},
						},
					},
				}), nil
			}
		}

		// check sector_identifier_uri
		if len(req.Msg.SectorIdentifierUri) > 0 {
			r, err := http.NewRequest(http.MethodGet, req.Msg.SectorIdentifierUri, nil)
			if err != nil {
				return connect.NewResponse(&oppb.RegistrationCreateResponse{
					RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
						Fail: &oppb.RegistrationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.RegistrationError{
								Error:            "invalid_client_metadata",
								ErrorDescription: "sector_identifier_uri NewRequest error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			c := &http.Client{}
			resp, err := c.Do(r)
			if err != nil {
				return connect.NewResponse(&oppb.RegistrationCreateResponse{
					RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
						Fail: &oppb.RegistrationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.RegistrationError{
								Error:            "invalid_client_metadata",
								ErrorDescription: "sector_identifier_uri Client.Do error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			defer resp.Body.Close()
			s := &[]string{}
			if err := json.NewDecoder(resp.Body).Decode(s); err != nil {
				return connect.NewResponse(&oppb.RegistrationCreateResponse{
					RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
						Fail: &oppb.RegistrationFailResponse{
							StatusCode: http.StatusBadRequest,
							Error: &oppb.RegistrationError{
								Error:            "invalid_client_metadata",
								ErrorDescription: "sector_identifier_uri json.NewDecoder.Decode error:" + err.Error(),
							},
						},
					},
				}), nil
			}
			for _, redirectUri := range req.Msg.RedirectUris {
				if !slices.Contains(*s, redirectUri) {
					return connect.NewResponse(&oppb.RegistrationCreateResponse{
						RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Fail{
							Fail: &oppb.RegistrationFailResponse{
								StatusCode: http.StatusBadRequest,
								Error: &oppb.RegistrationError{
									Error:            "invalid_client_metadata",
									ErrorDescription: "sector_identifier_uri target not contains redirect_uris",
								},
							},
						},
					}), nil
				}
			}
		}

		// https://openid.net/specs/openid-connect-registration-1_0-errata2.html#ClientMetadata
		// The default, if omitted, is web.
		if req.Msg.ApplicationType == "" {
			req.Msg.ApplicationType = "web"
		}
		// https://openid.net/specs/openid-connect-registration-1_0-errata2.html#ClientMetadata
		// The default, if omitted, is RS256.
		if req.Msg.IdTokenSignedResponseAlg == "" {
			req.Msg.IdTokenSignedResponseAlg = "RS256"
		}
		// https://openid.net/specs/openid-connect-registration-1_0-errata2.html#ClientMetadata
		// If omitted, the default is that the Client will use only the code Response Type.
		if len(req.Msg.ResponseTypes) == 0 {
			req.Msg.ResponseTypes = []string{"code"}
		}
		// https://openid.net/specs/openid-connect-registration-1_0-errata2.html#ClientMetadata
		// If omitted, the default is client_secret_basic
		if req.Msg.TokenEndpointAuthMethod == "" {
			req.Msg.TokenEndpointAuthMethod = "client_secret_basic"
		}

		protohelper.Override(client.Meta, req.Msg)

		client.Identity.ClientSecret, err = randutil.UniqueId()
		if err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("create client_secret error"))
		}
		client.Identity.RegistrationAccessToken, err = randutil.UuidV4()
		if err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("create registration_access_token error"))
		}
		client.Identity.RegistrationClientUri = iss.Meta.RegistrationEndpoint + "?client_id=" + magicWord
		client.Identity.ClientSecretExpiresAt = 0 // time.Now().Add(24 * time.Hour).Unix() // TODO:

		sg := &model.SessionGroup{
			Key: &oppb.CommonKey{
				Id: magicWord,
			},
			Issuer: iss.Key,
			Attribute: &oppb.SessionGroupAttribute{
				AuthorizeSessionLifetimeSeconds: 3600,
			},
		}

		if err := dataprovider.Create(ctx, client); err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("DB create error:"+err.Error()))
		}
		if err := dataprovider.Create(ctx, sg); err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("DB create error:"+err.Error()))
		}
		success := &oppb.RegistrationCreateSuccessResponse{}

		log.Printf("Override(success, client.Identity)")
		protohelper.Override(success, client.Identity)

		log.Printf("Override(success, client.Meta)")
		protohelper.Override(success, client.Meta)
		return connect.NewResponse(&oppb.RegistrationCreateResponse{
			RegistrationCreateResponseOneof: &oppb.RegistrationCreateResponse_Success{
				Success: success,
			},
		}), nil
	}
}
