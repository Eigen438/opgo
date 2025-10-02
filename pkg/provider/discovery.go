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
	"encoding/json"
	"fmt"

	"connectrpc.com/connect"
	"github.com/Eigen438/opgo/internal/auth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

type configration struct {
	// https://tex2e.github.io/rfc-translater/html/rfc8414.html#2--Authorization-Server-Metadata
	// issuer is Required
	Issuer string `json:"issuer"`
	// authorization_endpoint is Required
	AuthorizationEndpoint string `json:"authorization_endpoint"`
	// token_endpoint is Required
	TokenEndpoint string `json:"token_endpoint"`
	// jwks_uri is Required
	JwksUri              string   `json:"jwks_uri"`
	RegistrationEndpoint string   `json:"registration_endpoint,omitempty"`
	ScopesSupported      []string `json:"scopes_supported,omitempty"`
	// response_types_supported is Required
	ResponseTypesSupported                             []string `json:"response_types_supported"`
	ResponseModesSupported                             []string `json:"response_modes_supported,omitempty"`
	GrantTypesSupported                                []string `json:"grant_types_supported,omitempty"`
	TokenEndpointAuthMethodsSupported                  []string `json:"token_endpoint_auth_methods_supported,omitempty"`
	TokenEndpointAuthSigningAlgValuesSupported         []string `json:"token_endpoint_auth_signing_alg_values_supported,omitempty"`
	ServiceDocumentation                               string   `json:"service_documentation,omitempty"`
	UiLocalesSupported                                 []string `json:"ui_locales_supported,omitempty"`
	OpPolicyUri                                        string   `json:"op_policy_uri,omitempty"`
	OpTosUri                                           string   `json:"op_tos_uri,omitempty"`
	RevocationEndpoint                                 string   `json:"revocation_endpoint,omitempty"`
	RevocationEndpointAuthMethodsSupported             []string `json:"revocation_endpoint_auth_methods_supported,omitempty"`
	RevocationEndpointAuthSigningAlgValuesSupported    []string `json:"revocation_endpoint_auth_signing_alg_values_supported,omitempty"`
	IntrospectionEndpoint                              string   `json:"introspection_endpoint,omitempty"`
	IntrospectionEndpointAuthMethodsSupported          []string `json:"introspection_endpoint_auth_methods_supported,omitempty"`
	IntrospectionEndpointAuthSigningAlgValuesSupported []string `json:"introspection_endpoint_auth_signing_alg_values_supported,omitempty"`
	CodeChallengeMethodsSupported                      []string `json:"code_challenge_methods_supported,omitempty"`
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	UserinfoEndpoint   string   `json:"userinfo_endpoint,omitempty"`
	AcrValuesSupported []string `json:"acr_values_supported,omitempty"`
	// subject_types_supported
	// REQUIRED. JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
	SubjectTypesSupported []string `json:"subject_types_supported"`
	// id_token_signing_alg_values_supported
	// REQUIRED. JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode
	// the Claims in a JWT [JWT]. The algorithm RS256 MUST be included.
	IdTokenSigningAlgValuesSupported          []string `json:"id_token_signing_alg_values_supported"`
	IdTokenEncryptionAlgValuesSupported       []string `json:"id_token_encryption_alg_values_supported,omitempty"`
	IdTokenEncryptionEncValuesSupported       []string `json:"id_token_encryption_enc_values_supported,omitempty"`
	UserinfoSigningAlgValuesSupported         []string `json:"userinfo_signing_alg_values_supported,omitempty"`
	UserinfoEncryptionAlgValuesSupported      []string `json:"userinfo_encryption_alg_values_supported,omitempty"`
	UserinfoEncryptionEncValuesSupported      []string `json:"userinfo_encryption_enc_values_supported,omitempty"`
	RequestObjectSigningAlgValuesSupported    []string `json:"request_object_signing_alg_values_supported,omitempty"`
	RequestObjectEncryptionAlgValuesSupported []string `json:"request_object_encryption_alg_values_supported,omitempty"`
	RequestObjectEncryptionEncValuesSupported []string `json:"request_object_encryption_enc_values_supported,omitempty"`
	DisplayValuesSupported                    []string `json:"display_values_supported,omitempty"`
	ClaimTypesSupported                       []string `json:"claim_types_supported,omitempty"`
	ClaimsSupported                           []string `json:"claims_supported,omitempty"`
	ClaimsLocalesSupported                    []string `json:"claims_locales_supported,omitempty"`
	ClaimsParameterSupported                  bool     `json:"claims_parameter_supported,omitempty"`
	RequestParameterSupported                 bool     `json:"request_parameter_supported,omitempty"`
	// request_uri_parameter_supported
	// If omitted, the default value is true.
	RequestUriParameterSupported  bool `json:"request_uri_parameter_supported"`
	RequireRequestUriRegistration bool `json:"require_request_uri_registration,omitempty"`
	// https://openid.net/specs/openid-connect-rpinitiated-1_0.html#OPMetadata
	EndSessionEndpoint string `json:"end_session_endpoint,omitempty"`
	// https://www.rfc-editor.org/rfc/rfc9126.html#section-5
	PushedAuthorizationRequestEndpoint string `json:"pushed_authorization_request_endpoint,omitempty"`
	RequirePushedAuthorizationRequests bool   `json:"require_pushed_authorization_requests,omitempty"`
	// https://openid.net/specs/openid-financial-api-jarm.html#authorization-server-metadata
	AuthorizationSigningAlgValuesSupported    []string `json:"authorization_signing_alg_values_supported,omitempty"`
	AuthorizationEncryptionAlgValuesSupported []string `json:"authorization_encryption_alg_values_supported,omitempty"`
	AuthorizationEncryptionEncValuesSupported []string `json:"authorization_encryption_enc_values_supported,omitempty"`
	// https://datatracker.ietf.org/doc/html/rfc9207#name-authorization-server-metada
	AuthorizationResponseIssParameterSupported bool `json:"authorization_response_iss_parameter_supported,omitempty"`
	// https://openid.net/specs/openid-connect-backchannel-1_0.html#BCSupport
	BackchannelLogoutSupported        bool `json:"backchannel_logout_supported,omitempty"`
	BackchannelLogoutSessionSupported bool `json:"backchannel_logout_session_supported,omitempty"`
	// https://openid.net/specs/openid-connect-frontchannel-1_0.html#OPLogout
	FrontchannelLogoutSupported        bool `json:"frontchannel_logout_supported,omitempty"`
	FrontchannelLogoutSessionSupported bool `json:"frontchannel_logout_session_supported,omitempty"`
	// https://datatracker.ietf.org/doc/html/rfc8705#section-3.3
	TlsClientCertificateBoundAccessTokens bool `json:"tls_client_certificate_bound_access_tokens,omitempty"`
}

func (p *Provider) Discovery(ctx context.Context,
	req *connect.Request[oppb.DiscoveryRequest]) (*connect.Response[oppb.DiscoveryResponse], error) {
	iss, err := auth.GetIssuer(ctx, req)
	if err != nil {
		return nil, err
	} else {

		if b, err := json.Marshal(iss.Meta); err != nil {
			return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("fail json marshal(iss): "+err.Error()))
		} else {
			res := &configration{}
			if err := json.Unmarshal(b, res); err != nil {
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("fail json unmarshal(iss): "+err.Error()))
			}

			if b, err := json.MarshalIndent(res, "", "  "); err != nil {
				return nil, connect.NewError(connect.CodeInternal, fmt.Errorf("fail json marshal indent(iss): "+err.Error()))
			} else {
				return connect.NewResponse(&oppb.DiscoveryResponse{
					Content: string(b),
				}), nil
			}
		}
	}
}
