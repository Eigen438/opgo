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

import "encoding/json"

type verifiedClaims claimsTree

type temporaryClaims struct {
	Verification interface{} `json:"verification,omitempty"`
	Claims       interface{} `json:"claims,omitempty"`
}

func newVerifiedClaims(ct *claimsTree) *verifiedClaims {
	if ct == nil {
		return nil
	}
	return &verifiedClaims{
		array:  ct.array,
		branch: ct.branch,
	}
}

func (c *verifiedClaims) Verify(source map[string]interface{}) interface{} {
	if c == nil {
		return nil
	}
	if _vc, ok := source["verified_claims"]; ok {
		if vc, ok := _vc.(map[string]interface{}); ok {
			vsource, ok1 := vc["verification"]
			csource, ok2 := vc["claims"]
			if ok1 && ok2 {
				if c.array != nil {
					ret := []temporaryClaims{}
					for _, item := range c.array {
						vout, ok1 := item.branch["verification"].Verify(vsource)
						cout := item.branch["claims"].Filter(csource)
						if vout != nil && ok1 && cout != nil {
							ret = append(ret, temporaryClaims{
								Verification: vout,
								Claims:       cout,
							})
						}
					}
					if len(ret) > 0 {
						return ret
					}
					return nil
				} else if c.branch != nil {
					vout, ok1 := c.branch["verification"].Verify(vsource)
					cout := c.branch["claims"].Filter(csource)
					if vout != nil && ok1 && cout != nil {
						return temporaryClaims{
							Verification: vout,
							Claims:       cout,
						}
					}
					return nil
				}
			}
		}
	}
	return nil
}

func (c *verifiedClaims) UnmarshalJSON(byteString []byte) error {
	ct := &claimsTree{}
	err := json.Unmarshal(byteString, ct)
	if err != nil {
		return err
	}
	c.array = ct.array
	c.branch = ct.branch
	return nil
}

func (c *verifiedClaims) MarshalJSON() ([]byte, error) {
	if c == nil {
		return []byte("null"), nil
	}
	ct := &claimsTree{
		array:  c.array,
		branch: c.branch,
	}
	return json.Marshal(ct)
}
