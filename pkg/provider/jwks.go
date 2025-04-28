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
	"fmt"
	"log"

	"connectrpc.com/authn"
	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/internal/convert"
	"github.com/Eigen438/opgo/internal/keyutil"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/MicahParks/jwkset"
)

func (p *Provider) Jwks(ctx context.Context,
	req *connect.Request[oppb.JwksRequest]) (*connect.Response[oppb.JwksResponse], error) {
	if iss := auth.CheckIssuer(ctx, req); iss == nil {
		return nil, authn.Errorf("invalid authorization(Jwks)")
	} else {
		jwkSet := jwkset.NewMemoryStorage()
		for keyType, kr := range iss.Resources.KeyMap {
			addToJwkSet := func(keyId string) {
				key, err := keyutil.GetPrivateKey(ctx, iss, keyType, keyId)
				if err != nil {
					log.Printf("[BACKEND_ERROR] GetKeyInfo:%v", err)
					return
				}
				options := jwkset.JWKOptions{
					Marshal: jwkset.JWKMarshalOptions{
						Private: false,
					},
					Metadata: jwkset.JWKMetadataOptions{
						KID: keyId,
					},
				}
				jwk, err := jwkset.NewJWKFromKey(key, options)
				if err != nil {
					log.Printf("[BACKEND_ERROR] NewJWKFromKey:%v", err)
					return
				}
				if err := jwkSet.KeyWrite(ctx, jwk); err != nil {
					log.Printf("[BACKEND_ERROR] KeyWrite:%v", err)
					return
				}
			}

			addToJwkSet(kr.CurrentKeyId)
			for _, keyId := range kr.ReservedKeyIds {
				addToJwkSet(keyId)
			}
		}
		m, err := jwkSet.Marshal(ctx)
		if err != nil {
			return nil, fmt.Errorf("jwkSet marshal error")
		}
		return connect.NewResponse(&oppb.JwksResponse{
			Keys: convert.JwksFromJWKMarshals(m.Keys),
		}), nil
	}
}
