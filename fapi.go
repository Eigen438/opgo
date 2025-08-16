package opgo

import (
	"net/http"

	"github.com/google/uuid"
)

// FapiResourceEndpointMiddleware is a middleware that handles the x-fapi-interaction-id header for Financial-grade API.
// If the header is not present in the request, it generates a new UUID and adds it to the request and response headers.
func FapiResourceEndpointMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		interactionId := r.Header.Get("x-fapi-interaction-id")
		if interactionId == "" {
			u, err := uuid.NewRandom()
			if err == nil {
				interactionId = u.String()
			}
		}
		w.Header().Set("x-fapi-interaction-id", interactionId)
		next.ServeHTTP(w, r)
	}
}
