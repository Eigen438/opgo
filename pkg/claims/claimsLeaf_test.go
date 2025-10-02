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
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestClaimsLeaf(t *testing.T) {
	assert := assert.New(t)
	{
		// value
		l := &ClaimsLeaf{
			Value: "123",
		}
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, "123")
		}
		{
			r, b := l.Verify("12")
			assert.False(b)
			assert.Equal(r, nil)
		}
	}
	{
		// values
		l := &ClaimsLeaf{
			Values: []interface{}{"123", "456"},
		}
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, "123")
		}
		{
			r, b := l.Verify("456")
			assert.True(b)
			assert.Equal(r, "456")
		}
		{
			r, b := l.Verify("12")
			assert.False(b)
			assert.Equal(r, nil)
		}
	}
	{
		// 無指定
		l := &ClaimsLeaf{}
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, "123")
		}
		{
			r, b := l.Verify(nil)
			assert.True(b)
			assert.Equal(r, nil)
		}
	}
	{
		// nil
		var l *ClaimsLeaf
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, nil)
		}
		{
			r, b := l.Verify(nil)
			assert.True(b)
			assert.Equal(r, nil)
		}
	}
	{
		// essential: true
		l := &ClaimsLeaf{
			Essential: NewTrue(),
		}
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, "123")
		}
		{
			r, b := l.Verify(nil)
			assert.False(b)
			assert.Equal(r, nil)
		}
	}
	{
		// essential: true
		l := &ClaimsLeaf{
			Essential: NewFalse(),
		}
		{
			r, b := l.Verify("123")
			assert.True(b)
			assert.Equal(r, "123")
		}
		{
			r, b := l.Verify(nil)
			assert.True(b)
			assert.Equal(r, nil)
		}
	}
}
