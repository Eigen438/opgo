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
	"context"
	"fmt"
	"net/http"

	"connectrpc.com/connect"
	"connectrpc.com/otelconnect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1/oppbconnect"
	"github.com/Eigen438/opgo/pkg/provider"
	"github.com/Eigen438/opgo/pkg/rest"
	"github.com/go-playground/validator/v10"
)

type WriteHtmlParam struct {
	RequestId  string
	Client     *oppb.ClientMeta
	AuthParams *oppb.AuthorizationParameters
}

type SdkCallbacks interface {
	GetUserClaimsCallback(ctx context.Context, subject string) (string, error)
	WriteLoginHtmlCallback(param *WriteHtmlParam) http.HandlerFunc
}

type Sdk interface {
	ServeMux(*Paths) *http.ServeMux

	// AuthorizationIssue issues an authorization request.
	// It returns an error if the request fails.
	// w is the http.ResponseWriter to write the response to.
	// r is the http.Request containing the request data.
	// requestId is the ID of the authorization request.
	// subject is the subject of the authorization request.
	AuthorizationIssue(w http.ResponseWriter, r *http.Request, requestId, subject string) error

	// AuthorizationCancel cancels an authorization request.
	// It returns an error if the cancellation fails.
	// w is the http.ResponseWriter to write the response to.
	// r is the http.Request containing the request data.
	// requestId is the ID of the authorization request to cancel.
	AuthorizationCancel(w http.ResponseWriter, r *http.Request, requestId string) error
	GetWriteHtmlParam(context.Context, string) (*WriteHtmlParam, error)
	//
	ClientCreate(context.Context, ClientParam) error
	SessionGroupCreate(context.Context, *oppb.SessionGroupCreateRequest) error
	KeyRotate(context.Context, string) error
}

type innerSdk struct {
	config   *Config
	provider oppbconnect.ProviderServiceClient
	rest     oppbconnect.RestServiceClient
}

func (i *innerSdk) Username() string {
	return i.config.IssuerId
}

func (i *innerSdk) Password() string {
	return i.config.IssuerPassword
}

type Config struct {
	ServerHostPort string       `validate:"required"`
	IssuerId       string       `validate:"required"`
	IssuerPassword string       `validate:"required"`
	Callbacks      SdkCallbacks `validate:"required"`
}

func NewSemiHostedSdk(config *Config) (Sdk, error) {
	v := validator.New()
	if err := v.Struct(config); err != nil {
		return nil, err
	}

	otelInterceptor, err := otelconnect.NewInterceptor()
	if err != nil {
		return nil, err
	}

	providerClient := oppbconnect.NewProviderServiceClient(
		http.DefaultClient,
		config.ServerHostPort,
		connect.WithGRPC(),
		connect.WithInterceptors(otelInterceptor),
	)
	restClient := oppbconnect.NewRestServiceClient(
		http.DefaultClient,
		config.ServerHostPort,
		connect.WithGRPC(),
		connect.WithInterceptors(otelInterceptor),
	)

	i := &innerSdk{
		config:   config,
		provider: providerClient,
		rest:     restClient,
	}
	return i, nil
}

func NewHostedSdk(
	ctx context.Context,
	issuerMeta *oppb.IssuerMeta,
	sdkCallbacks SdkCallbacks,
	providerCallbacks provider.ProviderCallbacks) (Sdk, error) {
	if issuerMeta == nil {
		return nil, fmt.Errorf("parameter issuerMeta is required")
	}
	if sdkCallbacks == nil {
		return nil, fmt.Errorf("parameter sdkCallbacks is required")
	}
	if providerCallbacks == nil {
		return nil, fmt.Errorf("parameter providerCallbacks is required")
	}

	localSdkUser := "local_sdk_user" // dummy user
	localSdkPass := "local_sdk_pass" // dummy pass
	tempAuth := auth.NewAuthInfo(localSdkUser, localSdkPass)
	res, err := issuerCreate(ctx, tempAuth, issuerCreateParam{
		Meta:      issuerMeta,
		Attribute: &oppb.IssuerAttribute{},
	})
	if err != nil {
		return nil, err
	}

	i := &innerSdk{
		config: &Config{
			IssuerId:       res.Key.Id,
			IssuerPassword: res.Secret.Password,
			Callbacks:      sdkCallbacks,
		},
		provider: provider.NewProvider(providerCallbacks),
		rest:     rest.NewRest(res.Key.Id, res.Secret.Password, true),
	}
	return i, nil
}
