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

package opgo

import (
	"context"
	"fmt"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

type ClientParam struct {
	ClientId     string
	ClientSecret string
	Meta         *oppb.ClientMeta
	Attribute    *oppb.ClientAttribute
	Extensions   *oppb.ClientExtensions
}

func (i *innerSdk) ClientCreate(ctx context.Context, param ClientParam) error {
	{
		if param.ClientId == "" {
			return fmt.Errorf("param.ClientId is required")
		}
		if param.Meta == nil {
			return fmt.Errorf("param.Meta is required")
		}
		if param.Attribute == nil {
			param.Attribute = &oppb.ClientAttribute{
				AccessTokenLifetimeSeconds:       3600,
				IdTokenLifetimeSeconds:           3600,
				RefreshTokenLifetimeSeconds:      7200,
				AuthorizationCodeLifetimeSeconds: 60,
				RequestLifetimeSeconds:           86400,
				SessionGroupId:                   param.ClientId,
			}
		}
		if param.Extensions == nil {
			param.Extensions = &oppb.ClientExtensions{
				Profile:               oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_UNSPECIFIED,
				TlsClientCertificates: []string{},
			}
		}

		req := connect.NewRequest(&oppb.ClientCreateRequest{
			Identity: &oppb.ClientIdentity{
				ClientId:     param.ClientId,
				ClientSecret: param.ClientSecret,
			},
			Meta:       param.Meta,
			Attribute:  param.Attribute,
			Extensions: param.Extensions,
		})
		auth.SetAuth(req, i)
		_, err := i.rest.ClientCreate(ctx, req)
		if err != nil {
			return err
		}
	}

	{
		req := connect.NewRequest(&oppb.SessionGroupCreateRequest{
			Key: &oppb.CommonKey{
				Id: param.ClientId,
			},
			Attribute: &oppb.SessionGroupAttribute{
				AuthorizeSessionLifetimeSeconds: 60 * 60,
			},
		})
		auth.SetAuth(req, i)
		_, err := i.rest.SessionGroupCreate(ctx, req)
		if err != nil {
			return err
		}
	}
	return nil
}
