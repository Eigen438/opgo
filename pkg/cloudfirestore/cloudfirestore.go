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

package cloudfirestore

import (
	"context"

	"github.com/Eigen438/cloudfirestore"
	"github.com/Eigen438/opgo/pkg/provider"
	"google.golang.org/api/option"
)

type CloudFirestore interface {
	cloudfirestore.CloudFirestore
	provider.ProviderCallbacks
}

func NewWithDatabase(ctx context.Context, databaseID string, opts ...option.ClientOption) (CloudFirestore, error) {
	c, err := cloudfirestore.NewWithDatabase(ctx, databaseID, opts...)
	if err != nil {
		return nil, err
	}
	m := inner{
		CloudFirestore: c,
	}
	return &m, nil
}

type inner struct {
	cloudfirestore.CloudFirestore
}

func (inner) DeleteTokensWithRequetId(ctx context.Context, issuerId, requestId string) error {
	q := cloudfirestore.Collection("peridot/v1/issuers/"+issuerId+"/tokens").Where("RequestId", "==", requestId)
	_, err := cloudfirestore.DeleteWithQuery(ctx, q, 10)
	return err
}

func (inner) DeleteTokensWithSessionId(ctx context.Context, issuerId, sessionId string) error {
	q := cloudfirestore.Collection("peridot/v1/issuers/"+issuerId+"/tokens").Where("SessionId", "==", sessionId)
	_, err := cloudfirestore.DeleteWithQuery(ctx, q, 10)
	return err
}
