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

package provider

import (
	"bytes"
	"context"
	"fmt"
	"html/template"
	"net/url"
	"time"

	"github.com/Eigen438/opgo/internal/oauth"
	"github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1"
	"github.com/Eigen438/opgo/pkg/model"
	"github.com/golang-jwt/jwt/v5"
)

const formPostHtml = `
<!DOCTYPE html>
<html>
  <head><title>Submit This Form</title></head>
  <body onload="javascript:document.forms[0].submit()">
    <form method="post" action="{{ .RedirectUri }}">
	  {{ range $k, $v := .Values }}
      <input type="hidden" name="{{ $k }}" value="{{ $v }}"/>
	  {{ end }}
	  </form>
  </body>
</html>
`

type RedirectBuilder struct {
	issuer       *model.Issuer
	client       *model.Client
	RedirectUri  *url.URL
	responseMode oauth.ResponseMode
	Values       map[string]string
}

func NewRedirectBuilder(iss *model.Issuer, client *model.Client, params *oppb.AuthorizationParameters, vals map[string]string) (*RedirectBuilder, error) {
	u, err := url.Parse(params.RedirectUri)
	if err != nil {
		return nil, err
	}
	table, ok := oauth.MappedResponseMode[params.ResponseType]
	if !ok {
		return nil, fmt.Errorf("unknown response_type(%s)", params.ResponseType)
	}
	mode, ok := table[params.ResponseMode]
	if !ok {
		return nil, fmt.Errorf("unknown reponse_mode(%s)", params.ResponseMode)
	}
	if mode == oauth.ResponseModeError {
		return nil, fmt.Errorf("wrong combination response_type(%s) and response_mode(%s)", params.ResponseType, params.ResponseMode)
	}
	builder := &RedirectBuilder{
		issuer:       iss,
		client:       client,
		RedirectUri:  u,
		Values:       vals,
		responseMode: mode,
	}
	return builder, nil
}

func (b *RedirectBuilder) Build(ctx context.Context, now time.Time) (string, error) {
	// jwt形式のresponse_modeの場合はjwtを作成する
	if b.responseMode == oauth.ResponseModeQueryJwt ||
		b.responseMode == oauth.ResponseModeFragmentJwt ||
		b.responseMode == oauth.ResponseModeFormPostJwt {

		//返却用クレームを作成する
		claims := jwt.MapClaims{}
		for k, v := range b.Values {
			if v != "" {
				claims[k] = v
			}
		}
		claims["aud"] = b.client.Identity.ClientId
		claims["iss"] = b.issuer.Meta.Issuer
		claims["exp"] = now.Add(10 * time.Minute).Unix() // TODO:

		response, err := makeJwt(ctx, b.issuer, claims, b.client.Meta.AuthorizationSignedResponseAlg)
		if err != nil {
			return "", err
		}
		b.Values = map[string]string{"response": response}
	}

	if b.responseMode == oauth.ResponseModeQuery ||
		b.responseMode == oauth.ResponseModeQueryJwt {
		q := b.RedirectUri.Query()
		for k, v := range b.Values {
			if len(v) > 0 {
				q.Set(k, v)
			}
		}
		b.RedirectUri.RawQuery = q.Encode()
		return b.RedirectUri.String(), nil
	} else if b.responseMode == oauth.ResponseModeFragment ||
		b.responseMode == oauth.ResponseModeFragmentJwt {
		fragment := ""
		for k, v := range b.Values {
			if len(v) > 0 {
				if len(fragment) > 0 {
					fragment += "&"
				}
				fragment += k
				fragment += "="
				fragment += v
			}
		}
		b.RedirectUri.Fragment = fragment
		return b.RedirectUri.String(), nil
	} else if b.responseMode == oauth.ResponseModeFormPost ||
		b.responseMode == oauth.ResponseModeFormPostJwt {
		t, err := template.New("FormPost").Parse(formPostHtml)
		if err != nil {
			return "", err
		}
		buf := &bytes.Buffer{}
		err = t.Execute(buf, b)
		return buf.String(), err
	} else {
		return "", fmt.Errorf("unknown response_mode")
	}
}

func (b RedirectBuilder) IsFormPost() bool {
	return b.responseMode == oauth.ResponseModeFormPost ||
		b.responseMode == oauth.ResponseModeFormPostJwt
}
