package validate

import (
	"testing"

	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/stretchr/testify/assert"
)

func TestIssuerMeta(t *testing.T) {
	type testCase struct {
		name   string
		target *oppb.IssuerMeta
		result bool
	}
	testCases := []testCase{
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
			result: true,
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
			result: false,
		},
	}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := IssuerMeta(tc.target)
			if tc.result {
				assert.Nil(t, err, "expected no error for valid issuer meta")
			} else {
				assert.NotNil(t, err, "expected error for invalid issuer meta")
			}
		})
	}
}
