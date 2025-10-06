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
	"encoding/json"
	"io"
	"net/http"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
)

func (i *innerSdk) AuthorizationEndpoint(w http.ResponseWriter, r *http.Request) {
	if err := func() error {
		ctx := r.Context()
		req := connect.NewRequest(&oppb.AuthorizationRequest{
			Sessions:    map[string]string{},
			ContentType: r.Header.Get(httphelper.HeaderContentType),
			Method:      r.Method,
			Url:         r.URL.String(),
		})
		// Cookie取得
		for _, cookie := range r.Cookies() {
			req.Msg.Sessions[cookie.Name] = cookie.Value
		}
		// Formデータ取得
		defer r.Body.Close()
		if r.Body != nil {
			if b, err := io.ReadAll(r.Body); err == nil {
				req.Msg.Form = string(b)
			}
		}
		auth.SetAuth(req, i)
		res, err := i.provider.Authorization(ctx, req)
		if err != nil {
			return err
		}

		if fail := res.Msg.GetFail(); fail != nil {
			w.WriteHeader(http.StatusBadRequest)
			b, _ := json.MarshalIndent(fail.Error, "", "  ")
			w.Write(b)
		} else if out := res.Msg.GetIssue(); out != nil {
			err := i.authorizationIssue(w, r, out.RequestId, out.SessionId, out.Subject)
			if err != nil {
				return err
			}
		} else if out := res.Msg.GetRedirect(); out != nil {
			http.Redirect(w, r, out.Url, http.StatusFound)
		} else if out := res.Msg.GetHtml(); out != nil {
			for k, v := range httphelper.DefaultHtmlHeader() {
				w.Header().Set(k, v)
			}
			w.Write([]byte(out.Content))
		} else if out := res.Msg.GetLogin(); out != nil {
			i.config.Callbacks.WriteLoginHtmlCallback(&RequestInfo{
				RequestId:  out.RequestId,
				Client:     out.Client,
				AuthParams: out.AuthParams,
			}).ServeHTTP(w, r)
		}
		return nil
	}(); err != nil {
		writeError(w, err)
		return
	}
}
