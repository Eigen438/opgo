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
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
)

func (i *innerSdk) TokenEndpoint(w http.ResponseWriter, r *http.Request) {
	if err := func() error {
		ctx := r.Context()
		req := connect.NewRequest(&oppb.TokenRequest{
			ContentType:          r.Header.Get(httphelper.HeaderContentType),
			Method:               r.Method,
			TlsClientCertificate: r.Header.Get("X-Client-Cert-Hash"),
		})
		// Get form
		defer r.Body.Close()
		if r.Body != nil {
			if b, err := io.ReadAll(r.Body); err == nil {
				req.Msg.Form = string(b)
			}
		}
		// Set Basic auth
		if username, password, ok := r.BasicAuth(); ok {
			req.Msg.BasicAuth = &oppb.BasicAuth{
				Username: username,
				Password: password,
			}
		}
		auth.SetAuth(req, i)
		res, err := i.provider.Token(ctx, req)
		if err != nil {
			return err
		}
		if fail := res.Msg.GetFail(); fail != nil {
			body, err := json.MarshalIndent(fail.Error, "", "  ")
			if err != nil {
				return err
			}

			for key, val := range httphelper.DefaultJsonHeader() {
				w.Header().Add(key, val)
			}
			w.WriteHeader(int(fail.StatusCode))
			w.Write(body)
		} else if success := res.Msg.GetSuccess(); success != nil {
			body, err := json.MarshalIndent(success, "", "  ")
			if err != nil {
				return err
			}

			for key, val := range httphelper.DefaultJsonHeader() {
				w.Header().Add(key, val)
			}
			w.WriteHeader(http.StatusOK)
			w.Write(body)
		}
		return nil
	}(); err != nil {
		writeError(w, err)
		return
	}
}
