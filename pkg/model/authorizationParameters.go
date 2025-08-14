package model

import (
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

func OverrideAuthorizationParameters(
	extentions *oppb.ClientExtensions,
	dst *oppb.AuthorizationParameters,
	src *oppb.AuthorizationParameters) {
	if extentions.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#authorization-server
		// 10. shall only use the parameters included in the signed request object passed via the request or request_uri parameter;
		dst.Scopes = []string{}
		dst.ResponseType = ""
		dst.ClientId = ""
		dst.RedirectUri = ""
		dst.State = ""
		dst.ResponseMode = ""
		dst.Nonce = ""
		dst.Display = ""
		dst.Prompts = []string{}
		dst.MaxAge = ""
		dst.UiLocales = []string{}
		dst.IdTokenHint = ""
		dst.LoginHint = ""
		dst.AcrValues = []string{}
		dst.ClaimsLocales = ""
		dst.Claims = ""
		dst.CodeChallenge = ""
		dst.CodeChallengeMethod = ""
		dst.Request = ""
		dst.RequestUri = ""
	}

	if len(src.Scopes) > 0 {
		dst.Scopes = src.Scopes
	}
	if len(src.ResponseType) > 0 {
		dst.ResponseType = src.ResponseType
	}
	if len(src.ClientId) > 0 {
		dst.ClientId = src.ClientId
	}
	if len(src.RedirectUri) > 0 {
		dst.RedirectUri = src.RedirectUri
	}
	if len(src.State) > 0 {
		dst.State = src.State
	}
	if len(src.ResponseMode) > 0 {
		dst.ResponseMode = src.ResponseMode
	}
	if len(src.Nonce) > 0 {
		dst.Nonce = src.Nonce
	}
	if len(src.Display) > 0 {
		dst.Display = src.Display
	}
	if len(src.Prompts) > 0 {
		dst.Prompts = src.Prompts
	}
	if len(src.MaxAge) > 0 {
		dst.MaxAge = src.MaxAge
	}
	if len(src.UiLocales) > 0 {
		dst.UiLocales = src.UiLocales
	}
	if len(src.IdTokenHint) > 0 {
		dst.IdTokenHint = src.IdTokenHint
	}
	if len(src.LoginHint) > 0 {
		dst.LoginHint = src.LoginHint
	}
	if len(src.AcrValues) > 0 {
		dst.AcrValues = src.AcrValues
	}
	if len(src.ClaimsLocales) > 0 {
		dst.ClaimsLocales = src.ClaimsLocales
	}
	if len(src.Claims) > 0 {
		dst.Claims = src.Claims
	}
	if len(src.CodeChallenge) > 0 {
		dst.CodeChallenge = src.CodeChallenge
	}
	if len(src.CodeChallengeMethod) > 0 {
		dst.CodeChallengeMethod = src.CodeChallengeMethod
	}
	if len(src.Request) > 0 {
		dst.Request = src.Request
	}
	if len(src.RequestUri) > 0 {
		dst.RequestUri = src.RequestUri
	}
	dst.IsPar = src.IsPar
	dst.ParKey = src.ParKey
}
