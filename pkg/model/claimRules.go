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

type ClaimRules struct {
	Userinfo *ClaimObjectRoot `json:"userinfo,omitempty"`
	IdToken  *ClaimObjectRoot `json:"id_token,omitempty"`
}

func NewClaimRules() *ClaimRules {
	return &ClaimRules{}
}

func (c *ClaimRules) Append(o *ClaimRules) {
	if o.Userinfo != nil {
		if c.Userinfo == nil {
			c.Userinfo = &ClaimObjectRoot{}
		}
		if o.Userinfo.VerifiedClaims != nil {
			if c.Userinfo.VerifiedClaims == nil {
				c.Userinfo.VerifiedClaims = o.Userinfo.VerifiedClaims
			}
		}
		if o.Userinfo.Claims != nil {
			if c.Userinfo.Claims == nil {
				c.Userinfo.Claims = o.Userinfo.Claims
			} else {
				for k, v := range o.Userinfo.Claims.branch {
					c.Userinfo.Claims.branch[k] = v
				}
			}
		}
	}
	if o.IdToken != nil {
		if c.IdToken == nil {
			c.IdToken = &ClaimObjectRoot{}
		}
		if o.IdToken.VerifiedClaims != nil {
			if c.IdToken.VerifiedClaims == nil {
				c.IdToken.VerifiedClaims = o.IdToken.VerifiedClaims
			}
		}
		if o.IdToken.Claims != nil {
			if c.IdToken.Claims == nil {
				c.IdToken.Claims = o.IdToken.Claims
			} else {
				for k, v := range o.IdToken.Claims.branch {
					c.IdToken.Claims.branch[k] = v
				}
			}
		}
	}
}

func (c *ClaimRules) MekeIdTokenClaims(in map[string]interface{}, out map[string]interface{}) {
	if c.IdToken != nil {
		c.IdToken.MakeClaims(in, out)
	}
}

func (c *ClaimRules) MekeUserinfoClaims(in map[string]interface{}, out map[string]interface{}) {
	if c.Userinfo != nil {
		c.Userinfo.MakeClaims(in, out)
	}
}
