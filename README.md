# opgo
[![license](https://badgen.net/github/license/eigen438/opgo/)](https://github.com/eigen438/opgo/blob/master/LICENSE)
[![release](https://badgen.net/github/release/eigen438/opgo/stable)](https://github.com/Eigen438/opgo/releases)
[![Go Report Card](https://goreportcard.com/badge/github.com/eigen438/opgo)](https://goreportcard.com/report/github.com/eigen438/opgo)

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

* Go 1.23.10 or higher

### Installation

```bash
go get https://github.com/Eigen438/opgo
```

### Basic Usage
```GO
func main() {
	ctx := context.Background()
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	issuer := os.Getenv("ISSUER")
	if issuer == "" {
		issuer = "http://localhost:" + port
	}

	// use storage on memory
	memstore := inmemstore.New(1 * time.Minute)
	dataprovider.Initialize(memstore)
	dataprovider.AddWriteOpInterceptor(&model.TokenIdentifier{}, inmemstore.TokenWriteInterceptor)

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
	s, err := opgo.NewHostedSdk(ctx, meta, testui.Callbacks{}, memstore)
	if err != nil {
		log.Fatal(err)
	}

	if err := s.ClientCreate(ctx, opgo.ClientParam{
		ClientId:     "default",
		ClientSecret: "secret",
		Meta: &oppb.ClientMeta{
			// If you do not set the RedirectUris parameter, the check will be skipped.
			// RedirectUris: []string{"https://example.com/cb"},
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

	log.Printf("start server(port:%s)", port)

	server := http.Server{
		Addr: ":" + port,
		Handler: cors.New(cors.Options{
			AllowedHeaders: []string{"*"},
		}).Handler(mux),
	}
	log.Fatal(server.ListenAndServe())
}
```

### The code above performs the following actions:
- **Configuration**: Defines the OP metadata in the `oppb.IssuerMeta` struct.
- **Storage**: Initializes an in-memory storage using `inmemstore.New` and sets it to `dataprovider`.
- **SDK Initialization**: Creates an SDK instance using the `opgo.NewHostedSdk` function.
- **Client Registration**: Registers an initial client using the `s.ClientCreate` function.
- **Routing**: Obtains an `http.ServeMux` to handle requests to the OP's endpoints using `s.ServeMux`, and adds custom handlers (`/login`, `/cancel`).
- **Server Startup**: Starts an HTTP server using the `net/http` package to handle incoming requests. The server is configured with CORS settings using the `cors` package to allow all headers.

# Customization
When using opgo, users can build their own unique OpenID Connect Provider by implementing and configuring the following aspects:

- **Storage**: Besides `inmemstore`, users can implement persistent storage using databases or other methods.
- **UI**: Instead of the `testui` package, users can implement their own authentication and consent screens.
- **Callbacks**: Users can implement callback functions to perform custom logic before and after authentication processes.
- **Configuration**: By modifying structs like `oppb.IssuerMeta` and `opgo.ClientParam`, users can precisely control the behavior of their OP.

# Examples
For a practical example of how to use **opgo**, check out the [LocalHostedService example](examples/LocalHostedService). This example demonstrates how to set up a locally hosted OpenID Connect Provider using the opgo SDK.

Another example, [GoogleCloudHostedService example](examples/GoogleCloudHostedService), demonstrates how to host the OPGO service on Google Cloud Platform using Cloud Firestore, Firebase Authentication, and Cloud Run. See [examples/GoogleCloudHostedService/README.md](examples/GoogleCloudHostedService/README.md) for more information, including required environment variables, available endpoints, and the login process.

# Contributing
Feel free to submit bug reports and feature requests through GitHub Issues. Pull requests are also welcome.

# Acknowledgment
The development of opgo was inspired by [Authlete](https://www.authlete.com/). We extend our sincere gratitude to them.

# License
MIT License

Copyright (c) 2025 Eigen
