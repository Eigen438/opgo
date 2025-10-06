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

package rest

import (
	"context"
	"fmt"
	"slices"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

func (rest *Rest) ClientCreate(ctx context.Context,
	req *connect.Request[oppb.ClientCreateRequest]) (*connect.Response[oppb.ClientCreateResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		// Check
		for _, v := range req.Msg.Meta.ResponseTypes {
			if !slices.Contains(iss.Meta.ResponseTypesSupported, v) {
				return nil, fmt.Errorf("response_type:%s not supported", v)
			}
		}
		for _, v := range req.Msg.Meta.GrantTypes {
			if !slices.Contains(iss.Meta.GrantTypesSupported, v) {
				return nil, fmt.Errorf("grant_types:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.IdTokenSignedResponseAlg; len(v) > 0 {
			if !slices.Contains(iss.Meta.IdTokenSigningAlgValuesSupported, v) {
				return nil, fmt.Errorf("id_token_signed_response_alg:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.UserinfoSignedResponseAlg; len(v) > 0 {
			if !slices.Contains(iss.Meta.UserinfoSigningAlgValuesSupported, v) {
				return nil, fmt.Errorf("userinfo_signed_response_alg:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.RequestObjectSigningAlg; len(v) > 0 {
			if !slices.Contains(iss.Meta.RequestObjectSigningAlgValuesSupported, v) {
				return nil, fmt.Errorf("request_object_signed_response_alg:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.TokenEndpointAuthMethod; len(v) > 0 {
			if !slices.Contains(iss.Meta.TokenEndpointAuthMethodsSupported, v) {
				return nil, fmt.Errorf("token_endpoint_auth_method:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.TokenEndpointAuthSigningAlg; len(v) > 0 {
			if !slices.Contains(iss.Meta.TokenEndpointAuthSigningAlgValuesSupported, v) {
				return nil, fmt.Errorf("token_endpoint_auth_signing_alg:%s not supported", v)
			}
		}
		if v := req.Msg.Meta.AuthorizationSignedResponseAlg; len(v) > 0 {
			if !slices.Contains(iss.Meta.AuthorizationSigningAlgValuesSupported, v) {
				return nil, fmt.Errorf("authorization_signed_response_alg:%s not supported", v)
			}
		}

		client := &model.Client{
			Identity:   req.Msg.Identity,
			Issuer:     iss.Key,
			Meta:       req.Msg.Meta,
			Attribute:  req.Msg.Attribute,
			Extensions: req.Msg.Extensions,
		}

		if rest.isSingleTenant {
			if err := dataprovider.Set(ctx, client); err != nil {
				return nil, err
			}
		} else {
			if err := dataprovider.Create(ctx, client); err != nil {
				return nil, err
			}
		}

		return connect.NewResponse(&oppb.ClientCreateResponse{
			Identity:   req.Msg.Identity,
			Meta:       req.Msg.Meta,
			Attribute:  req.Msg.Attribute,
			Extensions: req.Msg.Extensions,
		}), nil
	}
}
