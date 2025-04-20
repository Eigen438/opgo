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

package rest

import (
	"context"
	"log"
	"net/http"
	"time"

	"connectrpc.com/authn"
	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/keyutil"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/bufbuild/protovalidate-go"
)

func (rest *Rest) IssuerCreate(ctx context.Context,
	req *connect.Request[oppb.IssuerCreateRequest]) (*connect.Response[oppb.IssuerCreateResponse], error) {
	r := &http.Request{
		Header: req.Header(),
	}
	username, password, ok := r.BasicAuth()
	if !ok || username == "" {
		return nil, authn.Errorf("invalid authorization(IssuerCreate)")
	}
	if username != rest.username || password != rest.password {
		return nil, authn.Errorf("invalid authorization(IssuerCreate)")
	}

	// Complete default values
	if len(req.Msg.Meta.ResponseModesSupported) == 0 {
		req.Msg.Meta.ResponseModesSupported = []string{
			oauth.ResponseModeQuery,
			oauth.ResponseModeFragment,
		}
	}
	if len(req.Msg.Meta.GrantTypesSupported) == 0 {
		req.Msg.Meta.GrantTypesSupported = []string{
			oauth.GrantTypeAuthorizationCode,
			oauth.GrantTypeImplicit,
		}
	}
	if len(req.Msg.Meta.TokenEndpointAuthMethodsSupported) == 0 {
		req.Msg.Meta.TokenEndpointAuthMethodsSupported = []string{
			oauth.TokenEndpointAuthMethodClientSecretBasic,
		}
	}

	iss := &model.Issuer{
		Key: &oppb.CommonKey{
			Id: "default-issuer",
		},
		Meta: &oppb.IssuerMeta{},
		Secret: &oppb.IssuerSecret{
			Password: "default-password",
		},
		Attribute: &oppb.IssuerAttribute{},
		Resources: &oppb.IssuerResources{
			KeyMap: map[string]string{},
		},
	}
	if req.Msg.Meta != nil {
		iss.Meta = req.Msg.Meta
	}
	if req.Msg.Attribute != nil {
		iss.Attribute = req.Msg.Attribute
	}

	if err := protovalidate.Validate(iss.Meta); err != nil {
		log.Printf("IssuerCreate err:%v", err)
		return nil, err
	}

	// Generate signing keys for the Issuer to use
	keyTypes := map[string]bool{}
	for _, alg := range iss.Meta.IdTokenSigningAlgValuesSupported {
		if keyType, ok := keyutil.KeyType(alg); ok {
			keyTypes[keyType] = true
		}
	}
	for _, alg := range iss.Meta.AuthorizationSigningAlgValuesSupported {
		if keyType, ok := keyutil.KeyType(alg); ok {
			keyTypes[keyType] = true
		}
	}
	for _, alg := range iss.Meta.UserinfoSigningAlgValuesSupported {
		if keyType, ok := keyutil.KeyType(alg); ok {
			keyTypes[keyType] = true
		}
	}
	for keyType, ok := range keyTypes {
		if ok {
			key, err := keyutil.GeneratePrivateKey(iss.Key, keyType, time.Now())
			if err != nil {
				return nil, err
			}
			if err := dataprovider.Create(ctx, key); err != nil {
				return nil, err
			}
			iss.Resources.KeyMap[keyType] = key.Key.Id
		}
	}

	if err := dataprovider.Create(ctx, iss); err != nil {
		log.Printf("IssuerCreate err:%v", err)
		return nil, err
	}

	return connect.NewResponse(&oppb.IssuerCreateResponse{
		Key:       iss.Key,
		Meta:      iss.Meta,
		Secret:    iss.Secret,
		Attribute: iss.Attribute,
	}), nil
}

func (rest *Rest) IssuerGet(ctx context.Context,
	req *connect.Request[oppb.IssuerGetRequest]) (*connect.Response[oppb.IssuerGetResponse], error) {
	if iss := authn.GetInfo(ctx).(*model.Issuer); iss == nil {
		return nil, authn.Errorf("invalid authorization(IssuerGet)")
	} else {
		return connect.NewResponse(&oppb.IssuerGetResponse{
			Meta:      iss.Meta,
			Attribute: iss.Attribute,
		}), nil
	}
}

func (rest *Rest) IssuerUpdate(ctx context.Context,
	req *connect.Request[oppb.IssuerUpdateRequest]) (*connect.Response[oppb.IssuerUpdateResponse], error) {
	if iss := authn.GetInfo(ctx).(*model.Issuer); iss == nil {
		return nil, authn.Errorf("invalid authorization(IssuerUpdate)")
	} else {
		if err := protovalidate.Validate(req.Msg); err != nil {
			log.Printf("IssuerUpdate err:%v", err)
			return nil, err
		}

		// update
		iss.Meta = req.Msg.Meta
		iss.Attribute = req.Msg.Attribute

		if err := dataprovider.Set(ctx, iss); err != nil {
			return nil, err
		} else {
			return connect.NewResponse(&oppb.IssuerUpdateResponse{
				Meta:      iss.Meta,
				Attribute: iss.Attribute,
			}), nil
		}
	}
}
