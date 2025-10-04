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

package claims

// https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims
var defaultScopeToClaims = map[string]ClaimRules{
	"profile": {
		Userinfo: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"name":               nil,
					"family_name":        nil,
					"given_name":         nil,
					"middle_name":        nil,
					"nickname":           nil,
					"preferred_username": nil,
					"profile":            nil,
					"picture":            nil,
					"website":            nil,
					"gender":             nil,
					"birthdate":          nil,
					"zoneinfo":           nil,
					"locale":             nil,
					"updated_at":         nil,
				},
			},
		},
	},
	"email": {
		Userinfo: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"email":          nil,
					"email_verified": nil,
				},
			},
		},
	},
	"address": {
		Userinfo: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"address": nil,
				},
			},
		},
	},
	"phone": {
		Userinfo: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"phone_number":          nil,
					"phone_number_verified": nil,
				},
			},
		},
	},
}

func NewAcrClaimRules(acrValues []string) *ClaimRules {
	vals := []interface{}{}
	for _, val := range acrValues {
		vals = append(vals, val)
	}
	return &ClaimRules{
		IdToken: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"acr": {
						leaf: &claimsLeaf{
							Essential: newTrue(),
							Values:    vals,
						},
					},
				},
			},
		},
	}
}

func MakeClaimRulesFromDefaultScope(scopes []string) *ClaimRules {
	ret := NewClaimRules()
	for _, scope := range scopes {
		target, ok := defaultScopeToClaims[scope]
		if ok {
			ret.Append(&target)
		}
	}
	return ret
}
