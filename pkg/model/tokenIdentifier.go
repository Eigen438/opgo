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
	"time"
)

type TokenType string

const (
	TokenTypeIdToken      TokenType = "id"
	TokenTypeAccessToken  TokenType = "access"
	TokenTypeRefreshToken TokenType = "refresh"
)

type TokenIdentifierDetails struct {
	Authorized           Authorized
	Identifier           string
	Type                 TokenType
	TlsClientCertificate string
}

type TokenIdentifier struct {
	CreateAt  time.Time
	Details   TokenIdentifierDetails
	ExpireAt  time.Time
	RequestId string // delete key
	SessionId string // delete key
}

func (t TokenIdentifier) Path(_ context.Context) string {
	return fmt.Sprintf("opgo/v1/issuers/%s/tokens/%s",
		t.Details.Authorized.Request.Client.Issuer.Id,
		t.Details.Identifier)
}

func (t TokenIdentifier) ExpireAtUnix(_ context.Context) int64 {
	return t.ExpireAt.Unix()
}
