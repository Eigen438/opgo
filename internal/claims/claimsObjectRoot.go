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

import "encoding/json"

type ClaimObjectRoot struct {
	VerifiedClaims *VerifiedClaims `json:"verified_claims,omitempty"`
	Claims         *ClaimsTree     `json:"claims,omitempty"`
}

func (c *ClaimObjectRoot) UnmarshalJSON(byteString []byte) error {
	temp := &ClaimsTree{
		branch: map[string]*ClaimsTree{},
	}
	if err := json.Unmarshal(byteString, temp); err != nil {
		return err
	}
	if v, ok := temp.branch["verified_claims"]; ok {
		c.VerifiedClaims = NewVerifiedClaims(v)
	}
	if v, ok := temp.branch["claims"]; ok {
		c.Claims = v
	}
	return nil
}

func (c *ClaimObjectRoot) MakeClaims(in map[string]interface{}, out map[string]interface{}) {
	if c == nil {
		return
	}
	if ret := c.VerifiedClaims.Verify(in); ret != nil {
		out["verified_claims"] = ret
	}
	if c.Claims != nil {
		if _v := c.Claims.Filter(in); _v != nil {
			if _out, ok := _v.(map[string]interface{}); ok {
				for k, v := range _out {
					out[k] = v
				}
			}
		}
	}
}
