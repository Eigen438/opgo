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
	"log"
	"net/http"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo"
	"github.com/Eigen438/opgo/examples/GoogleCloudHostedService/authenticationui"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/cloudfirestore"
	"github.com/rs/cors"
)

func main() {
	ctx := context.Background()
	projectID := os.Getenv("PROJECT_ID")
	if projectID == "" {
		log.Fatal("PROJECT_ID environment variable is not set")
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	issuer := os.Getenv("ISSUER")
	if issuer == "" {
		// Consider using a more descriptive default or requiring this in production
		issuer = "http://localhost:" + port
	}

	// use firestore
	firestoreService, err := cloudfirestore.NewWithDatabase(ctx, projectID, firestore.DefaultDatabaseID)
	if err != nil {
		log.Fatal(err)
	}
	// use storage on memory
	dataprovider.Initialize(firestoreService)

	meta := &oppb.IssuerMeta{
		Issuer:                                     issuer,
		AuthorizationEndpoint:                      issuer + opgo.DEFAULT_AUTHORIZATION_PATH,
		TokenEndpoint:                              issuer + opgo.DEFAULT_TOKEN_PATH,
		UserinfoEndpoint:                           issuer + opgo.DEFAULT_USERINFO_PATH,
		JwksUri:                                    issuer + opgo.DEFAULT_JWKS_PATH,
		RegistrationEndpoint:                       issuer + opgo.DEFAULT_REGISTRATION_PATH,
		ScopesSupported:                            []string{"openid", "profile", "email", "address", "phone", "test", "offline_access"},
		ResponseTypesSupported:                     []string{"code", "id_token", "id_token token"},
		GrantTypesSupported:                        []string{"authorization_code", "refresh_token", "implicit"},
		AcrValuesSupported:                         []string{"urn:mace:incommon:iap:silver"},
		SubjectTypesSupported:                      []string{"public", "pairwise"},
		IdTokenSigningAlgValuesSupported:           []string{"none", "RS256"},
		UserinfoSigningAlgValuesSupported:          []string{"none", "RS256"},
		TokenEndpointAuthSigningAlgValuesSupported: []string{"none", "RS256"},
		RequestObjectSigningAlgValuesSupported:     []string{"none", "RS256"},
		ClaimsSupported:                            []string{"iss"},
		TokenEndpointAuthMethodsSupported:          []string{"client_secret_basic", "client_secret_post", "client_secret_jwt", "private_key_jwt"},
		RequestParameterSupported:                  true,
		RequestUriParameterSupported:               true,
	}
	s, err := opgo.NewHostedSdk(ctx, meta, authenticationui.Callbacks{}, firestoreService)
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
	// Add provider-specific handlers
	mux.HandleFunc("/api/login", authenticationui.LoginHandler(s))
	authenticationui.SetupMux(mux)
	log.Printf("start server(port:%s)", port)

	server := http.Server{
		Addr: ":" + port,
		Handler: cors.New(cors.Options{
			AllowedOrigins:   []string{issuer}, // Specify allowed origins for production
			AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
			AllowCredentials: true, // Consider the security implications of allowing credentials
		}).Handler(mux),
	}
	log.Fatal(server.ListenAndServe())
}
