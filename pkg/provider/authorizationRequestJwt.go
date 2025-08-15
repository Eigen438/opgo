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

package provider

import (
	"context"
	"encoding/json"
	"fmt"
	"slices"
	"strings"
	"time"

	"github.com/Eigen438/opgo/internal/convert"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/MicahParks/jwkset"
	"github.com/MicahParks/keyfunc/v3"
	"github.com/golang-jwt/jwt/v5"
)

var fapiRejectionAlg = []string{"none", "RS256", "RS384", "RS512"}

// https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
// https://openid.net/specs/openid-connect-core-1_0.html#ClaimsLanguagesAndScripts
// https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter
// https://datatracker.ietf.org/doc/html/rfc7636#section-4.3
// https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
type authorizationRequestParamFromJwt struct {
	Scope               string           `json:"scope"`
	ResponseType        string           `json:"response_type"`
	ClientId            string           `json:"client_id"`
	RedirectUri         string           `json:"redirect_uri"`
	State               string           `json:"state"`
	ResponseMode        string           `json:"response_mode"`
	Nonce               string           `json:"nonce"`
	Display             string           `json:"display"`
	Prompt              string           `json:"prompt"`
	MaxAge              int32            `json:"max_age"`
	UiLocales           string           `json:"ui_locales"`
	IdTokenHint         string           `json:"id_token_hint"`
	LoginHint           string           `json:"login_hint"`
	AcrValues           string           `json:"acr_values"`
	ClaimsLocales       string           `json:"claims_locales"`
	Claims              model.ClaimRules `json:"claims"`
	CodeChallenge       string           `json:"code_challenge"`
	CodeChallengeMethod string           `json:"code_challenge_method"`
	Request             string           `json:"request"`
	RequestUri          string           `json:"request_uri"`
	jwt.RegisteredClaims
}

func (a authorizationRequestParamFromJwt) GetScopes() []string {
	if len(a.Scope) > 0 {
		return strings.Split(a.Scope, " ")
	} else {
		return []string{}
	}
}

func (a authorizationRequestParamFromJwt) GetResponseType() string {
	return a.ResponseType
}

func (a authorizationRequestParamFromJwt) GetClientId() string {
	return a.ClientId
}

func (a authorizationRequestParamFromJwt) GetRedirectUri() string {
	return a.RedirectUri
}

func (a authorizationRequestParamFromJwt) GetState() string {
	return a.State
}

func (a authorizationRequestParamFromJwt) GetResponseMode() string {
	return a.ResponseMode
}

func (a authorizationRequestParamFromJwt) GetNonce() string {
	return a.Nonce
}

func (a authorizationRequestParamFromJwt) GetDisplay() string {
	return a.Display
}

func (a authorizationRequestParamFromJwt) GetPrompts() []string {
	if len(a.Prompt) > 0 {
		return strings.Split(a.Prompt, " ")
	} else {
		return []string{}
	}
}

func (a authorizationRequestParamFromJwt) GetMaxAge() string {
	if a.MaxAge == -1 {
		return ""
	} else {
		return fmt.Sprintf("%d", a.MaxAge)
	}
}

func (a authorizationRequestParamFromJwt) GetUiLocales() []string {
	if len(a.UiLocales) > 0 {
		return strings.Split(a.UiLocales, " ")
	} else {
		return []string{}
	}
}

func (a authorizationRequestParamFromJwt) GetIdTokenHint() string {
	return a.IdTokenHint
}

func (a authorizationRequestParamFromJwt) GetLoginHint() string {
	return a.LoginHint
}

func (a authorizationRequestParamFromJwt) GetAcrValues() []string {
	if len(a.AcrValues) > 0 {
		return strings.Split(a.AcrValues, " ")
	} else {
		return []string{}
	}
}

func (a authorizationRequestParamFromJwt) GetClaimsLocales() []string {
	if len(a.ClaimsLocales) > 0 {
		return strings.Split(a.ClaimsLocales, " ")
	} else {
		return []string{}
	}
}

func (a authorizationRequestParamFromJwt) GetClaims() string {
	if len(a.Claims.IdToken) > 0 || len(a.Claims.Userinfo) > 0 {
		b, err := json.Marshal(a.Claims)
		if err == nil {
			return string(b)
		}
	}
	return ""
}

func (a authorizationRequestParamFromJwt) GetCodeChallenge() string {
	return a.CodeChallenge
}

func (a authorizationRequestParamFromJwt) GetCodeChallengeMethod() string {
	return a.CodeChallengeMethod
}

func (a authorizationRequestParamFromJwt) GetRequest() string {
	return a.Request
}

func (a authorizationRequestParamFromJwt) GetRequestUri() string {
	return a.RequestUri
}

func (a authorizationRequestParamFromJwt) GetIsPar() bool {
	return false
}

func (a authorizationRequestParamFromJwt) GetParKey() string {
	return ""
}

func analyzeAuthorizationRequestJwt(
	ctx context.Context,
	iss *model.Issuer,
	client *model.Client,
	jwtString string,
	authParam *oppb.AuthorizationParameters) *oppb.AuthorizationFailResponse {

	arp := &authorizationRequestParamFromJwt{MaxAge: -1 /* dummy */}
	token, err := parseJwt(ctx, client.Meta, jwtString, arp)
	if err != nil {
		return failAuthorizationInvalidRequestObject("request object parse error")
	}

	model.OverrideAuthorizationParameters(client.Extensions, authParam, arp)

	// https://openid.net/specs/openid-financial-api-part-2-1_0.html#algorithm-considerations
	// FAPIではクライアントjwtの署名アルゴリズムは制限がある
	if client.Extensions.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 ||
		client.Extensions.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
		if slices.Contains(fapiRejectionAlg, fmt.Sprintf("%v", token.Header["alg"])) {
			return failAuthorizationInvalidRequestObject("rsigning alg not allow")
		}

		// https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#rfc.section.5.2.3
		// https://www.rfc-editor.org/rfc/rfc9101.html#section-6.2
		// exp, nbf, aud, iss チェック は invalid_request_objectにすべき
		if exp, err := arp.GetExpirationTime(); err != nil || exp == nil {
			return failAuthorizationInvalidRequestObject("jwt not contains exp")
		}
		if nbf, err := arp.GetNotBefore(); err != nil || nbf == nil {
			return failAuthorizationInvalidRequestObject("jwt not contains nbf")
		}
		nbf, _ := arp.GetNotBefore()
		exp, _ := arp.GetExpirationTime()
		if time.Now().Unix() > exp.Unix() {
			return failAuthorizationInvalidRequestObject("jwt was expired")
		}
		if time.Now().Unix()-nbf.Unix() > 60*60 {
			return failAuthorizationInvalidRequestObject("nbf too past")
		}
		if exp.Unix()-nbf.Unix() > 60*60 {
			return failAuthorizationInvalidRequestObject("exp too long")
		}

		if aud, err := arp.GetAudience(); err != nil || aud[0] != iss.Meta.Issuer {
			return failAuthorizationInvalidRequestObject("jwt aud not match")
		}
		if issuer, err := arp.GetIssuer(); err != nil || issuer != client.Identity.ClientId {
			return failAuthorizationInvalidRequestObject("jwt iss not match")
		}
	}
	return nil
}

func parseJwt(ctx context.Context, client *oppb.ClientMeta, jwtString string, out jwt.Claims) (*jwt.Token, error) {
	// nbf, expをプログラムでチェックするためにWithLeewayオプションを使用する
	return jwt.NewParser(jwt.WithLeeway(24*time.Hour)).ParseWithClaims(jwtString, out, func(t *jwt.Token) (any, error) {
		if t.Header["alg"] == "none" {
			return jwt.UnsafeAllowNoneSignatureType, nil
		} else if len(client.JwksUri) > 0 {
			kf, err := keyfunc.NewDefault([]string{client.JwksUri})
			if err != nil {
				return nil, err
			}
			return kf.Keyfunc(t)
		} else if client.Jwks != nil {
			var jwks jwkset.JWKSMarshal
			jwks.Keys = convert.JWKMarchalsFromKeys(client.Jwks.Keys)
			storage, err := jwks.ToStorage()
			if err != nil {
				return nil, err
			}
			j, err := storage.JSON(ctx)
			if err != nil {
				return nil, err
			}
			kf, err := keyfunc.NewJWKSetJSON(j)
			if err != nil {
				return nil, err
			}
			return kf.Keyfunc(t)
		} else {
			return nil, fmt.Errorf("no jwks/jwks_uri found for client %s", client.ClientName)
		}
	})
}
