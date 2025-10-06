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

type claimObjectRoot struct {
	VerifiedClaims *verifiedClaims `json:"verified_claims,omitempty"`
	Claims         *claimsTree     `json:"claims,omitempty"`
}

func (c *claimObjectRoot) UnmarshalJSON(byteString []byte) error {
	temp := &claimsTree{
		branch: map[string]*claimsTree{},
	}
	if err := json.Unmarshal(byteString, temp); err != nil {
		return err
	}
	if v, ok := temp.branch["verified_claims"]; ok {
		c.VerifiedClaims = newVerifiedClaims(v)
	}
	delete(temp.branch, "verified_claims")
	c.Claims = temp
	return nil
}

func (c *claimObjectRoot) MakeClaims(claims string, out map[string]interface{}) error {
	in := map[string]interface{}{}
	if err := json.Unmarshal([]byte(claims), &in); err != nil {
		return err
	}

	if c == nil {
		return nil
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
	return nil
}
