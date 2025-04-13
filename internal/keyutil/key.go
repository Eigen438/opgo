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

package keyutil

import (
	"context"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"fmt"
	"time"

	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

const (
	RSA256   = "rsa256"
	RSA384   = "rsa384"
	RSA512   = "rsa512"
	ECDSA256 = "ecdsa256"
	ECDSA384 = "ecdsa384"
	ECDSA512 = "ecdsa512"
)

var mappedKeyType = map[string]string{
	jwt.SigningMethodRS256.Alg(): RSA256,
	jwt.SigningMethodRS384.Alg(): RSA384,
	jwt.SigningMethodRS512.Alg(): RSA512,
	jwt.SigningMethodPS256.Alg(): RSA256,
	jwt.SigningMethodPS384.Alg(): RSA384,
	jwt.SigningMethodPS512.Alg(): RSA512,
	jwt.SigningMethodES256.Alg(): ECDSA256,
	jwt.SigningMethodES384.Alg(): ECDSA384,
	jwt.SigningMethodES512.Alg(): ECDSA512,
}

func KeyType(algorithm string) (string, bool) {
	keyType, ok := mappedKeyType[algorithm]
	return keyType, ok
}

func SigningAlgValueSupported() []string {
	return []string{
		jwt.SigningMethodNone.Alg(),
		jwt.SigningMethodRS256.Alg(),
		jwt.SigningMethodRS384.Alg(),
		jwt.SigningMethodRS512.Alg(),
		jwt.SigningMethodPS256.Alg(),
		jwt.SigningMethodPS384.Alg(),
		jwt.SigningMethodPS512.Alg(),
		jwt.SigningMethodES256.Alg(),
		jwt.SigningMethodES384.Alg(),
		jwt.SigningMethodES512.Alg(),
	}
}

func GetPublicKey(k *model.Key) (any, error) {
	switch k.KeyType {
	case RSA256, RSA384, RSA512:
		pk, err := x509.ParsePKCS8PrivateKey(k.SerializedKey)
		if err != nil {
			return nil, err
		}
		return &pk.(*rsa.PrivateKey).PublicKey, nil
	case ECDSA256, ECDSA384, ECDSA512:
		pk, err := x509.ParsePKCS8PrivateKey(k.SerializedKey)
		if err != nil {
			return nil, err
		}
		return &pk.(*ecdsa.PrivateKey).PublicKey, nil
	}
	return nil, fmt.Errorf("unsupported keyType:" + k.KeyType)
}

func GetPrivateKey(ctx context.Context, iss *model.Issuer, keyType string) (any, error) {
	kid, ok := iss.Resources.KeyMap[keyType]
	if !ok {
		return nil, fmt.Errorf("key not found")
	}
	key := &model.Key{
		Key:     &oppb.CommonKey{Id: kid},
		Issuer:  iss.Key,
		KeyType: keyType,
	}
	if err := dataprovider.Get(ctx, key); err != nil {
		return nil, err
	}

	return x509.ParsePKCS8PrivateKey(key.SerializedKey)
}

func GeneratePrivateKey(issuer *oppb.CommonKey, keyType string, now time.Time) (*model.Key, error) {
	privateKey, err := KeyGen(keyType)
	if err != nil {
		return nil, err
	}
	der, err := x509.MarshalPKCS8PrivateKey(privateKey)
	if err != nil {
		return nil, err
	}

	uid, err := randutil.UniqueId()
	if err != nil {
		return nil, err
	}

	return &model.Key{
		CreateAt: now,
		Key: &oppb.CommonKey{
			Id: uid,
		},
		Issuer:        issuer,
		KeyType:       keyType,
		SerializedKey: der,
	}, nil
}

// get key for parsing jwt
func GetKeyfunc(ctx context.Context, issuer *oppb.CommonKey) jwt.Keyfunc {
	return func(t *jwt.Token) (interface{}, error) {
		if t.Header["alg"] == jwt.SigningMethodNone.Alg() {
			return jwt.UnsafeAllowNoneSignatureType, nil
		}
		keyType, ok := KeyType(t.Header["alg"].(string))
		if !ok {
			return nil, fmt.Errorf("unknown algorithm")
		}

		k := &model.Key{
			Key: &oppb.CommonKey{
				Id: t.Header["kid"].(string),
			},
			Issuer:  issuer,
			KeyType: keyType,
		}
		if err := dataprovider.Get(ctx, k); err != nil {
			return nil, err
		}
		return GetPublicKey(k)
	}
}

type KeyInfo struct {
	Method jwt.SigningMethod
	Key    any
	Kid    string
}

func GetKeyInfo(ctx context.Context, iss *model.Issuer, algorithm string) (*KeyInfo, error) {
	method := jwt.GetSigningMethod(algorithm)

	if algorithm == jwt.SigningMethodNone.Alg() {
		return &KeyInfo{
			Method: method,
			Key:    nil,
			Kid:    "",
		}, nil
	}

	keyType, ok := KeyType(algorithm)
	if !ok {
		return nil, fmt.Errorf("unknown algorithm:" + algorithm)
	}

	kid, ok := iss.Resources.KeyMap[keyType]
	if !ok {
		return nil, fmt.Errorf("key not found")
	}

	pk, err := GetPrivateKey(ctx, iss, keyType)
	if err != nil {
		return nil, err
	}

	return &KeyInfo{
		Method: method,
		Key:    pk,
		Kid:    kid,
	}, nil
}

func curve(keyType string) elliptic.Curve {
	switch keyType {
	case ECDSA256:
		return elliptic.P256()
	case ECDSA384:
		return elliptic.P384()
	case ECDSA512:
		return elliptic.P521()
	}
	return nil
}

func bits(keyType string) int {
	switch keyType {
	case RSA256:
		return 2048
	case RSA384:
		return 3072
	case RSA512:
		return 4096
	}
	return 0
}

func KeyGen(keyType string) (any, error) {
	switch keyType {
	case RSA256, RSA384, RSA512:
		return rsa.GenerateKey(rand.Reader, bits(keyType))
	case ECDSA256, ECDSA384, ECDSA512:
		return ecdsa.GenerateKey(curve(keyType), rand.Reader)
	}
	return nil, fmt.Errorf("unknown algorithm")
}
