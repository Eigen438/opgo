// MIT License
//
// # Copyright (c) 2025 Eigen
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

func TestNewVerifiedClaims(t *testing.T) {
	assert := assert.New(t)
	jsonBytes := []byte(`
		[{
			"verification": {
				"trust_framework": {
					"value": "gold"
				}
			},
			"claims": {
				"given_name": null
			}
		},
		{
			"verification": {
				"trust_framework": {
					"value": "silver"
				}
			},
			"claims": {
				"family_name": null
			}
		}]
	`)
	ct := &claimsTree{}
	err := json.Unmarshal(jsonBytes, ct)
	assert.Nil(err)
	vc := newVerifiedClaims(ct)
	assert.NotNil(vc)
	revert, err := json.Marshal(vc)
	assert.Nil(err)
	log.Printf("vc %s", revert)
	{
		jsonBytes := []byte(`
			{
				"verified_claims": {
					"verification": {
						"trust_framework": "silver"
					},
					"claims": {
						"given_name": "jane",
						"family_name": "joe"
					}
				}
			}
		`)
		source := map[string]interface{}{}
		err := json.Unmarshal(jsonBytes, &source)
		assert.Nil(err)
		dest := vc.Verify(source)
		log.Printf("%+v", dest)
	}
}
