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

package inmemstore

import (
	"context"
	"fmt"
	"time"

	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/inmemstore"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

type InmemStore interface {
	inmemstore.InmemStore
	model.ProviderCallbacks
}

func New(cleaningWindow time.Duration) InmemStore {
	m := inner{
		InmemStore: inmemstore.New(cleaningWindow),
	}
	return &m
}

type inner struct {
	inmemstore.InmemStore
}

func (inner) DeleteTokensWithRequetId(ctx context.Context, issuerId, requestId string) error {
	// request_id base link
	link := &tokenIdentifierLink{
		IssuerId: issuerId,
		Key:      requestId,
		Kind:     "request",
		List:     []string{},
	}
	if err := dataprovider.Get(ctx, link); err == nil {
		link.DeleteTokens(ctx)
	}
	return nil
}

func (inner) DeleteTokensWithSessionId(ctx context.Context, issuerId, sessionId string) error {
	// request_id base link
	link := &tokenIdentifierLink{
		IssuerId: issuerId,
		Key:      sessionId,
		Kind:     "session",
		List:     []string{},
	}
	if err := dataprovider.Get(ctx, link); err == nil {
		link.DeleteTokens(ctx)
	}
	return nil
}

func TokenWriteInterceptor(ctx context.Context, data any) {
	if p, ok := data.(*model.TokenIdentifier); ok {
		// request_id base link
		requestLink := &tokenIdentifierLink{
			IssuerId: p.Details.Authorized.Request.Client.Issuer.Id,
			Key:      p.Details.Authorized.Request.Key.Id,
			Kind:     "request",
			List:     []string{},
		}
		_ = dataprovider.Get(ctx, requestLink)
		requestLink.List = append(requestLink.List, p.Details.Identifier)
		requestLink.ExpireAt = time.Now().Add(24 * time.Hour)
		_ = dataprovider.Set(ctx, requestLink)

		// session_id base link
		sessionLink := &tokenIdentifierLink{
			IssuerId: p.Details.Authorized.Request.Client.Issuer.Id,
			Key:      p.Details.Authorized.SessionId,
			Kind:     "session",
			List:     []string{},
		}
		_ = dataprovider.Get(ctx, sessionLink)
		sessionLink.List = append(sessionLink.List, p.Details.Identifier)
		sessionLink.ExpireAt = time.Now().Add(24 * time.Hour)
		_ = dataprovider.Set(ctx, sessionLink)
	}
}

type tokenIdentifierLink struct {
	IssuerId string
	Key      string
	Kind     string
	List     []string
	ExpireAt time.Time
}

func (t *tokenIdentifierLink) Path(_ context.Context) string {
	return fmt.Sprintf("opgo/%s/issuers/%s/tokensList/%s/kind/%s", model.GetVersion(), t.IssuerId, t.Key, t.Kind)
}

func (t *tokenIdentifierLink) ExpireAtUnix(_ context.Context) int64 {
	return t.ExpireAt.Unix()
}

func (t *tokenIdentifierLink) DeleteTokens(ctx context.Context) {
	for _, tokenIdentifierId := range t.List {
		tokenIdentifier := &model.TokenIdentifier{
			Details: model.TokenIdentifierDetails{
				Identifier: tokenIdentifierId,
				Authorized: model.Authorized{
					Request: model.RequestDetails{
						Client: &model.Client{
							Issuer: &oppb.CommonKey{
								Id: t.IssuerId,
							},
						},
					},
				},
			},
		}
		_ = dataprovider.Delete(ctx, tokenIdentifier)
	}
}
