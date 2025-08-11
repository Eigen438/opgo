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
	DEFAULT_AUTHORIZATION_PATH        = "/authorize"
	DEFAULT_DISCOVERY_PATH            = "/.well-known/openid-configuration"
	DEFAULT_JWKS_PATH                 = "/.well-known/jwks.json"
	DEFAULT_TOKEN_PATH                = "/token"
	DEFAULT_USERINFO_PATH             = "/userinfo"
	DEFAULT_REGISTRATION_PATH         = "/registration"
	DEFAULT_PUSHED_AUTHORIZATION_PATH = "/par"
)

type Paths struct {
	UseDiscovery            bool
	AuthorizationPath       string
	TokenPath               string
	UserinfoPath            string
	JwksPath                string
	RegistrationPath        string
	PushedAuthorizationPath string
}

func (p *Paths) useDiscovery() bool {
	if p == nil {
		return true
	}
	return p.UseDiscovery
}

func (p *Paths) authorizationPath() string {
	if p == nil || p.AuthorizationPath == "" {
		return DEFAULT_AUTHORIZATION_PATH
	}
	return p.AuthorizationPath
}

func (p *Paths) tokenPath() string {
	if p == nil || p.TokenPath == "" {
		return DEFAULT_TOKEN_PATH
	}
	return p.TokenPath
}

func (p *Paths) userinfoPath() string {
	if p == nil {
		return ""
	}
	return p.UserinfoPath
}

func (p *Paths) jwksPath() string {
	if p == nil {
		return ""
	}
	return p.JwksPath
}

func (p *Paths) registrationPath() string {
	if p == nil {
		return ""
	}
	return p.RegistrationPath
}

func (p *Paths) pushedAuthorizationPath() string {
	if p == nil {
		return ""
	}
	return p.PushedAuthorizationPath
}

func DefaultPaths() *Paths {
	return &Paths{
		UseDiscovery:      false,
		AuthorizationPath: DEFAULT_AUTHORIZATION_PATH,
		TokenPath:         DEFAULT_TOKEN_PATH,
		UserinfoPath:      DEFAULT_USERINFO_PATH,
	}
}

func (i *innerSdk) ServeMux(paths *Paths) *http.ServeMux {
	mux := http.NewServeMux()
	if paths.useDiscovery() {
		mux.HandleFunc(DEFAULT_DISCOVERY_PATH, i.discoveryEndpoint)
	}
	mux.HandleFunc(paths.authorizationPath(), i.authorizationEndpoint)
	mux.HandleFunc(paths.tokenPath(), i.tokenEndpoint)
	if paths.jwksPath() != "" {
		mux.HandleFunc(paths.jwksPath(), i.jwksEndpoint)
	}
	if paths.userinfoPath() != "" {
		mux.HandleFunc(paths.userinfoPath(), i.userinfoEndpoint)
	}
	if paths.registrationPath() != "" {
		mux.HandleFunc(paths.registrationPath(), i.registrationEndpoint)
	}
	if paths.pushedAuthorizationPath() != "" {
		mux.HandleFunc(paths.pushedAuthorizationPath(), i.pushedAuthorizationEndpoint)
	}
	return mux
}
