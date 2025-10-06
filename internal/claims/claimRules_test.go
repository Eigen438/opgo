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
	"testing"

	"github.com/stretchr/testify/assert"
)

type claimRulesTest struct {
	Name           string
	ClaimRules     func() (*ClaimRules, error)
	Claims         string
	UserinfoAssert func(*assert.Assertions, map[string]interface{})
	IdTokenAssert  func(*assert.Assertions, map[string]interface{})
}

func TestNewClaimRules(t *testing.T) {
	tests := []claimRulesTest{
		{
			Name: "basic test",
			ClaimRules: func() (*ClaimRules, error) {
				cr := NewClaimRules()
				err := json.Unmarshal([]byte(`
	{
		"userinfo": {
			"iss": null,
			"verified_claims": {
				"verification": {
					"trust_framework": null,
					"time": null,
					"evidence": [{
						"type": {
							"value": "document"
						},
						"method": null,
						"document_details": {
							"type": null
						}
					}]
				},
				"claims": {
					"given_name": null,
					"birthdate": null
				}
			},
			"given_name": null,
			"name": null
		},
		"id_token": {
			"iss": null,
			"verified_claims": {
				"verification": {
					"trust_framework": null,
					"time": null,
					"evidence": [{
						"type": {
							"value": "document"
						},
						"method": null,
						"document_details": {
							"type": null
						}
					}]
				},
				"claims": {
					"given_name": null,
					"family_name": null
				}
			},
			"birthdate": null,
			"name": null
		}
	}
			`), cr)
				return cr, err
			},
			Claims: `
	{ 
		"iss": "abc",
		"verified_claims": { 
			"verification": {
				"trust_framework": "de_aml", 
				"time": "2012-04-23T18:25Z", 
				"verification_process": "f24c6f-6d3f-4ec5-973e-b0d8506f3bc7", 
				"evidence": [ 
					{ 
						"type": "document", 
						"method": "pipp", 
						"time": "2012-04-22T11:30Z", 
						"document_details": { 
							"type": "idcard", 
							"issuer": { 
								"name": "Stadt Augsburg", 
								"country": "DE" 
							}, 
							"document_number": "53554554", 
							"date_of_issuance": "2010-03-23", 
							"date_of_expiry": "2020-03-22" 
						}, 
						"attachments": [ 
							{ 
							"desc": "身分証明書の表面", 
							"digest" : { 
								"alg": "sha-256", 
								"value": "n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=" 
							}, 
							"url": "https://example.com/attachments/pGL9yz4hZQ" 
							}, 
							{ 
							"desc": "身分証明書の裏面", 
							"digest" : { 
								"alg": "sha-256", 
								"value": "/WGgOvT3fYcPwh4F5+gGeAlcktgIz7O1wnnuBMdKyhM=" 
							}, 
							"url": "https://example.com/attachments/4Ag8IpOf95" 
							} 
						] 
					} 
				] 
			}, 
			"claims": {
				"given_name": "Max", 
				"family_name": "Meier", 
				"birthdate": "1956-01-28", 
				"place_of_birth": { 
					"country": "DE", 
					"locality": "Musterstadt" 
				}, 
				"nationalities": [ 
					"DE" 
				], 
				"address": { 
					"locality": "Maxstadt", 
					"postal_code": "12344", 
					"country": "DE",
					"street_address": "アン・デア・ヴァイデ 22" 
				} 
			} 
		},
		"given_name": "Max", 
		"birthdate": "1956-01-28", 
		"name": "test"
	}
			`,
			UserinfoAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Equal("Max", out["given_name"])
				assert.Equal(nil, out["birthdate"])
				assert.Equal("test", out["name"])
			},
			IdTokenAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Equal(nil, out["given_name"])
				assert.Equal("1956-01-28", out["birthdate"])
				assert.Equal("test", out["name"])
			},
		},
		{
			Name: "simple test",
			ClaimRules: func() (*ClaimRules, error) {
				cr := NewClaimRules()
				err := json.Unmarshal([]byte(`
	{
		"id_token": {
			"iss": {
				"essential":false
			},
			"verified_claims": {
				"verification": {
					"trust_framework":null
				},
				"claims": {
					"given_name": {
						"essential": false
					}
				}
			}
		},
		"userinfo":{
			"iss": {
				"essential":false
			},
			"verified_claims": {
				"verification": {
					"trust_framework":null
				},
				"claims":{
					"given_name": {
						"value": "Min"
					}
				}
			}
		}
	}
			`), cr)
				return cr, err
			},
			Claims: `
	{ 
		"iss": "abc",
		"verified_claims": { 
			"verification": { 
				"trust_framework": "de_aml"
			}, 
			"claims": { 
				"given_name": "Max"
			} 
		}
	}
			`,
			UserinfoAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Equal("abc", out["iss"])
				assert.Nil(out["verified_claims"])
			},
			IdTokenAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Equal("abc", out["iss"])
				assert.NotNil(out["verified_claims"])
			},
		},
		{
			Name: "scope test",
			ClaimRules: func() (*ClaimRules, error) {
				cr := MakeClaimRulesFromDefaultScope([]string{"openid", "profile", "email", "address"})
				return cr, nil
			},
			Claims: `
	{ 
		"iss": "abc",
		"email": "hoge@foo.com",
		"test": "xxx"
	}
		`,
			UserinfoAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Nil(out["iss"])
				assert.Equal("hoge@foo.com", out["email"])
				assert.Nil(out["test"])
			},
			IdTokenAssert: func(assert *assert.Assertions, out map[string]interface{}) {
				assert.Nil(out["iss"])
				assert.Nil(out["email"])
				assert.Nil(out["test"])
			},
		},
	}

	for _, test := range tests {
		t.Run(test.Name, func(t *testing.T) {
			assert := assert.New(t)
			cr, err := test.ClaimRules()
			assert.Nil(err)

			out1 := map[string]interface{}{}
			err1 := cr.Userinfo.MakeClaims(test.Claims, out1)
			assert.Nil(err1)
			test.UserinfoAssert(assert, out1)

			out2 := map[string]interface{}{}
			err2 := cr.IdToken.MakeClaims(test.Claims, out2)
			assert.Nil(err2)
			test.IdTokenAssert(assert, out2)
		})
	}
}
