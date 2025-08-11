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

package opgo

import (
	"net/http"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/httphelper"
)

type IssueRequest struct {
	RequestId string
	SessionId string
	Subject   string
}

/*
func (i *innerSdk) AuthorizationIssue(ctx context.Context, param *IssueRequest) (*oppb.AuthorizationIssueResponse, error) {
	claims, err := i.config.Callbacks.GetUserClaimsCallback(ctx, param.Subject)
	if err != nil {
		return nil, err
	}
	req := connect.NewRequest(&oppb.AuthorizationIssueRequest{
		RequestId: param.RequestId,
		SessionId: param.SessionId,
		Subject:   param.Subject,
		Claims:    claims,
	})
	auth.SetAuth(req, i)
	res, err := i.provider.AuthorizationIssue(ctx, req)
	if err != nil {
		return nil, err
	}
	return res.Msg, nil
}
*/

func (i *innerSdk) AuthorizationIssue(w http.ResponseWriter, r *http.Request, requestId, subject string) error {
	return i.authorizationIssue(w, r, requestId, "", subject)
}

func (i *innerSdk) authorizationIssue(w http.ResponseWriter, r *http.Request, requestId, sessionId, subject string) error {
	ctx := r.Context()

	claims, err := i.config.Callbacks.GetUserClaimsCallback(ctx, subject)
	if err != nil {
		return err
	}

	if sessionId == "" {
		// Session create
		err, sessionId = i.startSession(w, r, requestId, subject)
		if err != nil {
			return err
		}
	}

	req := connect.NewRequest(&oppb.AuthorizationIssueRequest{
		RequestId: requestId,
		SessionId: sessionId,
		Subject:   subject,
		Claims:    claims,
	})
	auth.SetAuth(req, i)
	res, err := i.provider.AuthorizationIssue(ctx, req)
	if err != nil {
		return err
	}
	if out := res.Msg.GetRedirect(); out != nil {
		http.Redirect(w, r, out.Url, http.StatusFound)
	} else if out := res.Msg.GetHtml(); out != nil {
		for k, v := range httphelper.DefaultHtmlHeader() {
			w.Header().Set(k, v)
		}
		w.Write([]byte(out.Content))
	}

	return nil
}
