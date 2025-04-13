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

import (
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMakeClaimRuleFromDefaultScope(t *testing.T) {
	assert := assert.New(t)
	claims := MakeClaimRulesFromDefaultScope([]string{"openid", "address", "email"})
	assert.Contains(claims.Userinfo, "address")
	assert.Contains(claims.Userinfo, "email")
	assert.Contains(claims.Userinfo, "email_verified")
	assert.NotContains(claims.Userinfo, "name")
	assert.Nil(claims.Userinfo["address"])
	assert.Nil(claims.Userinfo["email"])
	assert.Nil(claims.Userinfo["email_verified"])

	jsonString, err := json.Marshal(claims)
	assert.Nil(err)
	revert := NewClaimRules()
	err = json.Unmarshal(jsonString, revert)
	assert.Nil(err)
	assert.Contains(revert.Userinfo, "address")
	assert.Contains(revert.Userinfo, "email")
	assert.Contains(revert.Userinfo, "email_verified")
	assert.NotContains(revert.Userinfo, "name")
	assert.Nil(revert.Userinfo["address"])
	assert.Nil(revert.Userinfo["email"])
	assert.Nil(revert.Userinfo["email_verified"])
}

func TestClaimRules(t *testing.T) {
	assert := assert.New(t)
	target := ClaimRules{
		Userinfo: map[string]*ClaimObject{
			"given_name": {
				Essential: true,
			},
			"nickame": nil,
			"email": {
				Essential: true,
			},
			"email_verified": {
				Essential: true,
			},
			"picture": nil,
		},
		IdToken: map[string]*ClaimObject{
			"gender": nil,
			"birthdate": {
				Essential: true,
			},
			"acr": {
				Values: []string{
					"urn:mace:incommon:iap:silver",
				},
			},
		},
	}

	jsonString, err := json.Marshal(target)
	assert.Nil(err)
	revert := NewClaimRules()
	err = json.Unmarshal(jsonString, revert)
	assert.Nil(err)
	assert.Contains(revert.Userinfo, "given_name")
	assert.Contains(revert.Userinfo, "nickame")
	assert.Contains(revert.Userinfo, "email")
	assert.Contains(revert.Userinfo, "email_verified")
	assert.Contains(revert.Userinfo, "picture")
	assert.True(revert.Userinfo["given_name"].Essential)
	assert.Nil(revert.Userinfo["nickame"])
	assert.True(revert.Userinfo["email"].Essential)
	assert.True(revert.Userinfo["email_verified"].Essential)
	assert.Nil(revert.Userinfo["picture"])
	assert.Contains(revert.IdToken, "gender")
	assert.Contains(revert.IdToken, "birthdate")
	assert.Contains(revert.IdToken, "acr")
	assert.Nil(revert.IdToken["gender"])
	assert.True(revert.IdToken["birthdate"].Essential)
	assert.Equal(revert.IdToken["acr"].Values[0], "urn:mace:incommon:iap:silver")
}
