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
	"context"
	"fmt"
	"net/url"
	"time"

	"github.com/Eigen438/opgo/internal/convert"
	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/MicahParks/jwkset"
	"github.com/MicahParks/keyfunc/v3"
	"github.com/golang-jwt/jwt/v5"
)

type Client struct {
	Identity  *oppb.ClientIdentity
	Issuer    *oppb.CommonKey
	Meta      *oppb.ClientMeta
	Attribute *oppb.ClientAttribute
}

func (c *Client) Path(_ context.Context) string {
	return fmt.Sprintf("opgo/%s/issuers/%s/clients/%s",
		version,
		c.Issuer.Id,
		c.Identity.ClientId)
}

// get key for parsing jwt
func (c *Client) GetKeyfunc(ctx context.Context) jwt.Keyfunc {
	return func(t *jwt.Token) (interface{}, error) {
		if t.Header["alg"] == "none" {
			return jwt.UnsafeAllowNoneSignatureType, nil
		} else if len(c.Meta.JwksUri) > 0 {
			u, err := url.Parse(c.Meta.JwksUri)
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
		} else if len(c.Meta.Jwks.Keys) == 1 {
			keys := convert.JWKMarchalsFromKeys(c.Meta.Jwks.Keys)
			jwk, err := jwkset.NewJWKFromMarshal(keys[0], jwkset.JWKMarshalOptions{
				Private: false,
			}, jwkset.JWKValidateOptions{})
			if err != nil {
				return nil, err
			}
			return jwk.Key(), nil
		} else {
			var jwks jwkset.JWKSMarshal
			jwks.Keys = convert.JWKMarchalsFromKeys(c.Meta.Jwks.Keys)
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
	}
}

func MakeDefaultClient(iss *Issuer, clientId string, sessionGroupId string, now time.Time) *Client {
	return &Client{
		Identity: &oppb.ClientIdentity{
			ClientId:                clientId,
			ClientSecret:            "secret",
			RegistrationAccessToken: "",
			RegistrationClientUri:   "",
			ClientIdIssuedAt:        time.Now().Unix(),
			ClientSecretExpiresAt:   0,
		},
		Issuer: iss.Key,
		Meta: &oppb.ClientMeta{
			AuthorizationSignedResponseAlg: "RS256",
			GrantTypes: []string{
				oauth.GrantTypeAuthorizationCode,
				oauth.GrantTypeRefreshToken,
			},
			IdTokenSignedResponseAlg: "RS256",
			RedirectUris:             []string{},
			ResponseTypes:            []string{oauth.ResponseTypeCode},
			SubjectType:              "public",
			TokenEndpointAuthMethod:  oauth.TokenEndpointAuthMethodClientSecretPost,
		},
		Attribute: &oppb.ClientAttribute{
			AccessTokenLifetimeSeconds:       3600,
			AuthorizationCodeLifetimeSeconds: 60,
			IdTokenLifetimeSeconds:           3600,
			RefreshTokenLifetimeSeconds:      7200,
			RequestLifetimeSeconds:           86400,
			SessionGroupId:                   sessionGroupId,
			//
			Profile:               oppb.EnumClientProfile_ENUM_CLIENT_PROFILE_UNSPECIFIED,
			TlsClientCertificates: []string{},
		},
	}
}
