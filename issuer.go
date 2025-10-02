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
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/rest"
)

type issuerCreateParam struct {
	Meta      *oppb.IssuerMeta
	Attribute *oppb.IssuerAttribute
}

func issuerCreate(ctx context.Context, authInfo auth.AuthInfo, param issuerCreateParam) (*oppb.IssuerCreateResponse, error) {
	if param.Meta == nil {
		return nil, fmt.Errorf("param.Meta is required")
	}
	if param.Attribute == nil {
		return nil, fmt.Errorf("param.Attribute is required")
	}
	req := connect.NewRequest(&oppb.IssuerCreateRequest{
		Meta:      param.Meta,
		Attribute: param.Attribute,
	})
	auth.SetAuth(req, authInfo)
	server := rest.NewRest(authInfo.Username(), authInfo.Password(), true)
	res, err := server.IssuerCreate(ctx, req)
	if err != nil {
		return nil, err
	}
	return res.Msg, nil
}
