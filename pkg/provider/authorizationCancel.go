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

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

func (p *Provider) AuthorizationCancel(ctx context.Context,
	req *connect.Request[oppb.AuthorizationCancelRequest]) (*connect.Response[oppb.AuthorizationCancelResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		// リクエスト情報を取り出す
		r := &model.Request{
			Details: model.RequestDetails{
				Client: &model.Client{
					Issuer: iss.Key,
				},
				Key: &oppb.CommonKey{
					Id: req.Msg.RequestId,
				},
			},
		}
		if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
			return dataprovider.Get(ctx, r)
		}); err != nil {
			return nil, err
		}

		// リクエスト情報を削除する
		if err := dataprovider.Delete(ctx, r); err != nil {
			return nil, err
		}

		res, err := makeFailResponse(ctx, iss, r.Details.Client, r.Details.AuthParams, failAuthorizationAccessDenied())
		if err != nil {
			return nil, err
		}
		if res.html != nil {
			return connect.NewResponse(&oppb.AuthorizationCancelResponse{
				AuthorizationCancelResponseOneof: &oppb.AuthorizationCancelResponse_Html{
					Html: res.html,
				},
			}), nil
		} else {
			return connect.NewResponse(&oppb.AuthorizationCancelResponse{
				AuthorizationCancelResponseOneof: &oppb.AuthorizationCancelResponse_Redirect{
					Redirect: res.redirect,
				},
			}), nil
		}
	}
}
