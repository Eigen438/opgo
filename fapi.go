package opgo

import (
	"net/http"

	"github.com/google/uuid"
)

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
