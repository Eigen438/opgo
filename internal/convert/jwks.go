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

package convert

import (
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/MicahParks/jwkset"
)

func JWKMarchalsFromKeys(keys []*oppb.Jwk) []jwkset.JWKMarshal {
	res := []jwkset.JWKMarshal{}
	for _, org := range keys {
		keyOps := []jwkset.KEYOPS{}
		for _, v := range org.KeyOps {
			keyOps = append(keyOps, jwkset.KEYOPS(v))
		}
		others := []jwkset.OtherPrimes{}
		for _, v := range org.Oth {
			otherPrime := jwkset.OtherPrimes{
				R: v.R,
				D: v.D,
				T: v.T,
			}
			others = append(others, otherPrime)
		}
		jwk := jwkset.JWKMarshal{
			KTY:     jwkset.KTY(org.Kty),
			USE:     jwkset.USE(org.Use),
			KEYOPS:  keyOps,
			ALG:     jwkset.ALG(org.Alg),
			KID:     org.Kid,
			X5U:     org.X5U,
			X5T:     org.X5T,
			X5TS256: org.X5TS256,
			CRV:     jwkset.CRV(org.Crv),
			X:       org.X,
			Y:       org.Y,
			D:       org.D,
			N:       org.N,
			E:       org.E,
			P:       org.P,
			Q:       org.Q,
			DP:      org.Dp,
			DQ:      org.Dq,
			QI:      org.Qi,
			OTH:     others,
			K:       org.K,
		}
		res = append(res, jwk)
	}
	return res
}

func JwksFromJWKMarshals(keys []jwkset.JWKMarshal) []*oppb.Jwk {
	res := []*oppb.Jwk{}
	for _, org := range keys {
		keyOps := []string{}
		for _, v := range org.KEYOPS {
			keyOps = append(keyOps, string(v))
		}
		others := []*oppb.JwkOtherPrime{}
		for _, v := range org.OTH {
			other := &oppb.JwkOtherPrime{
				R: v.R,
				D: v.D,
				T: v.T,
			}
			others = append(others, other)
		}
		jwk := &oppb.Jwk{
			Kty:     string(org.KTY),
			Use:     string(org.USE),
			KeyOps:  keyOps,
			Alg:     string(org.ALG),
			Kid:     org.KID,
			X5U:     org.X5U,
			X5T:     org.X5T,
			X5TS256: org.X5TS256,
			Crv:     string(org.CRV),
			X:       org.X,
			Y:       org.Y,
			D:       org.D,
			N:       org.N,
			E:       org.E,
			P:       org.P,
			Q:       org.Q,
			Dp:      org.DP,
			Dq:      org.DQ,
			Qi:      org.QI,
			Oth:     others,
			K:       org.K,
		}
		res = append(res, jwk)
	}
	return res
}
