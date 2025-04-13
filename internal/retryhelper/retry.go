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

package retryhelper

import (
	"context"
	"time"

	"go.opentelemetry.io/otel"
)

const serviceName = "retryhelper"

var (
	tracer = otel.Tracer(serviceName)
)

func RetryIfError(ctx context.Context, retry int, f func(context.Context) error) error {
	_ctx, span := tracer.Start(ctx, "Retry/All")
	defer span.End()

	wrapped := func(ctx context.Context) error {
		_ctx, span := tracer.Start(ctx, "Retry/Each")
		defer span.End()

		return f(_ctx)
	}

	var err error
	for count := range retry {
		if count > 0 {
			time.Sleep(time.Duration(1+count*2) * time.Millisecond)
		}
		if err = wrapped(_ctx); err == nil {
			return nil
		}
	}
	return err
}
