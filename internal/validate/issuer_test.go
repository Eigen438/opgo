package validate

import (
	"testing"

	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/stretchr/testify/assert"
)

func TestIssuerMeta(t *testing.T) {
	type testCase struct {
		name   string
		target *oppb.IssuerMeta
		assert func(*assert.Assertions, error, *oppb.IssuerMeta)
	}

	testCases := []testCase{
		{
			name:   "nil issuer meta",
			target: nil,
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "minimal valid issuer meta",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.Nil(err, "expected no error for valid issuer meta")
			},
		},
		{
			name: "missing issuer",
			target: &oppb.IssuerMeta{
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing AuthorizationEndpoint",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing TokenEndpoint",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing JwksUri",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing ResponseTypesSupported",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing SubjectTypesSupported",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing IdTokenSigningAlgValuesSupported",
			target: &oppb.IssuerMeta{
				Issuer:                 "https://example.com",
				AuthorizationEndpoint:  "https://example.com/auth",
				TokenEndpoint:          "https://example.com/token",
				JwksUri:                "https://example.com/jwks",
				ResponseTypesSupported: []string{"code"},
				SubjectTypesSupported:  []string{"public"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.NotNil(err, "expected error for invalid issuer meta")
			},
		},
		{
			name: "missing TokenEndpointAuthMethodsSupported",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.Nil(err, "expected error for invalid issuer meta")
				assert.Equal(im.TokenEndpointAuthMethodsSupported, []string{
					oauth.TokenEndpointAuthMethodClientSecretBasic,
				}, "expected default token endpoint auth method to be set")
			},
		},
		{
			name: "setting TokenEndpointAuthMethodsSupported",
			target: &oppb.IssuerMeta{
				Issuer:                            "https://example.com",
				AuthorizationEndpoint:             "https://example.com/auth",
				TokenEndpoint:                     "https://example.com/token",
				JwksUri:                           "https://example.com/jwks",
				ResponseTypesSupported:            []string{"code"},
				SubjectTypesSupported:             []string{"public"},
				IdTokenSigningAlgValuesSupported:  []string{"RS256"},
				TokenEndpointAuthMethodsSupported: []string{"client_secret_post"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.Nil(err, "expected error for invalid issuer meta")
				assert.Equal(im.TokenEndpointAuthMethodsSupported, []string{
					oauth.TokenEndpointAuthMethodClientSecretPost,
				}, "expected token endpoint auth method to be set")
			},
		},
		{
			name: "use registration endpoint with values",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				RegistrationEndpoint:             "https://example.com/register",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
				ResponseModesSupported:           []string{"query"},
				GrantTypesSupported:              []string{"authorization_code"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.Nil(err, "expected no error for valid issuer meta with registration endpoint")
				assert.Equal(im.ResponseModesSupported, []string{"query"}, "expected response modes to be set")
				assert.Equal(im.GrantTypesSupported, []string{"authorization_code"}, "expected grant types to be set")
			},
		},
		{
			name: "use registration endpoint with no values",
			target: &oppb.IssuerMeta{
				Issuer:                           "https://example.com",
				AuthorizationEndpoint:            "https://example.com/auth",
				TokenEndpoint:                    "https://example.com/token",
				JwksUri:                          "https://example.com/jwks",
				RegistrationEndpoint:             "https://example.com/register",
				ResponseTypesSupported:           []string{"code"},
				SubjectTypesSupported:            []string{"public"},
				IdTokenSigningAlgValuesSupported: []string{"RS256"},
			},
			assert: func(assert *assert.Assertions, err error, im *oppb.IssuerMeta) {
				assert.Nil(err, "expected no error for valid issuer meta with registration endpoint")
				assert.Equal(im.ResponseModesSupported, []string{"query", "fragment"}, "expected response modes to be set")
				assert.Equal(im.GrantTypesSupported, []string{"authorization_code", "implicit"}, "expected grant types to be set")
			},
		},
	}
	assert := assert.New(t)
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := IssuerMeta(tc.target)
			tc.assert(assert, err, tc.target)
		})
	}
}
