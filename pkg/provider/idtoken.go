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
	"crypto/sha256"
	"crypto/sha512"
	"encoding/base64"
	"encoding/json"
	"time"

	"github.com/Eigen438/opgo/internal/claims"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

func makeClaimsRule(params *oppb.AuthorizationParameters) (*claims.ClaimRules, error) {
	cr := claims.MakeClaimRulesFromDefaultScope(params.Scopes)
	if len(params.AcrValues) > 0 {
		cr.Append(claims.NewAcrClaimRules(params.AcrValues))
	}
	if len(params.Claims) > 0 {
		cp := claims.NewClaimRules()
		if err := json.Unmarshal([]byte(params.Claims), cp); err != nil {
			return nil, err
		}
		cr.Append(cp)
	}
	return cr, nil
}

func makeIdTokenClaims(iss *model.Issuer, identifier *model.TokenIdentifier, now time.Time, code, accessToken, state string) (jwt.MapClaims, error) {
	cr, err := makeClaimsRule(identifier.Details.Authorized.Request.AuthParams)
	if err != nil {
		return nil, err
	}

	//マップのコピー
	c := jwt.MapClaims{}
	if err := cr.IdToken.MakeClaims(identifier.Details.Authorized.Claims, c); err != nil {
		return nil, err
	}

	// https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.5.4
	// response_typeがid_tokenの場合、id_tokenにuserinfoで要求された値を設定する
	if identifier.Details.Authorized.Request.AuthParams.ResponseType == oauth.ResponseTypeIdToken {
		if err := cr.Userinfo.MakeClaims(identifier.Details.Authorized.Claims, c); err != nil {
			return nil, err
		}
	}

	// 動的生成クレーム付与（優先度高）
	// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
	c["iss"] = identifier.Details.Authorized.Request.Issuer                   // REQUIRED
	c["sub"] = identifier.Details.Authorized.Subject                          // REQUIRED
	c["aud"] = identifier.Details.Authorized.Request.Client.Identity.ClientId // REQUIRED
	c["exp"] = identifier.ExpireAt.Unix()                                     // REQUIRED
	c["iat"] = now.Unix()                                                     // REQUIRED
	if identifier.Details.Authorized.Request.AuthParams.MaxAge >= 0 || identifier.Details.Authorized.Request.Client.Meta.RequireAuthTime {
		// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
		// When a max_age request is made or when auth_time is requested as an Essential Claim, then this Claim is REQUIRED;
		c["auth_time"] = identifier.Details.Authorized.AuthTime.Unix() // Conditionally required
	}
	if identifier.Details.Authorized.Request.AuthParams.Nonce != "" {
		// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
		// If present in the Authentication Request,
		// Authorization Servers MUST include a nonce Claim in the ID Token with the Claim Value being the nonce value sent in the Authentication Request.
		c["nonce"] = identifier.Details.Authorized.Request.AuthParams.Nonce // Conditionally required
	}

	signedAlg := identifier.Details.Authorized.Request.Client.Meta.IdTokenSignedResponseAlg
	if len(code) > 0 {
		// https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken
		// If the ID Token is issued from the Authorization Endpoint with a code,
		// which is the case for the response_type values code id_token and code id_token token, this is REQUIRED;
		cHash := createHash(signedAlg, code)
		if cHash != nil {
			c["c_hash"] = base64.RawURLEncoding.EncodeToString(cHash[:16]) // Conditionally required
		}
	}
	if len(accessToken) > 0 {
		// https://openid.net/specs/openid-connect-core-1_0.html#ImplicitIDToken
		// If the ID Token is issued from the Authorization Endpoint with an access_token value,
		// which is the case for the response_type value id_token token, this is REQUIRED;
		atHash := createHash(signedAlg, accessToken)
		if atHash != nil {
			c["at_hash"] = base64.RawURLEncoding.EncodeToString(atHash[:16]) // Conditionally required
		}
	}
	if len(state) > 0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0.html#id-token-as-detached-signature
		// State hash value.
		// Its value is the base64url encoding of the left-most half of the hash of the octets of the ASCII representation of the state
		sHash := createHash(signedAlg, state)
		if sHash != nil {
			c["s_hash"] = base64.RawURLEncoding.EncodeToString(sHash[:16]) // Conditionally required
		}
	}
	c["jti"] = identifier.Details.Identifier

	if iss.Meta.BackchannelLogoutSessionSupported || iss.Meta.FrontchannelLogoutSessionSupported {
		c["sid"] = identifier.Details.Authorized.SessionId
	}
	return c, nil
}

func makeIdTokenIdentifier(authorized model.Authorized, now time.Time) (*model.TokenIdentifier, error) {
	identifier, err := randutil.UuidV4()
	if err != nil {
		return nil, err
	}
	return &model.TokenIdentifier{
		CreateAt: now,
		Details: model.TokenIdentifierDetails{
			Authorized: authorized,
			Identifier: identifier,
			Type:       model.TokenTypeIdToken,
		},
		ExpireAt:  now.Add(time.Duration(authorized.Request.Client.Attribute.IdTokenLifetimeSeconds) * time.Second),
		RequestId: authorized.Request.Key.Id,
		SessionId: authorized.SessionId,
	}, nil
}

func makeAccessTokenIdentifier(authorized model.Authorized, now time.Time, tlsClientCertificate string) (*model.TokenIdentifier, error) {
	identifier, err := randutil.UuidV4()
	if err != nil {
		return nil, err
	}
	return &model.TokenIdentifier{
		CreateAt: now,
		Details: model.TokenIdentifierDetails{
			Authorized:           authorized,
			Identifier:           identifier,
			Type:                 model.TokenTypeAccessToken,
			TlsClientCertificate: tlsClientCertificate,
		},
		ExpireAt:  now.Add(time.Duration(authorized.Request.Client.Attribute.AccessTokenLifetimeSeconds) * time.Second),
		RequestId: authorized.Request.Key.Id,
		SessionId: authorized.SessionId,
	}, nil
}

func makeRefreshTokenIdentifier(authorized model.Authorized, now time.Time) (*model.TokenIdentifier, error) {
	identifier, err := randutil.UuidV4()
	if err != nil {
		return nil, err
	}
	return &model.TokenIdentifier{
		CreateAt: now,
		Details: model.TokenIdentifierDetails{
			Authorized: authorized,
			Identifier: identifier,
			Type:       model.TokenTypeRefreshToken,
		},
		ExpireAt:  now.Add(time.Duration(authorized.Request.Client.Attribute.RefreshTokenLifetimeSeconds) * time.Second),
		RequestId: authorized.Request.Key.Id,
		SessionId: authorized.SessionId,
	}, nil
}

func createHash(signedAlg, target string) []byte {
	switch signedAlg {
	case jwt.SigningMethodRS256.Alg(), jwt.SigningMethodPS256.Alg(), jwt.SigningMethodES256.Alg():
		hash := sha256.Sum256([]byte(target))
		return hash[:16]
	case jwt.SigningMethodRS384.Alg(), jwt.SigningMethodPS384.Alg(), jwt.SigningMethodES384.Alg():
		hash := sha512.Sum384([]byte(target))
		return hash[:16]
	case jwt.SigningMethodRS512.Alg(), jwt.SigningMethodPS512.Alg(), jwt.SigningMethodES512.Alg():
		hash := sha512.Sum512([]byte(target))
		return hash[:16]
	}
	return nil
}
