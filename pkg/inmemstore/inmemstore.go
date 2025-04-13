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

package inmemstore

import (
	"context"
	"encoding/json"
	"reflect"
	"sync"
	"time"

	"go.opentelemetry.io/contrib/bridges/otelslog"
	"go.opentelemetry.io/otel"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const serviceName = "inmemstore"

var (
	tracer = otel.Tracer(serviceName)
	logger = otelslog.NewLogger(serviceName)
)

type storeItem struct {
	lowItem  []byte
	expireAt int64
}

type inner struct {
	mutex          sync.Mutex
	items          map[string]*storeItem
	cleaningWindow time.Duration
}

func New(cleaningWindow time.Duration) InmemStore {
	initMap := map[string]*storeItem{}
	m := inner{
		mutex:          sync.Mutex{},
		items:          initMap,
		cleaningWindow: cleaningWindow,
	}
	go m.cleaner()
	return &m
}

func (i *inner) cleaning(now time.Time) {
	_, span := tracer.Start(context.Background(), "cleaning")
	defer span.End()

	unix := now.Unix()
	list := []string{}
	for k, v := range i.items {
		if v.expireAt != -1 && v.expireAt < unix {
			list = append(list, k)
			logger.Debug("*:" + k)
		} else {
			logger.Debug(" :" + k)
		}
	}
	for _, k := range list {
		delete(i.items, k)
	}
}

func (i *inner) syncCreate(key string, value *storeItem) error {
	i.mutex.Lock()
	defer i.mutex.Unlock()
	if _, ok := i.items[key]; ok {
		return status.Error(codes.AlreadyExists, "already exist")
	} else {
		i.items[key] = value
		return nil
	}
}

func (i *inner) syncSet(key string, value *storeItem) {
	i.mutex.Lock()
	defer i.mutex.Unlock()
	i.items[key] = value
}

func (i *inner) syncGet(key string) (*storeItem, error) {
	i.mutex.Lock()
	defer i.mutex.Unlock()
	if v, ok := i.items[key]; !ok {
		return nil, status.Error(codes.NotFound, "not found")
	} else {
		return v, nil
	}
}

func (i *inner) syncDelete(key string) {
	i.mutex.Lock()
	defer i.mutex.Unlock()
	delete(i.items, key)
}

func (i *inner) cleaner() {
	for {
		time.Sleep(i.cleaningWindow)
		i.cleaning(time.Now())
	}
}

// Create Pathable data
func (i *inner) Create(_ctx context.Context, data any) error {
	ctx, span := tracer.Start(_ctx, "Create")
	defer span.End()

	rv := reflect.ValueOf(data)
	if p, ok := rv.Interface().(Pathable); !ok {
		return status.Error(codes.Unavailable, "not implement Pathable")
	} else {
		var expireAt int64 = -1
		if e, ok := rv.Interface().(Expirable); ok {
			expireAt = e.ExpireAtUnix(ctx)
		}

		if b, err := json.Marshal(data); err != nil {
			return err
		} else {
			return i.syncCreate(p.Path(ctx), &storeItem{
				lowItem:  b,
				expireAt: expireAt,
			})
		}
	}
}

// Write/Set Pathable data
func (i *inner) Set(_ctx context.Context, data any) error {
	ctx, span := tracer.Start(_ctx, "Set")
	defer span.End()

	rv := reflect.ValueOf(data)
	if p, ok := rv.Interface().(Pathable); !ok {
		return status.Error(codes.Unavailable, "not implement Pathable")
	} else {
		var expireAt int64 = -1
		if e, ok := rv.Interface().(Expirable); ok {
			expireAt = e.ExpireAtUnix(ctx)
		}

		if b, err := json.Marshal(data); err != nil {
			return err
		} else {
			i.syncSet(p.Path(ctx), &storeItem{
				lowItem:  b,
				expireAt: expireAt,
			})
			return nil
		}
	}
}

// Read/Get Pathable data
func (i *inner) Get(_ctx context.Context, data any) error {
	ctx, span := tracer.Start(_ctx, "Get")
	defer span.End()

	rv := reflect.ValueOf(data)
	if p, ok := rv.Interface().(Pathable); !ok {
		return status.Error(codes.Unavailable, "not implement Pathable")
	} else {
		if v, err := i.syncGet(p.Path(ctx)); err != nil {
			return err
		} else {
			return json.Unmarshal(v.lowItem, data)
		}
	}
}

// Delete Pathable data
func (i *inner) Delete(_ctx context.Context, data any) error {
	ctx, span := tracer.Start(_ctx, "Delete")
	defer span.End()

	rv := reflect.ValueOf(data)
	if p, ok := rv.Interface().(Pathable); !ok {
		return status.Error(codes.Unavailable, "not implement Pathable")
	} else {
		i.syncDelete(p.Path(ctx))
		return nil
	}
}
