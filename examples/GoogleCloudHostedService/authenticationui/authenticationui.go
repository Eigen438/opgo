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

package authenticationui

import (
	"context"
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"

	firebase "firebase.google.com/go"
	"github.com/Eigen438/opgo"
	"github.com/Eigen438/opgo/pkg/httphelper"
)

func SetupMux(mux *http.ServeMux) {
	mux.HandleFunc("/web", indexHtmlHandler)
	mux.HandleFunc("/api/config.json", configHandler)
	mux.HandleFunc("/", webHandler)
}

//go:embed web/index.html
var indexHtml []byte

//go:embed all:web
var webFiles embed.FS

func indexHtmlHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set(httphelper.HeaderCacheControl, "no-cache, no-store, max-age=0, must-revalidate")
	w.Header().Set(httphelper.HeaderContentType, httphelper.MimeTypeTextHtml+httphelper.DefaultCharSet)
	w.Write(indexHtml)
}

func webHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set(httphelper.HeaderCacheControl, "no-cache, no-store, max-age=0, must-revalidate")
	web, _ := fs.Sub(webFiles, "web")
	fileServer := http.FileServer(http.FS(web))
	fileServer.ServeHTTP(w, r)
}

// configHandler
//
// Implement a handler to provide environment variables to the frontend
// created as a single-page application.
func configHandler(w http.ResponseWriter, r *http.Request) {
	type config struct {
		ApiKey     string `json:"apiKey"`
		AuthDomain string `json:"authDomain"`
	}
	w.Header().Set(httphelper.HeaderCacheControl, "no-cache, no-store, max-age=0, must-revalidate")
	w.Header().Set(httphelper.HeaderContentType, httphelper.MimeTypeJson+httphelper.DefaultCharSet)
	apiKey := os.Getenv("FIREBASE_API_KEY")
	authDomain := os.Getenv("FIREBASE_AUTH_DOMAIN")

	if apiKey == "" || authDomain == "" {
		log.Println("FIREBASE_API_KEY or FIREBASE_AUTH_DOMAIN is not set")
		http.Error(w, "Firebase configuration is not set", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(config{
		ApiKey:     apiKey,
		AuthDomain: authDomain,
	})
}

// LoginHandler
//
// Firebase handles authentication on the frontend,
// and the authentication result (ID token) is used to construct the opgo flow.
func LoginHandler(s opgo.Sdk) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		accessToken := ""
		authHeader := r.Header.Get("Authorization")
		if authHeader != "" {
			authHeaderStrings := strings.Split(authHeader, " ")
			if len(authHeaderStrings) == 2 && strings.ToLower(authHeaderStrings[0]) == "bearer" {
				// Authorizationヘッダから取得
				accessToken = authHeaderStrings[1]
			} else {
				log.Println("Invalid Authorization header format")
				http.Error(w, "Invalid Authorization header format", http.StatusUnauthorized)
				return
			}
		} else {
			log.Println("Authorization header is missing")
			http.Error(w, "Authorization header is missing", http.StatusUnauthorized)
			return
		}
		type input struct {
			RequestId string `json:"requestId"`
		}
		ctx := r.Context()
		i := &input{}
		json.NewDecoder(r.Body).Decode(i)

		app, err := firebase.NewApp(ctx, nil)
		if err != nil {
			log.Printf("firebase.NewApp error: %v", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		auth, err := app.Auth(ctx)
		if err != nil {
			log.Printf("app.Auth error: %v", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		token, err := auth.VerifyIDToken(ctx, accessToken)
		if err != nil {
			log.Printf("auth.VerifyIDToken error: %v", err)
			http.Error(w, "Authentication failed", http.StatusUnauthorized)
			return
		}

		issue := &opgo.IssueRequest{
			RequestId: i.RequestId,
			Subject:   token.Subject,
		}
		s.StartSession(issue).ServeHTTP(w, r)
		res, err := s.AuthorizationIssue(ctx, issue)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		if out := res.GetRedirect(); out != nil {
			type redirect struct {
				Url string `json:"url"`
			}
			json.NewEncoder(w).Encode(redirect{
				Url: out.Url,
			})
			return
		} else if out := res.GetHtml(); out != nil {
			for k, v := range httphelper.DefaultHtmlHeader() {
				w.Header().Set(k, v)
			}
			w.Write([]byte(out.Content))
			return
		}
	}
}

type Callbacks struct{}

func (c Callbacks) WriteLoginHtmlCallback(param *opgo.WriteHtmlParam) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		u := r.URL
		q := u.Query()
		q.Add("request_id", param.RequestId)
		http.Redirect(w, r, "/web?"+q.Encode(), http.StatusFound)
	}
}

func (Callbacks) GetUserClaimsCallback(ctx context.Context, subject string) (string, error) {
	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		return "", err
	}
	auth, err := app.Auth(ctx)
	if err != nil {
		return "", err
	}
	u, err := auth.GetUser(ctx, subject)
	if err != nil {
		return "", err
	}

	// Construct claims based on Firebase Authentication user information and custom data.
	claims := map[string]interface{}{}
	claims["name"] = u.DisplayName
	claims["email"] = u.Email
	claims["email_verified"] = u.EmailVerified
	claims["phone_number"] = u.PhoneNumber
	b, err := json.Marshal(claims)
	if err != nil {
		return "", err
	}
	return string(b), nil
}
