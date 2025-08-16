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
	"errors"
	"fmt"
	"net/http"

	"connectrpc.com/connect"
	"connectrpc.com/otelconnect"
	"github.com/Eigen438/opgo/pkg/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1/oppbconnect"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/Eigen438/opgo/pkg/provider"
	"github.com/Eigen438/opgo/pkg/rest"
	"github.com/go-playground/validator/v10"
)

// RequestInfo holds information about a request.
type RequestInfo struct {
	// RequestId is the unique identifier for the request.
	RequestId string
	// Client contains metadata about the client making the request.
	Client *oppb.ClientMeta
	// AuthParams contains the authorization parameters for the request.
	AuthParams *oppb.AuthorizationParameters
}

// SdkCallbacks defines the callbacks for the SDK.
// It includes methods for retrieving user claims and writing login HTML.
type SdkCallbacks interface {
	// GetUserClaimsCallback retrieves user claims(json string) for a given subject.
	// ctx is the context for the request.
	// subject is the subject for which to retrieve claims.
	GetUserClaimsCallback(ctx context.Context, subject string) (string, error)

	// WriteLoginHtmlCallback writes the login HTML response.
	// info is the RequestInfo containing request details.
	// It returns an http.HandlerFunc that serves the HTML response.
	WriteLoginHtmlCallback(info *RequestInfo) http.HandlerFunc
}

// Sdk defines the interface for the OPGo SDK.
// It provides methods for handling OpenID Connect endpoints, as well as other
// management tasks.
type Sdk interface {
	// DiscoveryEndpoint handles the OpenID Connect discovery endpoint,
	// which provides OpenID Provider configuration information to clients.
	DiscoveryEndpoint(w http.ResponseWriter, r *http.Request)
	// JwksEndpoint handles the JWKS endpoint.
	JwksEndpoint(w http.ResponseWriter, r *http.Request)
	// AuthorizationEndpoint handles the OpenID Connect authorization endpoint.
	AuthorizationEndpoint(w http.ResponseWriter, r *http.Request)
	// TokenEndpoint handles the OpenID Connect token endpoint.
	TokenEndpoint(w http.ResponseWriter, r *http.Request)
	// UserinfoEndpoint handles the OpenID Connect userinfo endpoint.
	UserinfoEndpoint(w http.ResponseWriter, r *http.Request)
	// RegistrationEndpoint handles the OpenID Connect client registration endpoint.
	RegistrationEndpoint(w http.ResponseWriter, r *http.Request)
	// PushedAuthorizationEndpoint handles the OpenID Connect pushed authorization endpoint.
	PushedAuthorizationEndpoint(w http.ResponseWriter, r *http.Request)

	// AuthorizationIssue issues an authorization request.
	// w is the http.ResponseWriter to write the response to.
	// r is the http.Request containing the request data.
	// requestId is the ID of the authorization request.
	// subject is the subject of the authorization request.
	AuthorizationIssue(w http.ResponseWriter, r *http.Request, requestId, subject string)

	// AuthorizationCancel cancels an authorization request.
	// w is the http.ResponseWriter to write the response to.
	// r is the http.Request containing the request data.
	// requestId is the ID of the authorization request to cancel.
	AuthorizationCancel(w http.ResponseWriter, r *http.Request, requestId string)

	// WriteLoginHtml writes the login HTML response.
	// w is the http.ResponseWriter to write the HTML to.
	// r is the http.Request containing the request data.
	// requestId is the ID of the authorization request.
	// callbacks is the SdkCallbacks interface to handle callbacks.
	WriteLoginHtml(w http.ResponseWriter, r *http.Request, requestId string, callbacks SdkCallbacks)

	// GetRequestInfo retrieves information about a request.
	// ctx is the context for the request.
	// requestId is the ID of the request to retrieve information for.
	GetRequestInfo(ctx context.Context, requestId string) (*RequestInfo, error)

	// ClientCreate creates a new client.
	ClientCreate(context.Context, ClientParam) error
	// SessionGroupCreate creates a new session group.
	SessionGroupCreate(context.Context, *oppb.SessionGroupCreateRequest) error
	// KeyRotate rotates the key for a session group.
	KeyRotate(context.Context, string) error
}

type innerSdk struct {
	config   *SdkConfig
	provider oppbconnect.ProviderServiceClient
	rest     oppbconnect.RestServiceClient
}

func (i *innerSdk) Username() string {
	return i.config.IssuerId
}

func (i *innerSdk) Password() string {
	return i.config.IssuerPassword
}

// SdkConfig holds the configuration for the SDK.
type SdkConfig struct {
	// ServerHostPort is the host and port of the semi-hosted gRPC server.
	ServerHostPort string `validate:"required"`
	// IssuerId is the ID of the issuer.
	IssuerId string `validate:"required"`
	// IssuerPassword is the password for the issuer.
	IssuerPassword string `validate:"required"`
	// Callbacks is the SdkCallbacks interface to handle callbacks.
	Callbacks SdkCallbacks `validate:"required"`
}

// NewSemiHostedSdk creates a new SDK for connect semi-hosted gRPC server.
// It takes a config object and returns an Sdk interface and an error.
func NewSemiHostedSdk(config *SdkConfig) (Sdk, error) {
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

// NewHostedSdk creates a new hosted SDK.
// It takes a context, issuer metadata, SDK callbacks, and provider callbacks,
// and returns an Sdk interface and an error.
func NewHostedSdk(
	ctx context.Context,
	issuerMeta *oppb.IssuerMeta,
	sdkCallbacks SdkCallbacks,
	providerCallbacks model.ProviderCallbacks) (Sdk, error) {
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
		config: &SdkConfig{
			IssuerId:       res.Key.Id,
			IssuerPassword: res.Secret.Password,
			Callbacks:      sdkCallbacks,
		},
		provider: provider.NewProvider(providerCallbacks),
		rest:     rest.NewRest(res.Key.Id, res.Secret.Password, true),
	}
	return i, nil
}

func (i *innerSdk) WriteLoginHtml(w http.ResponseWriter, r *http.Request, requestId string, callbacks SdkCallbacks) {
	if callbacks == nil {
		http.Error(w, "callbacks cannot be nil", http.StatusInternalServerError)
		return
	}

	info, err := i.GetRequestInfo(r.Context(), requestId)
	if err != nil {
		http.Error(w, "failed to get write HTML param: "+err.Error(), http.StatusInternalServerError)
		return
	}

	callbacks.WriteLoginHtmlCallback(info).ServeHTTP(w, r)
}

func writeError(w http.ResponseWriter, err error) {
	if connect.CodeOf(err) == connect.CodeUnauthenticated {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(errors.Unwrap(err).Error()))
	} else if connect.CodeOf(err) == connect.CodeInternal {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(errors.Unwrap(err).Error()))
	} else {
		w.WriteHeader(http.StatusServiceUnavailable)
		w.Write([]byte(err.Error()))
	}
}
