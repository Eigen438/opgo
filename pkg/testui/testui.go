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

// Package testui is a simple user interface for testing opgo.
package testui

import (
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/Eigen438/opgo"
)

//go:embed login.html
var loginHtml []byte

type indexParams struct {
	IsShowMessage bool
	Message       string
	RequestInfo   *opgo.RequestInfo
}

func (p *indexParams) writeLoginHtml(w http.ResponseWriter) {
	t := template.Must(template.New("default").Parse(string(loginHtml)))
	if err := t.Execute(w, p); err != nil {
		log.Printf("t.Execute err:" + err.Error())
	}
}

func CancelHandler(s opgo.Sdk) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		requestId := r.FormValue("request_id")
		s.AuthorizationCancel(w, r, requestId)
	}
}

func LoginHandler(s opgo.Sdk) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		requestId := r.FormValue("request_id")

		if r.FormValue("username") == "user" && r.FormValue("password") == "pass" {
			s.AuthorizationIssue(w, r, requestId, "abcdef12345")
		} else {
			c := Callbacks{
				IsShowMessage: true,
				Message:       "Username or password is incorrect.",
			}
			s.WriteLoginHtml(w, r, requestId, c)
		}
	}
}

type Callbacks struct {
	IsShowMessage bool
	Message       string
}

func (c Callbacks) WriteLoginHtmlCallback(info *opgo.RequestInfo) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		p := indexParams{
			IsShowMessage: c.IsShowMessage,
			Message:       c.Message,
			RequestInfo:   info,
		}
		p.writeLoginHtml(w)
	}
}

func (Callbacks) GetUserClaimsCallback(_ context.Context, subject string) (string, error) {
	if subject == "abcdef12345" {
		c := map[string]interface{}{
			"acr": "urn:mace:incommon:iap:silver",
			"address": map[string]string{
				"street_address": "1234 Hollywood Blvd.",
				"locality":       "Los Angeles",
				"region":         "CA",
				"postal_code":    "90210",
				"country":        "US",
			},
			"email":                 "sample@example.com",
			"email_verified":        true,
			"phone_number":          "1234-5678",
			"phone_number_verified": true,
			"name":                  "Jane Doe",
			"given_name":            "Jane",
			"family_name":           "Doe",
			"middle_name":           "Doe",
			"nickname":              "Jane",
			"preferred_username":    "j.doe",
			"profile":               "http://example.com/janedoe/me.md",
			"picture":               "http://example.com/janedoe/me.jpg",
			"website":               "http://example.com/janedoe",
			"gender":                "male",
			"birthdate":             "0000-03-22",
			"zoneinfo":              "America/Chicago",
			"locale":                "en",
			"updated_at":            time.Now().Unix(),
		}
		b, err := json.Marshal(c)
		if err != nil {
			return "", err
		}
		return string(b), nil
	} else {
		return "", fmt.Errorf("not found")
	}
}
