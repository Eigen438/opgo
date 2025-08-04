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
	"fmt"
	"log"

	apiv1 "cloud.google.com/go/firestore/apiv1/admin"
	"cloud.google.com/go/firestore/apiv1/admin/adminpb"
	"github.com/Eigen438/cloudfirestore"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/Eigen438/opgo/pkg/provider"
	"google.golang.org/api/option"
)

type CloudFirestore interface {
	cloudfirestore.CloudFirestore
	provider.ProviderCallbacks
}

func NewWithDatabase(ctx context.Context, projectID, databaseID string, opts ...option.ClientOption) (CloudFirestore, error) {
	c, err := cloudfirestore.NewWithDatabase(ctx, databaseID, opts...)
	if err != nil {
		return nil, err
	}
	m := inner{
		CloudFirestore: c,
	}
	// setup ttl
	go construction(ctx, projectID, databaseID)
	return &m, nil
}

type inner struct {
	cloudfirestore.CloudFirestore
}

func (i *inner) DeleteTokensWithRequetId(ctx context.Context, issuerId, requestId string) error {
	q := i.CloudFirestore.Collection(model.GetTokenIdentiferCollectionName(issuerId)).Where("RequestId", "==", requestId)
	_, err := i.CloudFirestore.DeleteWithQuery(ctx, q, 10)
	return err
}

func (i *inner) DeleteTokensWithSessionId(ctx context.Context, issuerId, sessionId string) error {
	q := i.CloudFirestore.Collection(model.GetTokenIdentiferCollectionName(issuerId)).Where("SessionId", "==", sessionId)
	_, err := i.CloudFirestore.DeleteWithQuery(ctx, q, 10)
	return err
}

func construction(ctx context.Context, projectID, databaseID string) {
	admin, err := apiv1.NewFirestoreAdminClient(ctx)
	if err != nil {
		log.Printf("[BACKEND_ERROR] NewFirestoreAdminClient:%v", err)
		return
	}

	// SetupTTL
	setupTTL(ctx, admin, projectID, databaseID, "authorizationCodes", "ExpireAt")
	setupTTL(ctx, admin, projectID, databaseID, "requests", "ExpireAt")
	setupTTL(ctx, admin, projectID, databaseID, "sessions", "ExpireAt")
	setupTTL(ctx, admin, projectID, databaseID, "tokens", "ExpireAt")
	setupTTL(ctx, admin, projectID, databaseID, "pars", "ExpireAt")
}

func setupTTL(ctx context.Context, admin *apiv1.FirestoreAdminClient, projectID, databaseID, collectionId, fieldName string) {
	name := fmt.Sprintf("projects/%s/databases/%s/collectionGroups/%s/fields/%s", projectID, databaseID, collectionId, fieldName)
	// Create a new TTL with the specified field
	req := &adminpb.GetFieldRequest{
		Name: name,
	}
	field, _ := admin.GetField(ctx, req)
	if field == nil {
		// Create a new TTL
		field = &adminpb.Field{
			Name: name,
			TtlConfig: &adminpb.Field_TtlConfig{
				State: adminpb.Field_TtlConfig_ACTIVE,
			},
		}
	} else {
		// Update the existing TTL to expire
		field.TtlConfig = &adminpb.Field_TtlConfig{
			State: adminpb.Field_TtlConfig_ACTIVE,
		}
	}
	admin.UpdateField(ctx, &adminpb.UpdateFieldRequest{
		Field: field,
	})
}
