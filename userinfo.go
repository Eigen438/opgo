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
	"io"
	"net/http"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (i *innerSdk) UserinfoEndpoint() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		req := connect.NewRequest(&oppb.UserinfoRequest{
			Authorization:        r.Header.Get(httphelper.HeaderAuthorization),
			ContentType:          r.Header.Get(httphelper.HeaderContentType),
			Method:               r.Method,
			TlsClientCertificate: r.Header.Get("X-Client-Cert-Hash"),
		})
		// Formデータ取得
		defer r.Body.Close()
		if r.Body != nil {
			if b, err := io.ReadAll(r.Body); err == nil {
				req.Msg.Form = string(b)
			}
		}
		auth.SetAuth(req, i)
		res, err := i.provider.Userinfo(r.Context(), req)
		if err != nil {
			if status.Code(err) == codes.Unauthenticated {
				w.WriteHeader(http.StatusUnauthorized)
			} else {
				w.WriteHeader(http.StatusServiceUnavailable)
			}
			w.Write([]byte(err.Error()))
			return
		}

		for key, val := range res.Msg.Headers {
			w.Header().Set(key, val)
		}
		w.WriteHeader(int(res.Msg.StatusCode))
		w.Write([]byte(res.Msg.Body))
	}
}
