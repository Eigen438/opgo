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

package provider

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"log"
	"time"

	"connectrpc.com/authn"
	"connectrpc.com/connect"
	"github.com/Eigen438/dataprovider"
	"github.com/Eigen438/opgo/internal/randutil"
	"github.com/Eigen438/opgo/internal/retryhelper"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
)

func (p *Provider) StartSession(ctx context.Context,
	req *connect.Request[oppb.StartSessionRequest]) (*connect.Response[oppb.StartSessionResponse], error) {
	if iss := auth.CheckIssuer(ctx, req); iss == nil {
		return nil, authn.Errorf("invalid authorization(StartSession)")
	} else {
		// Request情報取得
		r := &model.Request{
			Details: model.RequestDetails{
				Key: &oppb.CommonKey{
					Id: req.Msg.RequestId,
				},
				Client: &model.Client{
					Issuer: iss.Key,
				},
			},
		}
		if err := dataprovider.Get(ctx, r); err != nil {
			log.Printf("Request Get error:%s request:%+v", err.Error(), r)
			return nil, err
		}

		// SessionGroup情報取得
		sg := &model.SessionGroup{
			Key: &oppb.CommonKey{
				Id: r.Details.Client.Attribute.SessionGroupId,
			},
			Issuer: iss.Key,
		}
		if err := dataprovider.Get(ctx, sg); err != nil {
			log.Printf("SessionGroup Get error:%s sessionGroup:%+v", err.Error(), sg)
			return nil, err
		}

		var ses *model.Session
		if err := retryhelper.RetryIfError(ctx, retryCount, func(ctx context.Context) error {
			// セッション情報を生成する
			sessionId, err := randutil.UniqueId()
			if err != nil {
				return err
			}
			ses = model.NewSession(sg, iss, req.Msg.Subject, sessionId, time.Now())
			return dataprovider.Create(ctx, ses)
		}); err != nil {
			log.Printf("Session Create error:%s, req:%v", err.Error(), req)
			return nil, err
		}

		return connect.NewResponse(&oppb.StartSessionResponse{
			Name:  ses.Details.SessionGroup.Key.Id,
			Value: ses.Details.Key.Id,
		}), nil
	}
}

func getSessionState(issuerId, clientId, sessionId string) string {
	// accessToken値が入力されたらat_hashを作成する
	hash := sha256.Sum256([]byte(sessionId + clientId + issuerId))
	return base64.RawURLEncoding.EncodeToString(hash[:])
}
