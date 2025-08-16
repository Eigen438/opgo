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
	"errors"
	"log"
	"testing"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/inmemstore"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/stretchr/testify/assert"
)

func TestMain(m *testing.M) {
	// Set up the in-memory store for testing
	memstore := inmemstore.New(1 * time.Minute)
	dataprovider.Initialize(memstore)

	dataprovider.Set(context.Background(), &model.Issuer{
		Key: &oppb.CommonKey{
			Id: "test-issuer",
		},
		Secret: &oppb.IssuerSecret{
			Password: "test-password",
		},
	})
	_ = m.Run()
}

func TestGetIssuer(t *testing.T) {

	type testCase struct {
		name   string
		req    func() *connect.Request[oppb.DiscoveryRequest]
		assert func(assert *assert.Assertions, issuer *model.Issuer, err error)
	}

	tests := []testCase{
		{
			name: "Valid issuer",
			req: func() *connect.Request[oppb.DiscoveryRequest] {
				req := connect.NewRequest(&oppb.DiscoveryRequest{})
				req.Header().Set("Authorization", "Basic "+basicAuth(NewAuthInfo("test-issuer", "test-password")))
				return req
			},
			assert: func(assert *assert.Assertions, issuer *model.Issuer, err error) {
				assert.NotNil(issuer)
				assert.Nil(err)
			},
		},
		{
			name: "Invalid issuer",
			req: func() *connect.Request[oppb.DiscoveryRequest] {
				req := connect.NewRequest(&oppb.DiscoveryRequest{})
				req.Header().Set("Authorization", "Basic "+basicAuth(NewAuthInfo("test-issuer", "test-wrong-password")))
				return req
			},
			assert: func(assert *assert.Assertions, issuer *model.Issuer, err error) {
				assert.Nil(issuer)
				assert.NotNil(err)
				assert.Equal(connect.CodeUnauthenticated, connect.CodeOf(err))
				log.Print(errors.Unwrap(err))
			},
		},
		{
			name: "Wrong issuer",
			req: func() *connect.Request[oppb.DiscoveryRequest] {
				req := connect.NewRequest(&oppb.DiscoveryRequest{})
				req.Header().Set("Authorization", "Basic "+basicAuth(NewAuthInfo("test-wrong-issuer", "test-password")))
				return req
			},
			assert: func(assert *assert.Assertions, issuer *model.Issuer, err error) {
				assert.Nil(issuer)
				assert.NotNil(err)
				assert.Equal(connect.CodeUnauthenticated, connect.CodeOf(err))
				log.Print(errors.Unwrap(err))
			},
		},
		{
			name: "No authorization header",
			req: func() *connect.Request[oppb.DiscoveryRequest] {
				req := connect.NewRequest(&oppb.DiscoveryRequest{})
				return req
			},
			assert: func(assert *assert.Assertions, issuer *model.Issuer, err error) {
				assert.Nil(issuer)
				assert.NotNil(err)
				assert.Equal(connect.CodeUnauthenticated, connect.CodeOf(err))
				log.Print(errors.Unwrap(err))
			},
		},
	}
	assert := assert.New(t)
	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			req := tc.req()
			issuer, authError := GetIssuer(context.Background(), req)
			tc.assert(assert, issuer, authError)
		})
	}
}
