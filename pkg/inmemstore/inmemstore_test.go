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

package inmemstore_test

import (
	"context"
	"fmt"
	"testing"

	"github.com/Eigen438/opgo/pkg/inmemstore"
	"github.com/stretchr/testify/assert"
)

type TestData struct {
	ID   string
	Name string
}

func (t TestData) Path(_ context.Context) string {
	return fmt.Sprintf("ID:%s", t.ID)
}

func TestGet(t *testing.T) {
	ctx := context.Background()
	assert := assert.New(t)

	ms := inmemstore.New(1)
	err := ms.Set(ctx, &TestData{ID: "id1", Name: "test"})
	assert.Nil(err)

	u := &TestData{ID: "id1"}
	err = ms.Get(ctx, u)
	assert.Nil(err)
	assert.Equal(u.Name, "test")
}

func TestDelete(t *testing.T) {
	ctx := context.Background()
	assert := assert.New(t)

	ms := inmemstore.New(1)
	err := ms.Create(ctx, &TestData{ID: "id1", Name: "test"})
	assert.Nil(err)

	u := &TestData{ID: "id1"}
	err = ms.Delete(ctx, u)
	assert.Nil(err)

	err = ms.Get(ctx, u)
	assert.NotNil(err)
}
