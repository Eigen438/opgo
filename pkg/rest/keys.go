package rest

import (
	"context"
	"time"

	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/internal/keyutil"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

func (rest *Rest) KeyRotate(ctx context.Context,
	req *connect.Request[oppb.KeyRotateRequest]) (*connect.Response[oppb.KeyRotateResponse], error) {
	if iss, err := auth.GetIssuer(ctx, req); err != nil {
		return nil, err
	} else {
		key, err := keyutil.GeneratePrivateKey(iss.Key, req.Msg.KeyType, time.Now())
		if err != nil {
			return nil, err
		}
		if err := dataprovider.Create(ctx, key); err != nil {
			return nil, err
		}

		kr := iss.Resources.KeyMap[req.Msg.KeyType]
		if kr == nil {
			kr = &oppb.KeyRing{
				CurrentKeyId: key.Key.Id,
			}
			iss.Resources.KeyMap[req.Msg.KeyType] = kr
		} else {
			kr.ReservedKeyIds = append([]string{kr.CurrentKeyId}, kr.ReservedKeyIds...)
			// Update the current key ID
			kr.CurrentKeyId = key.Key.Id
		}
		if err := dataprovider.Set(ctx, iss); err != nil {
			return nil, err
		}
		return connect.NewResponse(&oppb.KeyRotateResponse{}), nil
	}
}
