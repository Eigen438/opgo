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
	"errors"
	"strings"
)

type ClaimsTree struct {
	leaf   *ClaimsLeaf
	branch map[string]*ClaimsTree
	array  []ClaimsTree
}

func (c ClaimsTree) Leaf() *ClaimsLeaf {
	return c.leaf
}

func (c ClaimsTree) Branch() map[string]*ClaimsTree {
	return c.branch
}

func (c ClaimsTree) Array() []ClaimsTree {
	return c.array
}

func (c *ClaimsTree) Verify(source interface{}) (interface{}, bool) {
	if c == nil {
		return source, true
	} else if source == nil {
		return nil, false
	} else if c.array != nil {
		ret := []interface{}{}
		if a, ok := source.([]interface{}); ok {
			for _, citem := range c.array {
				for _, aitem := range a {
					if _v, ok := citem.Verify(aitem); ok {
						if _v != nil {
							ret = append(ret, _v)
						}
					}
				}
			}
		} else {
			for _, ctime := range c.array {
				if _v, ok := ctime.Verify(source); ok {
					if _v != nil {
						ret = append(ret, _v)
					}
				}
			}
		}
		if len(ret) > 0 {
			return ret, true
		}
		return nil, false
	} else if c.branch != nil {
		if b, ok := source.(map[string]interface{}); ok {
			ret := map[string]interface{}{}
			for k, v := range c.branch {
				if _v, ok := v.Verify(b[k]); ok {
					if _v != nil {
						ret[k] = _v
						continue
					}
				} else {
					return nil, false
				}
			}
			if len(ret) > 0 {
				return ret, true
			}
		}
		return nil, false
	} else {
		return c.leaf.Verify(source)
	}
}

func (c *ClaimsTree) Filter(source interface{}) interface{} {
	if c == nil {
		return source
	} else if source == nil {
		return nil
	} else if c.array != nil {
		ret := []interface{}{}
		if a, ok := source.([]interface{}); ok {
			for _, citem := range c.array {
				for _, aitem := range a {
					_v := citem.Filter(aitem)
					if _v != nil {
						ret = append(ret, _v)
					}
				}
			}
		} else {
			for _, ctime := range c.array {
				_v := ctime.Filter(source)
				if _v != nil {
					ret = append(ret, _v)
				}
			}
		}
		if len(ret) > 0 {
			return ret
		}
		return nil
	} else if c.branch != nil {
		if b, ok := source.(map[string]interface{}); ok {
			ret := map[string]interface{}{}
			for k, v := range c.branch {
				_v := v.Filter(b[k])
				if _v != nil {
					ret[k] = _v
					continue
				}
			}
			if len(ret) > 0 {
				return ret
			}
		}
		return nil
	} else {
		val, _ := c.leaf.Verify(source)
		return val
	}
}

func (c *ClaimsTree) Append(target *ClaimsTree) {
	if c.array != nil && target.array != nil {
		c.array = append(c.array, target.array...)
	} else if c.branch != nil && target.branch != nil {
		for k, v := range target.branch {
			c.branch[k] = v
		}
	}
}

func (c *ClaimsTree) UnmarshalJSON(byteString []byte) error {
	if strings.HasPrefix(string(byteString), "[") {
		var i = []ClaimsTree{}
		err := json.Unmarshal(byteString, &i)
		if err != nil {
			return err
		}
		c.array = i
	} else if strings.HasPrefix(string(byteString), "{") {
		var i = map[string]*ClaimsTree{}
		err := json.Unmarshal(byteString, &i)
		if err != nil {
			return err
		}
		_, ok1 := i["value"]
		_, ok2 := i["values"]
		_, ok3 := i["essential"]
		_, ok4 := i["purpose"]
		_, ok5 := i["max_age"]
		if ok1 || ok2 || ok3 || ok4 || ok5 {
			var i = &ClaimsLeaf{}
			err := json.Unmarshal(byteString, &i)
			if err != nil {
				return err
			}
			// https://openid.net/specs/openid-connect-4-identity-assurance-1_0-ID3.html#section-11
			if ok4 && (len(i.Purpose) > 300 || len(i.Purpose) <= 3) {
				return errors.New("purpose longer than 300 characters")
			}
			c.leaf = i
		} else {
			c.branch = i
		}
	}
	return nil
}

func (c *ClaimsTree) MarshalJSON() ([]byte, error) {
	if c == nil {
		return []byte("null"), nil
	}
	if c.array != nil {
		if len(c.array) > 0 {
			return json.Marshal(c.array)
		} else {
			return []byte("null"), nil
		}
	} else if c.branch != nil {
		if len(c.branch) > 0 {
			return json.Marshal(c.branch)
		} else {
			return []byte("null"), nil
		}
	} else if c.leaf != nil {
		return json.Marshal(c.leaf)
	}
	return []byte("null"), nil
}
