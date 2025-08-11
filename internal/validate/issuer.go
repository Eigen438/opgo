package validate

import (
	"fmt"

	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
)

func IssuerMeta(issuerMeta *oppb.IssuerMeta) error {
	if issuerMeta == nil {
		return fmt.Errorf("issuerMeta cannot be nil")
	}

	// http://tex2e.github.io/rfc-translater/html/rfc8414.html#2--Authorization-Server-Metadata
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if issuerMeta.Issuer == "" {
		return fmt.Errorf("issuer is required")
	}
	// http://tex2e.github.io/rfc-translater/html/rfc8414.html#2--Authorization-Server-Metadata
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if issuerMeta.AuthorizationEndpoint == "" {
		return fmt.Errorf("authorization_endpoint is required")
	}
	// http://tex2e.github.io/rfc-translater/html/rfc8414.html#2--Authorization-Server-Metadata
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if issuerMeta.TokenEndpoint == "" {
		return fmt.Errorf("token_endpoint is required")
	}
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if issuerMeta.JwksUri == "" {
		return fmt.Errorf("jwks_uri is required")
	}
	// http://tex2e.github.io/rfc-translater/html/rfc8414.html#2--Authorization-Server-Metadata
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if len(issuerMeta.ResponseTypesSupported) == 0 {
		return fmt.Errorf("response_types_supported must have at least one item")
	}
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if len(issuerMeta.SubjectTypesSupported) == 0 {
		return fmt.Errorf("subject_types_supported must have at least one item")
	}
	// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
	// REQUIRED
	if len(issuerMeta.IdTokenSigningAlgValuesSupported) == 0 {
		return fmt.Errorf("id_token_signing_alg_values_supported must have at least one item")
	}

	// Complete the values.
	if len(issuerMeta.TokenEndpointAuthMethodsSupported) == 0 {
		issuerMeta.TokenEndpointAuthMethodsSupported = []string{
			// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
			// If omitted, the default is client_secret_basic -- the HTTP Basic Authentication Scheme
			// specified in Section 2.3.1 of OAuth 2.0 [RFC6749].
			oauth.TokenEndpointAuthMethodClientSecretBasic,
		}
	}

	// For dynamic OpenID providers, complete the values they must support.
	if len(issuerMeta.RegistrationEndpoint) > 0 {
		if len(issuerMeta.ResponseModesSupported) == 0 {
			// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
			// If omitted, the default for Dynamic OpenID Providers is ["query", "fragment"].
			issuerMeta.ResponseModesSupported = []string{
				oauth.ResponseModeQuery,
				oauth.ResponseModeFragment,
			}
		}
		if len(issuerMeta.GrantTypesSupported) == 0 {
			// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
			// Dynamic OpenID Providers MUST support the authorization_code and implicit Grant
			// Type values and MAY support other Grant Types. If omitted, the default value is
			// ["authorization_code", "implicit"].
			issuerMeta.GrantTypesSupported = []string{
				oauth.GrantTypeAuthorizationCode,
				oauth.GrantTypeImplicit,
			}
		}
	}
	return nil
}
