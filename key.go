package opgo

import (
	"context"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

func (i *innerSdk) KeyRotate(ctx context.Context, keyType string) error {
	req := connect.NewRequest(&oppb.KeyRotateRequest{
		KeyType: keyType,
	})
	auth.SetAuth(req, i)
	_, err := i.rest.KeyRotate(ctx, req)
	if err != nil {
		return err
	}
	return nil
}
