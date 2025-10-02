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
	"reflect"
	"slices"
)

func NewTrue() *bool {
	b := true
	return &b
}

func NewFalse() *bool {
	b := false
	return &b
}

type ClaimsLeaf struct {
	Essential *bool         `json:"essential,omitempty"`
	MaxAge    *int64        `json:"max_age,omitempty"`
	Purpose   string        `json:"purpose,omitempty"`
	Value     interface{}   `json:"value,omitempty"`
	Values    []interface{} `json:"values,omitempty"`
}

func (c *ClaimsLeaf) Verify(source interface{}) (interface{}, bool) {
	if c == nil {
		return nil, true
	} else if c.Essential != nil {
		if *c.Essential {
			if source != nil {
				return source, true
			}
			return nil, false
		} else {
			return source, true
		}
	} else if c.Value != nil {
		if reflect.TypeOf(c.Value) == reflect.TypeOf(source) {
			if c.Value == source {
				return source, true
			}
		}
		return nil, false
	} else if c.Values != nil {
		if slices.Contains(c.Values, source) {
			return source, true
		}
		return nil, false
	} else if c.MaxAge != nil {
		// TODO: check max_age
		return source, true
	} else {
		return source, true
	}
}
