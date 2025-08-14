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

import "net/http"

const (
	DEFAULT_DISCOVERY_PATH            = "/.well-known/openid-configuration"
	DEFAULT_JWKS_PATH                 = "/.well-known/jwks.json"
	DEFAULT_AUTHORIZATION_PATH        = "/authorize"
	DEFAULT_TOKEN_PATH                = "/token"
	DEFAULT_USERINFO_PATH             = "/userinfo"
	DEFAULT_REGISTRATION_PATH         = "/registration"
	DEFAULT_PUSHED_AUTHORIZATION_PATH = "/par"
)

type SetupHelper struct {
	UseDiscovery            bool
	AuthorizationPath       string
	TokenPath               string
	UserinfoPath            string
	JwksPath                string
	RegistrationPath        string
	PushedAuthorizationPath string
}

func DefaultPaths() *SetupHelper {
	return &SetupHelper{
		UseDiscovery:      false,
		AuthorizationPath: DEFAULT_AUTHORIZATION_PATH,
		TokenPath:         DEFAULT_TOKEN_PATH,
		UserinfoPath:      DEFAULT_USERINFO_PATH,
	}
}

func (helper SetupHelper) useDiscovery() bool {
	return helper.UseDiscovery
}

func (helper SetupHelper) authorizationPath() string {
	if helper.AuthorizationPath == "" {
		return DEFAULT_AUTHORIZATION_PATH
	}
	return helper.AuthorizationPath
}

func (helper SetupHelper) tokenPath() string {
	if helper.TokenPath == "" {
		return DEFAULT_TOKEN_PATH
	}
	return helper.TokenPath
}

func (helper SetupHelper) jwksPath() string {
	return helper.JwksPath
}

func (helper SetupHelper) userinfoPath() string {
	return helper.UserinfoPath
}

func (helper SetupHelper) registrationPath() string {
	return helper.RegistrationPath
}

func (helper SetupHelper) pushedAuthorizationPath() string {
	return helper.PushedAuthorizationPath
}

func (p *SetupHelper) NewServeMux(sdk Sdk) *http.ServeMux {
	mux := http.NewServeMux()
	if p.useDiscovery() {
		mux.HandleFunc(DEFAULT_DISCOVERY_PATH, sdk.DiscoveryEndpoint)
	}
	mux.HandleFunc(p.authorizationPath(), sdk.AuthorizationEndpoint)
	mux.HandleFunc(p.tokenPath(), sdk.TokenEndpoint)
	if p.jwksPath() != "" {
		mux.HandleFunc(p.jwksPath(), sdk.JwksEndpoint)
	}
	if p.userinfoPath() != "" {
		mux.HandleFunc(p.userinfoPath(), sdk.UserinfoEndpoint)
	}
	if p.registrationPath() != "" {
		mux.HandleFunc(p.registrationPath(), sdk.RegistrationEndpoint)
	}
	if p.pushedAuthorizationPath() != "" {
		mux.HandleFunc(p.pushedAuthorizationPath(), sdk.PushedAuthorizationEndpoint)
	}
	return mux
}
