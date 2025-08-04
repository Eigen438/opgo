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
	"net/http"
	"strings"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
	"google.golang.org/protobuf/encoding/protojson"
)

func (i *innerSdk) RegistrationEndpoint() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		switch r.Method {
		case http.MethodPost:
			reqBody := &oppb.RegistrationCreateRequest{}
			defer r.Body.Close()
			if r.Body != nil {
				if err := json.NewDecoder(r.Body).Decode(reqBody); err != nil {
					w.WriteHeader(http.StatusInternalServerError)
					w.Write([]byte(err.Error()))
				}
			} else {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte("body not found"))
			}

			req := connect.NewRequest(reqBody)
			auth.SetAuth(req, i)
			res, err := i.provider.RegistrationCreate(ctx, req)

			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				return
			}
			if success := res.Msg.GetSuccess(); success != nil {
				for key, val := range httphelper.DefaultJsonHeader() {
					w.Header().Set(key, val)
				}
				w.WriteHeader(http.StatusCreated)
				m := protojson.MarshalOptions{
					EmitUnpopulated: true,
					Indent:          "  ",
				}
				j, _ := m.Marshal(success)
				w.Write(j)
			} else if fail := res.Msg.GetFail(); fail != nil {
				for key, val := range httphelper.DefaultJsonHeader() {
					w.Header().Set(key, val)
				}
				w.WriteHeader(int(fail.StatusCode))
				j, _ := json.MarshalIndent(fail.Error, "", "  ")
				w.Write(j)
			}
			return

		case http.MethodDelete:
			h := r.Header.Get(httphelper.HeaderAuthorization)
			h, _ = strings.CutPrefix(h, "Bearer ")
			reqBody := &oppb.RegistrationDeleteRequest{
				ClientId:                r.URL.Query().Get("client_id"),
				RegistrationAccessToken: h,
			}

			req := connect.NewRequest(reqBody)
			auth.SetAuth(req, i)
			res, err := i.provider.RegistrationDelete(ctx, req)

			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				return
			}

			if success := res.Msg.GetSuccess(); success != nil {
				w.WriteHeader(http.StatusNoContent)
			} else if fail := res.Msg.GetFail(); fail != nil {
				for key, val := range httphelper.DefaultJsonHeader() {
					w.Header().Set(key, val)
				}
				w.WriteHeader(int(fail.StatusCode))
				j, _ := json.MarshalIndent(fail.Error, "", "  ")
				w.Write(j)
			}
			return

		case http.MethodGet:
			h := r.Header.Get(httphelper.HeaderAuthorization)
			h, _ = strings.CutPrefix(h, "Bearer ")
			reqBody := &oppb.RegistrationGetRequest{
				ClientId:                r.URL.Query().Get("client_id"),
				RegistrationAccessToken: h,
			}

			req := connect.NewRequest(reqBody)
			auth.SetAuth(req, i)
			res, err := i.provider.RegistrationGet(ctx, req)

			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				return
			}

			if success := res.Msg.GetSuccess(); success != nil {
				for key, val := range httphelper.DefaultJsonHeader() {
					w.Header().Set(key, val)
				}
				w.WriteHeader(http.StatusOK)
				j, _ := json.MarshalIndent(success, "", "  ")
				w.Write(j)
			} else if fail := res.Msg.GetFail(); fail != nil {
				for key, val := range httphelper.DefaultJsonHeader() {
					w.Header().Set(key, val)
				}
				w.WriteHeader(int(fail.StatusCode))
				j, _ := json.MarshalIndent(fail.Error, "", "  ")
				w.Write(j)
			}
			return
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
	}
}
