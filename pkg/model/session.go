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

	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

type SessionDetails struct {
	Key          *oppb.CommonKey
	Issuer       *oppb.CommonKey
	SessionGroup SessionGroup
	Meta         *oppb.SessonMeta
}

type Session struct {
	CreateAt time.Time
	Details  SessionDetails
	ExpireAt time.Time
}

func (s Session) Path(_ context.Context) string {
	return fmt.Sprintf("opgo/%s/issuers/%s/sessions/%s",
		version,
		s.Details.Issuer.Id,
		s.Details.Key.Id)
}

func (s Session) ExpireAtUnix(_ context.Context) int64 {
	return s.ExpireAt.Unix()
}

func NewSession(sg *SessionGroup, iss *Issuer, subject string, sessionId string, authTime time.Time) *Session {
	return &Session{
		CreateAt: authTime,
		Details: SessionDetails{
			Key: &oppb.CommonKey{
				Id: sessionId,
			},
			Issuer:       iss.Key,
			SessionGroup: *sg,
			Meta: &oppb.SessonMeta{
				Subject: subject,
			},
		},
		ExpireAt: authTime.Add(time.Duration(sg.Attribute.AuthorizeSessionLifetimeSeconds) * time.Second),
	}
}
