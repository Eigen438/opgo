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

package auth

import (
	"context"
	"crypto/subtle"
	"fmt"
	"log"
	"net/http"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func GetIssuer[T any](ctx context.Context, req *connect.Request[T]) (*model.Issuer, error) {
	r := &http.Request{
		Header: req.Header(),
	}
	username, password, ok := r.BasicAuth()
	if !ok || username == "" {
		return nil, connect.NewError(connect.CodeUnauthenticated, fmt.Errorf("missing provider authorization"))
	}

	iss := &model.Issuer{
		Key: &oppb.CommonKey{
			Id: username,
		},
	}
	if err := dataprovider.Get(ctx, iss); err != nil {
		if status.Code(err) == codes.NotFound {
			return nil, connect.NewError(connect.CodeUnauthenticated, fmt.Errorf("provider not found"))
		} else {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("provider access error: "+err.Error()))
		}
	}
	if !equal(password, iss.Secret.Password) {
		return nil, connect.NewError(connect.CodeUnauthenticated, fmt.Errorf("invalid provider password"))
	}
	return iss, nil
}

// Deprecated: use CheckIssuer or GetIssuer instead
func CheckIssuer[T any](ctx context.Context, req *connect.Request[T]) *model.Issuer {
	r := &http.Request{
		Header: req.Header(),
	}
	username, password, ok := r.BasicAuth()
	if !ok || username == "" {
		return nil
	}

	iss := &model.Issuer{
		Key: &oppb.CommonKey{
			Id: username,
		},
	}
	if err := dataprovider.Get(ctx, iss); err != nil {
		log.Printf("authenticate dataprovider.Get error:%s", err.Error())
		if status.Code(err) == codes.NotFound {
			return nil
		} else {
			return nil
		}
	}
	if !equal(password, iss.Secret.Password) {
		return nil
	}
	return iss
}

func equal(left, right string) bool {
	return subtle.ConstantTimeCompare([]byte(left), []byte(right)) == 1
}
