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
	"encoding/json"
	"fmt"
	"time"

	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

type RequestDetails struct {
	Key           *oppb.CommonKey
	Client        *Client
	AuthParams    *oppb.AuthorizationParameters
	Issuer        string
	RequestClaims []byte
}

type Request struct {
	CreateAt time.Time
	Details  RequestDetails
	ExpireAt time.Time
}

func GetRequestCollectionName(issuerId string) string {
	return fmt.Sprintf("opgo/%s/issuers/%s/requests", version, issuerId)
}

func (r Request) Path(_ context.Context) string {
	return GetRequestCollectionName(r.Details.Client.Issuer.Id) + "/" + r.Details.Key.Id
}

func (r Request) ExpireAtUnix(_ context.Context) int64 {
	return r.ExpireAt.Unix()
}

func NewRequest(
	id string,
	issuer string,
	client *Client,
	authParam *oppb.AuthorizationParameters,
	now time.Time) *Request {
	// IDToken,Userinfoでどのようなクレームを期待されているかの情報をここで作成している
	cr := MakeClaimRulesFromDefaultScope(authParam.Scopes)
	if len(authParam.AcrValues) > 0 {
		cr.Append(NewAcrClaimRules(authParam.AcrValues))
	}
	if len(authParam.Claims) > 0 {
		cp := NewClaimRules()
		_ = json.Unmarshal([]byte(authParam.Claims), cp)
		cr.Append(cp)
	}
	crJson, _ := json.Marshal(cr)
	return &Request{
		Details: RequestDetails{
			Key: &oppb.CommonKey{
				Id: id,
			},
			Client:        client,
			AuthParams:    authParam,
			Issuer:        issuer,
			RequestClaims: crJson,
		},
		CreateAt: now,
		ExpireAt: now.Add(time.Duration(client.Attribute.RequestLifetimeSeconds) * time.Second),
	}
}
