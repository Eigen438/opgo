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

func targetClaimsTree(assert *assert.Assertions) *claimsTree {
	jsonString := `{
		"abc":{"essential":false},
		"def":null,
		"ghi":[{
			"jkl":null
		},{
			"mno":null
		}]
	}`
	ct := &claimsTree{}
	err := json.Unmarshal([]byte(jsonString), ct)
	assert.Nil(err)
	return ct
}

func TestClaimsTree(t *testing.T) {
	assert := assert.New(t)
	{
		ct := &claimsTree{
			branch: map[string]*claimsTree{
				"test": {},
			},
		}
		v, err := json.Marshal(ct)
		assert.Nil(err)
		assert.Equal([]byte(`{"test":null}`), v)
	}
	{
		ct := &claimsTree{
			branch: map[string]*claimsTree{},
		}
		v, err := json.Marshal(ct)
		assert.Nil(err)
		assert.Equal([]byte(`null`), v)
	}
	{
		ct := &claimsTree{
			branch: map[string]*claimsTree{
				"abc": {
					leaf: &claimsLeaf{
						Essential: newFalse(),
					},
				},
				"def": {
					branch: map[string]*claimsTree{},
				},
			},
		}
		v, err := json.Marshal(ct)
		assert.Nil(err)
		assert.Equal([]byte(`{"abc":{"essential":false},"def":null}`), v)
	}
	{
		ct := targetClaimsTree(assert)
		target := []byte(`{"abc":"aaa","def":"bbb","ghi":[{"jkl":"ccc"}]}`)
		t := map[string]interface{}{}
		err := json.Unmarshal(target, &t)
		assert.Nil(err)
		verify, b := ct.Verify(t)
		assert.True(b)
		v, err := json.Marshal(verify)
		assert.Nil(err)
		assert.Equal([]byte(`{"abc":"aaa","def":"bbb","ghi":[{"jkl":"ccc"}]}`), v)
		filter := ct.Filter(t)
		v, err = json.Marshal(filter)
		assert.Nil(err)
		assert.Equal([]byte(`{"abc":"aaa","def":"bbb","ghi":[{"jkl":"ccc"}]}`), v)
	}
	{
		ct := targetClaimsTree(assert)
		target := []byte(`{"abc":"aaa"}`)
		t := map[string]interface{}{}
		err := json.Unmarshal(target, &t)
		assert.Nil(err)
		verify, b := ct.Verify(t)
		assert.False(b)
		assert.Nil(verify)
		filter := ct.Filter(t)
		v, err := json.Marshal(filter)
		assert.Nil(err)
		assert.Equal([]byte(`{"abc":"aaa"}`), v)
	}
	{
		ct := targetClaimsTree(assert)
		target := []byte(`{"cba":"aaa","def":"bbb","ghi":[{"jkl":"ccc"}]}`)
		t := map[string]interface{}{}
		err := json.Unmarshal(target, &t)
		assert.Nil(err)
		verify, b := ct.Verify(t)
		assert.False(b)
		assert.Nil(verify)
		filter := ct.Filter(t)
		v, err := json.Marshal(filter)
		assert.Nil(err)
		assert.Equal([]byte(`{"def":"bbb","ghi":[{"jkl":"ccc"}]}`), v)
	}
}
