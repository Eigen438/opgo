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

package model

type ClaimObject struct {
	Essential bool        `json:"essential"`
	Value     interface{} `json:"value"`
	Values    []string    `json:"values"`
}

type ClaimRules struct {
	Userinfo map[string]*ClaimObject `json:"userinfo"`
	IdToken  map[string]*ClaimObject `json:"id_token"`
}

// https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims
var DefaultScopeToClaims = map[string]ClaimRules{
	"profile": {
		Userinfo: map[string]*ClaimObject{
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
	"email": {
		Userinfo: map[string]*ClaimObject{
			"email":          nil,
			"email_verified": nil,
		},
	},
	"address": {
		Userinfo: map[string]*ClaimObject{
			"address": nil,
		},
	},
	"phone": {
		Userinfo: map[string]*ClaimObject{
			"phone_number":          nil,
			"phone_number_verified": nil,
		},
	},
}

func NewAcrClaimRules(acrValues []string) *ClaimRules {
	return &ClaimRules{
		IdToken: map[string]*ClaimObject{
			"acr": {
				Essential: true,
				Values:    acrValues,
			},
		},
	}
}

func NewClaimRules() *ClaimRules {
	return &ClaimRules{
		Userinfo: map[string]*ClaimObject{},
		IdToken:  map[string]*ClaimObject{},
	}
}

func (c *ClaimRules) Append(o *ClaimRules) {
	for k, v := range o.Userinfo {
		c.Userinfo[k] = v
	}
	for k, v := range o.IdToken {
		c.IdToken[k] = v
	}
}

func MakeClaimRulesFromDefaultScope(scopes []string) *ClaimRules {
	ret := NewClaimRules()
	for _, scope := range scopes {
		target, ok := DefaultScopeToClaims[scope]
		if ok {
			ret.Append(&target)
		}
	}
	return ret
}
