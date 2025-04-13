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

package main

import (
	"context"
	_ "embed"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/inmemstore"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/Eigen438/opgo/pkg/testui"
	"github.com/rs/cors"
)

func main() {
	ctx := context.Background()
	port := os.Getenv("PORT")
	issuer := os.Getenv("ISSUER")

	// use storage on memory
	memstore := inmemstore.New(1 * time.Minute)
	dataprovider.Initialize(memstore)
	dataprovider.AddWriteOpInterceptor(&model.TokenIdentifier{}, tokenWriteInterceptor)

	meta := &oppb.IssuerMeta{
		Issuer:                            issuer,
		AuthorizationEndpoint:             issuer + opgo.DEFAULT_AUTHORIZATION_PATH,
		TokenEndpoint:                     issuer + opgo.DEFAULT_TOKEN_PATH,
		UserinfoEndpoint:                  issuer + opgo.DEFAULT_USERINFO_PATH,
		JwksUri:                           issuer + opgo.DEFAULT_JWKS_PATH,
		RegistrationEndpoint:              issuer + opgo.DEFAULT_REGISTRATION_PATH,
		ScopesSupported:                   []string{"openid", "profile", "email", "address", "phone", "test", "offline_access"},
		ResponseTypesSupported:            []string{"code", "id_token", "id_token token"},
		GrantTypesSupported:               []string{"authorization_code", "refresh_token", "implicit"},
		AcrValuesSupported:                []string{"urn:mace:incommon:iap:silver"},
		SubjectTypesSupported:             []string{"public"},
		IdTokenSigningAlgValuesSupported:  []string{"none", "RS256"},
		ClaimsSupported:                   []string{"iss"},
		TokenEndpointAuthMethodsSupported: []string{"client_secret_basic", "client_secret_post", "client_secret_jwt"},
		RequestParameterSupported:         true,
		RequestUriParameterSupported:      true,
	}
	s, err := opgo.NewHostedSdk(ctx, meta, testui.Callbacks{}, &callbacks{})
	if err != nil {
		log.Fatal(err)
	}

	if err := s.ClientCreate(ctx, opgo.ClientParam{
		ClientId:     "default",
		ClientSecret: "secret",
		Meta: &oppb.ClientMeta{
			// If you do not set the RedirectUris parameter, the check will be skipped.
			// RedirectUris: []string{"https://exsample.com/cb"},
			GrantTypes:               []string{"authorization_code"},
			TokenEndpointAuthMethod:  "client_secret_basic",
			ResponseTypes:            []string{"code"},
			ClientName:               "test client",
			IdTokenSignedResponseAlg: "RS256",
		},
	}); err != nil {
		log.Fatal(err)
	}

	mux := s.ServeMux(&opgo.Paths{
		UseDiscovery:      true,
		AuthorizationPath: opgo.DEFAULT_AUTHORIZATION_PATH,
		TokenPath:         opgo.DEFAULT_TOKEN_PATH,
		UserinfoPath:      opgo.DEFAULT_USERINFO_PATH,
		JwksPath:          opgo.DEFAULT_JWKS_PATH,
		RegistrationPath:  opgo.DEFAULT_REGISTRATION_PATH,
	})
	// プロパイダ固有ハンドラを追加する
	mux.HandleFunc("/login", testui.LoginHandler(s))
	mux.HandleFunc("/cancel", testui.CancelHandler(s))

	server := http.Server{
		Addr: ":" + port,
		Handler: cors.New(cors.Options{
			AllowedHeaders: []string{"*"},
		}).Handler(mux),
	}
	log.Fatal(server.ListenAndServe())
}

func tokenWriteInterceptor(ctx context.Context, data any) {
	if p, ok := data.(*model.TokenIdentifier); ok {
		// request_id base link
		requestLink := &TokenIdentifierLink{
			IssuerId: p.Details.Authorized.Request.Client.Issuer.Id,
			Key:      p.Details.Authorized.Request.Key.Id,
			Kind:     "request",
			List:     []string{},
		}
		_ = dataprovider.Get(ctx, requestLink)
		requestLink.List = append(requestLink.List, p.Details.Identifier)
		requestLink.ExpireAt = time.Now().Add(24 * time.Hour)
		_ = dataprovider.Set(ctx, requestLink)

		// session_id base link
		sessionLink := &TokenIdentifierLink{
			IssuerId: p.Details.Authorized.Request.Client.Issuer.Id,
			Key:      p.Details.Authorized.SessionId,
			Kind:     "session",
			List:     []string{},
		}
		_ = dataprovider.Get(ctx, sessionLink)
		sessionLink.List = append(sessionLink.List, p.Details.Identifier)
		sessionLink.ExpireAt = time.Now().Add(24 * time.Hour)
		_ = dataprovider.Set(ctx, sessionLink)
	}
}

type callbacks struct {
}

func (callbacks) DeleteTokensWithRequetId(ctx context.Context, issuerId, requestId string) error {
	// request_id base link
	link := &TokenIdentifierLink{
		IssuerId: issuerId,
		Key:      requestId,
		Kind:     "request",
		List:     []string{},
	}
	if err := dataprovider.Get(ctx, link); err == nil {
		link.DeleteTokens(ctx)
	}
	return nil
}

func (callbacks) DeleteTokensWithSessionId(ctx context.Context, issuerId, sessionId string) error {
	// request_id base link
	link := &TokenIdentifierLink{
		IssuerId: issuerId,
		Key:      sessionId,
		Kind:     "session",
		List:     []string{},
	}
	if err := dataprovider.Get(ctx, link); err == nil {
		link.DeleteTokens(ctx)
	}
	return nil
}

type TokenIdentifierLink struct {
	IssuerId string
	Key      string
	Kind     string
	List     []string
	ExpireAt time.Time
}

func (t *TokenIdentifierLink) Path(_ context.Context) string {
	return fmt.Sprintf("opgo/v1/issuers/%s/tokensList/%s/kind/%s", t.IssuerId, t.Key, t.Kind)
}

func (t *TokenIdentifierLink) ExpireAtUnix(_ context.Context) int64 {
	return t.ExpireAt.Unix()
}

func (t *TokenIdentifierLink) DeleteTokens(ctx context.Context) {
	for _, tokenIdentifierId := range t.List {
		tokenIdentifier := &model.TokenIdentifier{
			Details: model.TokenIdentifierDetails{
				Identifier: tokenIdentifierId,
				Authorized: model.Authorized{
					Request: model.RequestDetails{
						Client: &model.Client{
							Issuer: &oppb.CommonKey{
								Id: t.IssuerId,
							},
						},
					},
				},
			},
		}
		_ = dataprovider.Delete(ctx, tokenIdentifier)
	}
}
