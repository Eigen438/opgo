# opgo
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**opgo** is an SDK for building OpenID Connect Providers (OPs) in Go.
Users can create their own OPs by implementing configurations that determine the provider's behavior, user interfaces, user information for authentication, and storage for session states.
Alternatively, opgo can be run as an OP simulator using the sample code for developing Relying Parties (RPs).

## Features
By utilizing opgo, users can flexibly implement the following elements to build their own OpenID Connect Provider:

* **Configuration**: You can implement various settings to determine the provider's behavior.
* **UI**: You can implement user interfaces such as authentication and consent screens.
* **User Information**: You can implement the management of user information for authentication.
* **Storage**: You can implement the persistence of session states and other data.

Additionally, opgo can also function as an OP simulator using the provided sample code for developing Relying Parties (RPs).

## Getting Started

### Prerequisites

* Go 1.23.4 or higher

### Installation

```bash
go get [github.com/Eigen438/opgo](https://github.com/Eigen438/opgo)
```

## Basic Usage
```GO
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
			// RedirectUris: []string{"[https://exsample.com/cb](https://exsample.com/cb)"},
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
	mux.HandleFunc("/login", testui.LoginHandler(s))
	mux.HandleFunc("/cancel", testui.CancelHandler(s))

	log.Printf("start server")

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
```

### The code above performs the following actions:
- **Configuration**: Defines the OP metadata in the `oppb.IssuerMeta` struct.
- **Storage**: Initializes an in-memory storage using `inmemstore.New` and sets it to `dataprovider`.
- **SDK Initialization**: Creates an SDK instance using the `opgo.NewHostedSdk` function.
- **Client Registration**: Registers an initial client using the `s.ClientCreate` function.
- **Routing**: Obtains an `http.ServeMux` to handle requests to the OP's endpoints using `s.ServeMux`, and adds custom handlers (`/login`, `/cancel`).
- **Server Startup**: Starts an HTTP server using the `net/http` package to handle incoming requests.

### Customization
When using opgo, users can build their own unique OpenID Connect Provider by implementing and configuring the following aspects:

- **Storage**: Besides `inmemstore`, users can implement persistent storage using databases or other methods.
- **UI**: Instead of the `testui` package, users can implement their own authentication and consent screens.
- **Callbacks**: Users can implement callback functions to perform custom logic before and after authentication processes.
- **Configuration**: By modifying structs like `oppb.IssuerMeta` and `opgo.ClientParam`, users can precisely control the behavior of their OP.

# Contributing
Feel free to submit bug reports and feature requests through GitHub Issues. Pull requests are also welcome.

# Acknowledgment
The development of opgo was inspired by [Authlete](https://www.authlete.com/). We extend our sincere gratitude to them.

# License
MIT License

Copyright (c) 2025 Eigen
