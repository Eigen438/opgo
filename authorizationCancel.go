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
	"net/http"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
)

func (i *innerSdk) AuthorizationCancel(w http.ResponseWriter, r *http.Request, requestId string) {
	if err := func() error {
		ctx := r.Context()
		req := connect.NewRequest(&oppb.AuthorizationCancelRequest{
			RequestId: requestId,
		})
		auth.SetAuth(req, i)
		res, err := i.provider.AuthorizationCancel(ctx, req)
		if err != nil {
			return err
		}
		if out := res.Msg.GetRedirect(); out != nil {
			http.Redirect(w, r, out.Url, http.StatusFound)
		} else if out := res.Msg.GetHtml(); out != nil {
			for k, v := range httphelper.DefaultHtmlHeader() {
				w.Header().Set(k, v)
			}
			_, _ = w.Write([]byte(out.Content))
		}
		return nil
	}(); err != nil {
		writeError(w, err)
		return
	}
}
