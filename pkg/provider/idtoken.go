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
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
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
	if identifier.Details.Authorized.Request.AuthParams.MaxAge != "" {
		// 認証要求時にmax_ageパラメータが付与された場合に作成する
		claims["auth_time"] = identifier.Details.Authorized.AuthTime.Unix() // 条件付きREQUIRED
	}
	if identifier.Details.Authorized.Request.AuthParams.Nonce != "" {
		// nonceパラメータが存在する場合は作成する
		claims["nonce"] = identifier.Details.Authorized.Request.AuthParams.Nonce // 条件付きREQUIRED
	}
	claims["jti"] = identifier.Details.Identifier
	if len(code) > 0 {
		// code値が入力されたらc_hashを作成する
		hash := sha256.Sum256([]byte(code))
		claims["c_hash"] = base64.RawURLEncoding.EncodeToString(hash[:16]) // 条件付きREQUIRED
	}
	if len(accessToken) > 0 {
		// accessToken値が入力されたらat_hashを作成する
		hash := sha256.Sum256([]byte(accessToken))
		claims["at_hash"] = base64.RawURLEncoding.EncodeToString(hash[:16]) // 条件付きREQUIRED
	}
	if len(state) > 0 {
		// state値が入力されたらs_hashを作成する
		hash := sha256.Sum256([]byte(state))
		claims["s_hash"] = base64.RawURLEncoding.EncodeToString(hash[:16]) // 条件付きREQUIRED
	}

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
