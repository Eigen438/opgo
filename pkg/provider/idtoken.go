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
	"encoding/base64"
	"encoding/json"
	"fmt"
	"hash"
	"time"

	"github.com/Eigen438/opgo/internal/keyutil"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

func MakeIdTokenClaims(iss *model.Issuer, identifier *model.TokenIdentifier, now time.Time, code, accessToken, state string) (jwt.MapClaims, error) {
	//マップのコピー
	claims := jwt.MapClaims{}

	in := map[string]interface{}{}
	err := json.Unmarshal([]byte(identifier.Details.Authorized.Claims), &in)
	if err != nil {
		return nil, err
	}

	// ClaimRulesを復元
	cr := model.NewClaimRules()
	_ = json.Unmarshal(identifier.Details.Authorized.Request.RequestClaims, cr)
	for key, val := range in {
		if _, ok := cr.IdToken[key]; ok {
			claims[key] = val
		}
	}
	// https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.5.4
	// response_typeがid_tokenの場合、id_tokenにuserinfoで要求された値を設定する
	if identifier.Details.Authorized.Request.AuthParams.ResponseType == oauth.ResponseTypeIdToken {
		for key, val := range in {
			if _, ok := cr.Userinfo[key]; ok {
				claims[key] = val
			}
		}
	}

	// 動的生成クレーム付与（優先度高）
	// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
	claims["iss"] = identifier.Details.Authorized.Request.Issuer                   // REQUIRED
	claims["sub"] = identifier.Details.Authorized.Subject                          // REQUIRED
	claims["aud"] = identifier.Details.Authorized.Request.Client.Identity.ClientId // REQUIRED
	claims["exp"] = identifier.ExpireAt.Unix()                                     // REQUIRED
	claims["iat"] = now.Unix()                                                     // REQUIRED
	if identifier.Details.Authorized.Request.AuthParams.MaxAge >= 0 || identifier.Details.Authorized.Request.Client.Meta.RequireAuthTime {
		// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
		// When a max_age request is made or when auth_time is requested as an Essential Claim, then this Claim is REQUIRED;
		claims["auth_time"] = identifier.Details.Authorized.AuthTime.Unix() // Conditionally required
	}
	if identifier.Details.Authorized.Request.AuthParams.Nonce != "" {
		// https://openid.net/specs/openid-connect-core-1_0.html#IDToken
		// If present in the Authentication Request,
		// Authorization Servers MUST include a nonce Claim in the ID Token with the Claim Value being the nonce value sent in the Authentication Request.
		claims["nonce"] = identifier.Details.Authorized.Request.AuthParams.Nonce // Conditionally required
	}

	signedAlg := identifier.Details.Authorized.Request.Client.Meta.IdTokenSignedResponseAlg
	if len(code) > 0 {
		// https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken
		// If the ID Token is issued from the Authorization Endpoint with a code,
		// which is the case for the response_type values code id_token and code id_token token, this is REQUIRED;
		cHash := createHash(signedAlg, code)
		if cHash != nil {
			claims["c_hash"] = base64.RawURLEncoding.EncodeToString(cHash[:16]) // Conditionally required
		}
	}
	if len(accessToken) > 0 {
		// https://openid.net/specs/openid-connect-core-1_0.html#ImplicitIDToken
		// If the ID Token is issued from the Authorization Endpoint with an access_token value,
		// which is the case for the response_type value id_token token, this is REQUIRED;
		atHash := createHash(signedAlg, accessToken)
		if atHash != nil {
			claims["at_hash"] = base64.RawURLEncoding.EncodeToString(atHash[:16]) // Conditionally required
		}
	}
	if len(state) > 0 {
		// https://openid.net/specs/openid-financial-api-part-2-1_0.html#id-token-as-detached-signature
		// State hash value.
		// Its value is the base64url encoding of the left-most half of the hash of the octets of the ASCII representation of the state
		sHash := createHash(signedAlg, state)
		if sHash != nil {
			claims["s_hash"] = base64.RawURLEncoding.EncodeToString(sHash[:16]) // Conditionally required
		}
	}
	claims["jti"] = identifier.Details.Identifier

	if iss.Meta.BackchannelLogoutSessionSupported || iss.Meta.FrontchannelLogoutSessionSupported {
		claims["sid"] = identifier.Details.Authorized.SessionId
	}
	return claims, nil
}

func MakeIdTokenIdentifier(authorized model.Authorized, now time.Time) (*model.TokenIdentifier, error) {
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

func MakeAccessTokenIdentifier(authorized model.Authorized, now time.Time, tlsClientCertificate string) (*model.TokenIdentifier, error) {
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

func MakeRefreshTokenIdentifier(authorized model.Authorized, now time.Time) (*model.TokenIdentifier, error) {
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

func VerifyIdToken(ctx context.Context, iss *model.Issuer, idTokenString string) (*jwt.RegisteredClaims, error) {
	out := &jwt.RegisteredClaims{}
	_, err := jwt.NewParser(jwt.WithLeeway(24*time.Hour)).ParseWithClaims(idTokenString, out, keyutil.GetKeyfunc(ctx, iss.Key))
	if err != nil {
		return nil, err
	}
	if out.Issuer != iss.Meta.Issuer {
		return nil, fmt.Errorf("unknown issuer")
	}
	return out, nil
}

func createHash(signedAlg, target string) []byte {
	var h hash.Hash
	switch signedAlg {
	case jwt.SigningMethodRS256.Alg():
		h = jwt.SigningMethodRS256.Hash.New()
	case jwt.SigningMethodRS384.Alg():
		h = jwt.SigningMethodRS384.Hash.New()
	case jwt.SigningMethodRS512.Alg():
		h = jwt.SigningMethodRS512.Hash.New()
	case jwt.SigningMethodPS256.Alg():
		h = jwt.SigningMethodPS256.Hash.New()
	case jwt.SigningMethodPS384.Alg():
		h = jwt.SigningMethodPS384.Hash.New()
	case jwt.SigningMethodPS512.Alg():
		h = jwt.SigningMethodPS512.Hash.New()
	case jwt.SigningMethodES256.Alg():
		h = jwt.SigningMethodES256.Hash.New()
	case jwt.SigningMethodES384.Alg():
		h = jwt.SigningMethodES384.Hash.New()
	case jwt.SigningMethodES512.Alg():
		h = jwt.SigningMethodES512.Hash.New()
	}
	if h == nil {
		return nil
	}
	return h.Sum([]byte(target))
}
