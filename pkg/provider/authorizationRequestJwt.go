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
	"net/url"
	"slices"
	"strconv"
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

type authorizationRequestParamFromJwt struct {
	Claims              model.ClaimRules `json:"claims"`
	ClientId            string           `json:"client_id"`
	CodeChallenge       string           `json:"code_challenge"`
	CodeChallengeMethod string           `json:"code_challenge_method"`
	Display             string           `json:"display"`
	IdTokenHint         string           `json:"id_token_hint"`
	LoginHint           string           `json:"login_hint"`
	MaxAge              int64            `json:"max_age"`
	Nonce               string           `json:"nonce"`
	Prompt              string           `json:"prompt"`
	RedirectUri         string           `json:"redirect_uri"`
	ResponseMode        string           `json:"response_mode"`
	ResponseType        string           `json:"response_type"`
	Scope               string           `json:"scope"`
	State               string           `json:"state"`
	UiLocales           string           `json:"ui_locales"`
	jwt.RegisteredClaims
}

func analyzeAuthorizationRequestJwt(
	ctx context.Context,
	iss *model.Issuer,
	client *model.Client,
	jwtString string,
	authParam *oppb.AuthorizationParameters) *oppb.AuthorizationFailResponse {

	arp := &authorizationRequestParamFromJwt{}
	token, err := parseJwt(ctx, client.Meta, jwtString, arp)
	if err != nil {
		return failAuthorizationInvalidRequestObject("request object parse error")
	}

	if client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#authorization-server
		// FAPIの場合はrequest/request_uri指定のパラメータのみを信用するため一旦空にする
		authParam.AcrValues = []string{}
		authParam.Claims = ""
		authParam.ClientId = ""
		authParam.ClientAssertion = ""
		authParam.CodeChallenge = ""
		authParam.CodeChallengeMethod = ""
		authParam.Display = ""
		authParam.IdTokenHint = ""
		authParam.LoginHint = ""
		authParam.MaxAge = ""
		authParam.Nonce = ""
		authParam.Prompts = []string{}
		authParam.RedirectUri = ""
		authParam.Request = ""
		authParam.RequestUri = ""
		authParam.ResponseMode = ""
		authParam.ResponseType = ""
		authParam.Scopes = []string{}
		authParam.State = ""
		authParam.UiLocales = []string{}
	}

	if len(arp.Claims.IdToken) > 0 || len(arp.Claims.Userinfo) > 0 {
		b, err := json.Marshal(arp.Claims)
		if err == nil {
			authParam.Claims = string(b)
		}
	}
	authParam.ClientId = arp.ClientId
	if len(arp.CodeChallenge) > 0 {
		authParam.CodeChallenge = arp.CodeChallenge
	}
	if len(arp.CodeChallengeMethod) > 0 {
		authParam.CodeChallengeMethod = arp.CodeChallengeMethod
	}
	if len(arp.Display) > 0 {
		authParam.Display = arp.Display
	}
	if len(arp.IdTokenHint) > 0 {
		authParam.IdTokenHint = arp.IdTokenHint
	}
	if len(arp.LoginHint) > 0 {
		authParam.LoginHint = arp.LoginHint
	}
	if arp.MaxAge > 0 {
		authParam.MaxAge = strconv.Itoa(int(arp.MaxAge))
	}
	if len(arp.Nonce) > 0 {
		authParam.Nonce = arp.Nonce
	}
	if len(arp.Prompt) > 0 {
		authParam.Prompts = strings.Split(arp.Prompt, " ")
	}
	if len(arp.RedirectUri) > 0 {
		authParam.RedirectUri = arp.RedirectUri
	}
	if len(arp.ResponseMode) > 0 {
		authParam.ResponseMode = arp.ResponseMode
	}
	authParam.ResponseType = arp.ResponseType
	if len(arp.Scope) > 0 {
		authParam.Scopes = strings.Split(arp.Scope, " ")
	}
	if len(arp.State) > 0 {
		authParam.State = arp.State
	}
	if len(arp.UiLocales) > 0 {
		authParam.UiLocales = strings.Split(arp.UiLocales, " ")
	}

	// https://openid.net/specs/openid-financial-api-part-2-1_0.html#algorithm-considerations
	// FAPIではクライアントjwtの署名アルゴリズムは制限がある
	if client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_1_0 ||
		client.Attribute.Profile == oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_FAPI_2_0 {
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
			u, err := url.Parse(client.JwksUri)
			if err != nil {
				return nil, err
			}
			storage, err := jwkset.NewStorageFromHTTP(u.String(), jwkset.HTTPClientStorageOptions{})
			if err != nil {
				return nil, err
			}
			j, err := storage.JSON(ctx)
			if err != nil {
				return nil, err
			}
			f, err := keyfunc.NewJWKSetJSON(j)
			if err != nil {
				return nil, err
			}
			return f.Keyfunc(t)
		} else if len(client.Jwks.Keys) == 1 {
			keys := convert.JWKMarchalsFromKeys(client.Jwks.Keys)
			jwk, err := jwkset.NewJWKFromMarshal(keys[0], jwkset.JWKMarshalOptions{
				Private: false,
			}, jwkset.JWKValidateOptions{})
			if err != nil {
				return nil, err
			}
			return jwk.Key(), nil
		} else {
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
			f, err := keyfunc.NewJWKSetJSON(j)
			if err != nil {
				return nil, err
			}
			return f.Keyfunc(t)
		}
	})
}
