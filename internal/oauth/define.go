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

package oauth

const SchemeRequestURI = "urn:ietf:params:oauth:request_uri:"

const (
	GrantTypeAuthorizationCode = "authorization_code"
	GrantTypeRefreshToken      = "refresh_token"
	GrantTypeImplicit          = "implicit"
)

const (
	PkceAlgorithmPlane = "plane"
	PkceAlgorithmS256  = "S256"
)

const (
	TokenEndpointAuthMethodNone                    = "none"
	TokenEndpointAuthMethodClientSecretBasic       = "client_secret_basic"
	TokenEndpointAuthMethodClientSecretPost        = "client_secret_post"
	TokenEndpointAuthMethodClientSecretJwt         = "client_secret_jwt"
	TokenEndpointAuthMethodPrivateKeyJwt           = "private_key_jwt"
	TokenEndpointAuthMethodTlsClientAuth           = "tls_client_auth"
	TokenEndpointAuthMethodSelfSignedTlsClientAuth = "self_signed_tls_client_auth"
)

const (
	ResponseModeFormPost    = "form_post"
	ResponseModeFormPostJwt = "form_post.jwt"
	ResponseModeFragment    = "fragment"
	ResponseModeFragmentJwt = "fragment.jwt"
	ResponseModeDefault     = ""
	ResponseModeJwt         = "jwt"
	ResponseModeQuery       = "query"
	ResponseModeQueryJwt    = "query.jwt"
)

const (
	ResponseTypeNone             = "none"
	ResponseTypeCode             = "code"
	ResponseTypeIdToken          = "id_token"
	ResponseTypeIdTokenToken     = "id_token token"
	ResponseTypeCodeIdToken      = "code id_token"
	ResponseTypeCodeToken        = "code token"
	ResponseTypeCodeIdTokenToken = "code id_token token"
	// OAuth 2.0
	ResponseTypeToken = "token"
)

const (
	TokenErrorInvalidRequest       = "invalid_request"
	TokenErrorInvalidClient        = "invalid_client"
	TokenErrorInvalidGrant         = "invalid_grant"
	TokenErrorUnauthorizedClient   = "unauthorized_client"
	TokenErrorUnsupportedGrantType = "unsupported_grant_type"
	TokenErrorInvalidScope         = "invalid_scope"
)

func ResponseModesSupported() []string {
	return []string{
		ResponseModeFormPost,
		ResponseModeFormPostJwt,
		ResponseModeFragment,
		ResponseModeFragmentJwt,
		ResponseModeJwt,
		ResponseModeQuery,
		ResponseModeQueryJwt,
	}
}

func ResponseTypesSupported() []string {
	return []string{
		ResponseTypeNone,
		ResponseTypeCode,
		ResponseTypeIdToken,
		ResponseTypeIdTokenToken,
		ResponseTypeCodeIdToken,
		ResponseTypeCodeToken,
		ResponseTypeCodeIdTokenToken,
	}
}

type ResponseMode string

const (
	ResponseModeError ResponseMode = "error"
)

var MappedResponseMode = map[string]map[string]ResponseMode{
	ResponseTypeNone: {
		ResponseModeDefault:     ResponseModeQuery,
		ResponseModeJwt:         ResponseModeQueryJwt,
		ResponseModeQuery:       ResponseModeQuery,
		ResponseModeQueryJwt:    ResponseModeQueryJwt,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeCode: {
		ResponseModeDefault:     ResponseModeQuery,
		ResponseModeJwt:         ResponseModeQueryJwt,
		ResponseModeQuery:       ResponseModeQuery,
		ResponseModeQueryJwt:    ResponseModeQueryJwt,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeIdToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeCodeToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeCodeIdToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeIdTokenToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
	ResponseTypeCodeIdTokenToken: {
		ResponseModeDefault:     ResponseModeFragment,
		ResponseModeJwt:         ResponseModeFragmentJwt,
		ResponseModeQuery:       ResponseModeFragment,
		ResponseModeQueryJwt:    ResponseModeFragment,
		ResponseModeFragment:    ResponseModeFragment,
		ResponseModeFragmentJwt: ResponseModeFragmentJwt,
		ResponseModeFormPost:    ResponseModeFormPost,
		ResponseModeFormPostJwt: ResponseModeFormPostJwt,
	},
}
