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

package model

import (
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

type AuthorizationParametersInterface interface {
	GetScopes() []string
	GetResponseType() string
	GetClientId() string
	GetRedirectUri() string
	GetState() string
	GetResponseMode() string
	GetNonce() string
	GetDisplay() string
	GetPrompts() []string
	GetMaxAge() int32
	GetUiLocales() []string
	GetIdTokenHint() string
	GetLoginHint() string
	GetAcrValues() []string
	GetClaimsLocales() []string
	GetClaims() string
	GetCodeChallenge() string
	GetCodeChallengeMethod() string
	GetRequest() string
	GetRequestUri() string
	GetIsPar() bool
	GetParKey() string
}

func ClearAuthorizationParameters(meta *oppb.ClientMeta, dst *oppb.AuthorizationParameters) {
	dst.Scopes = []string{}
	dst.ResponseType = ""
	dst.ClientId = ""
	dst.RedirectUri = ""
	dst.State = ""
	dst.ResponseMode = ""
	dst.Nonce = ""
	dst.Display = ""
	dst.Prompts = []string{}
	dst.MaxAge = meta.DefaultMaxAge
	dst.UiLocales = []string{}
	dst.IdTokenHint = ""
	dst.LoginHint = ""
	if len(meta.GetDefaultAcrValues()) > 0 {
		dst.AcrValues = meta.GetDefaultAcrValues()
	} else {
		dst.AcrValues = []string{}
	}
	dst.ClaimsLocales = []string{}
	dst.Claims = ""
	dst.CodeChallenge = ""
	dst.CodeChallengeMethod = ""
	dst.Request = ""
	dst.RequestUri = ""
}

func OverrideAuthorizationParameters(
	client *Client,
	dst *oppb.AuthorizationParameters,
	src AuthorizationParametersInterface) {
	if client.Extensions.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#authorization-server
		// 10. shall only use the parameters included in the signed request object passed via the request or request_uri parameter;
		ClearAuthorizationParameters(client.Meta, dst)
	}

	if len(src.GetScopes()) > 0 {
		dst.Scopes = src.GetScopes()
	}
	if len(src.GetResponseType()) > 0 {
		dst.ResponseType = src.GetResponseType()
	}
	if len(src.GetClientId()) > 0 {
		dst.ClientId = src.GetClientId()
	}
	if len(src.GetRedirectUri()) > 0 {
		dst.RedirectUri = src.GetRedirectUri()
	}
	if len(src.GetState()) > 0 {
		dst.State = src.GetState()
	}
	if len(src.GetResponseMode()) > 0 {
		dst.ResponseMode = src.GetResponseMode()
	}
	if len(src.GetNonce()) > 0 {
		dst.Nonce = src.GetNonce()
	}
	if len(src.GetDisplay()) > 0 {
		dst.Display = src.GetDisplay()
	}
	if len(src.GetPrompts()) > 0 {
		dst.Prompts = src.GetPrompts()
	}
	if src.GetMaxAge() >= 0 {
		dst.MaxAge = src.GetMaxAge()
	}
	if len(src.GetUiLocales()) > 0 {
		dst.UiLocales = src.GetUiLocales()
	}
	if len(src.GetIdTokenHint()) > 0 {
		dst.IdTokenHint = src.GetIdTokenHint()
	}
	if len(src.GetLoginHint()) > 0 {
		dst.LoginHint = src.GetLoginHint()
	}
	if len(src.GetAcrValues()) > 0 {
		dst.AcrValues = src.GetAcrValues()
	}
	if len(src.GetClaimsLocales()) > 0 {
		dst.ClaimsLocales = src.GetClaimsLocales()
	}
	if len(src.GetClaims()) > 0 {
		dst.Claims = src.GetClaims()
	}
	if len(src.GetCodeChallenge()) > 0 {
		dst.CodeChallenge = src.GetCodeChallenge()
	}
	if len(src.GetCodeChallengeMethod()) > 0 {
		dst.CodeChallengeMethod = src.GetCodeChallengeMethod()
	}
	if len(src.GetRequest()) > 0 {
		dst.Request = src.GetRequest()
	}
	if len(src.GetRequestUri()) > 0 {
		dst.RequestUri = src.GetRequestUri()
	}
	dst.IsPar = src.GetIsPar()
	dst.ParKey = src.GetParKey()
}
