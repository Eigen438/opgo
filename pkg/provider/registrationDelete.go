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

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

func (p *Provider) RegistrationDelete(ctx context.Context,
	req *connect.Request[oppb.RegistrationDeleteRequest]) (*connect.Response[oppb.RegistrationDeleteResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		c := &model.Client{
			Identity: &oppb.ClientIdentity{
				ClientId: req.Msg.ClientId,
			},
			Issuer: iss.Key,
		}
		if err := dataprovider.Get(ctx, c); err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("delete client_id error"))
		}
		if req.Msg.RegistrationAccessToken != c.Identity.RegistrationAccessToken {
			return connect.NewResponse(&oppb.RegistrationDeleteResponse{
				RegistrationDeleteResponseOneof: &oppb.RegistrationDeleteResponse_Fail{
					Fail: &oppb.RegistrationFailResponse{
						StatusCode: http.StatusBadRequest,
						Error: &oppb.RegistrationError{
							Error:            "invalid_request",
							ErrorDescription: "unknown client",
						},
					},
				},
			}), nil
		}
		_ = dataprovider.Delete(ctx, c)

		sg := &model.SessionGroup{
			Key: &oppb.CommonKey{
				Id: c.Attribute.SessionGroupId,
			},
			Issuer: iss.Key,
		}
		_ = dataprovider.Delete(ctx, sg)

		return connect.NewResponse(&oppb.RegistrationDeleteResponse{
			RegistrationDeleteResponseOneof: &oppb.RegistrationDeleteResponse_Success{
				Success: &oppb.RegistrationDeleteSuccessResponse{},
			},
		}), nil
	}
}
