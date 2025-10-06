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

import (
	"encoding/json"
	"log"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMakeClaimRuleFromDefaultScope(t *testing.T) {
	assert := assert.New(t)
	claims := MakeClaimRulesFromDefaultScope([]string{"openid", "address", "email"})
	assert.Contains(claims.Userinfo.Claims.branch, "address")
	assert.Contains(claims.Userinfo.Claims.branch, "email")
	assert.Contains(claims.Userinfo.Claims.branch, "email_verified")
	assert.NotContains(claims.Userinfo.Claims.branch, "name")
	assert.Nil(claims.Userinfo.Claims.branch["address"])
	assert.Nil(claims.Userinfo.Claims.branch["email"])
	assert.Nil(claims.Userinfo.Claims.branch["email_verified"])

	jsonString, err := json.Marshal(claims)
	log.Printf("jsonString: %s", jsonString)
	assert.Nil(err)
	revert := NewClaimRules()
	err = json.Unmarshal(jsonString, revert)
	assert.Nil(err)
	assert.Contains(revert.Userinfo.Claims.branch, "address")
	assert.Contains(revert.Userinfo.Claims.branch, "email")
	assert.Contains(revert.Userinfo.Claims.branch, "email_verified")
	assert.NotContains(revert.Userinfo.Claims.branch, "name")
	assert.Nil(revert.Userinfo.Claims.branch["address"])
	assert.Nil(revert.Userinfo.Claims.branch["email"])
	assert.Nil(revert.Userinfo.Claims.branch["email_verified"])
}

func TestClaimRules(t *testing.T) {
	assert := assert.New(t)
	target := ClaimRules{
		Userinfo: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"given_name": {
						leaf: &claimsLeaf{
							Essential: newTrue(),
						},
					},
					"nickame": nil,
					"email": {
						leaf: &claimsLeaf{
							Essential: newTrue(),
						},
					},
					"email_verified": {
						leaf: &claimsLeaf{
							Essential: newTrue(),
						},
					},
					"picture": nil,
				},
			},
		},
		IdToken: &claimObjectRoot{
			Claims: &claimsTree{
				branch: map[string]*claimsTree{
					"gender": nil,
					"birthdate": {
						leaf: &claimsLeaf{
							Essential: newTrue(),
						},
					},
					"acr": {
						leaf: &claimsLeaf{
							Values: []interface{}{
								"urn:mace:incommon:iap:silver",
							},
						},
					},
				},
			},
		},
	}

	jsonString, err := json.Marshal(target)
	log.Printf("jsonString: %s", jsonString)
	assert.Nil(err)
	revert := NewClaimRules()
	err = json.Unmarshal(jsonString, revert)
	assert.Nil(err)
	assert.Contains(revert.Userinfo.Claims.branch, "given_name")
	assert.Contains(revert.Userinfo.Claims.branch, "nickame")
	assert.Contains(revert.Userinfo.Claims.branch, "email")
	assert.Contains(revert.Userinfo.Claims.branch, "email_verified")
	assert.Contains(revert.Userinfo.Claims.branch, "picture")
	assert.True(*revert.Userinfo.Claims.branch["given_name"].Leaf().Essential)
	assert.Nil(revert.Userinfo.Claims.branch["nickame"])
	assert.True(*revert.Userinfo.Claims.branch["email"].Leaf().Essential)
	assert.True(*revert.Userinfo.Claims.branch["email_verified"].Leaf().Essential)
	assert.Nil(revert.Userinfo.Claims.branch["picture"])
	assert.Contains(revert.IdToken.Claims.branch, "gender")
	assert.Contains(revert.IdToken.Claims.branch, "birthdate")
	assert.Contains(revert.IdToken.Claims.branch, "acr")
	assert.Nil(revert.IdToken.Claims.branch["gender"])
	assert.True(*revert.IdToken.Claims.branch["birthdate"].Leaf().Essential)
	assert.Equal(revert.IdToken.Claims.branch["acr"].Leaf().Values[0], "urn:mace:incommon:iap:silver")
}
