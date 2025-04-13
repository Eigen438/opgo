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

package oauth

const (
	// https://www.rfc-editor.org/rfc/rfc6749.txt
	// 4.1.2.1 Error Response
	//
	// The request is missing a required parameter, includes an
	// invalid parameter value, includes a parameter more than
	// once, or is otherwise malformed.
	AuthorizationErrorInvalidRequest string = "invalid_request"
	// The client is not authorized to request an authorization
	// code using this method.
	AuthorizationErrorUnauthorizedClient string = "unauthorized_client"
	// The resource owner or authorization server denied the
	// request.
	AuthorizationErrorAccessDenied string = "access_denied"
	// The authorization server does not support obtaining an
	// authorization code using this method.
	AuthorizationErrorUnsupportedResponseType string = "unsupported_response_type"
	// The requested scope is invalid, unknown, or malformed.
	AuthorizationErrorInvalidScope string = "invalid_scope"
	// The authorization server encountered an un
	// condition that prevented it from fulfilling the request.
	// (This error code is needed because a 500 Internal Server
	// Error HTTP status code cannot be returned to the client
	// via an HTTP redirect.)
	AuthorizationErrorServerError string = "server_error"
	// The authorization server is currently unable to handle
	// the request due to a temporary overloading or maintenance
	// of the server.  (This error code is needed because a 503
	// Service Unavailable HTTP status code cannot be returned
	// to the client via an HTTP redirect.)
	AuthorizationErrorTemporarilyUnavailable string = "temporarily_unavailable"
	// https://openid.net/specs/openid-connect-core-1_0.html#AuthError
	// 3.1.2.6. Authentication Error Response
	//
	// The Authorization Server requires End-User interaction of some
	// form to proceed. This error MAY be returned when the prompt
	// parameter value in the Authentication Request is none, but the
	// Authentication Request cannot be completed without displaying a
	// user interface for End-User interaction.
	AuthorizationErrorInteractionRequired string = "interaction_required"
	// The Authorization Server requires End-User authentication. This
	// error MAY be returned when the prompt parameter value in the
	// Authentication Request is none, but the Authentication Request
	// cannot be completed without displaying a user interface for End-
	// User authentication.
	AuthorizationErrorLoginRequired string = "login_required"
	// The End-User is REQUIRED to select a session at the Authorization
	// Server. The End-User MAY be authenticated at the Authorization
	// Server with different associated accounts, but the End-User did not
	// select a session. This error MAY be returned when the prompt
	// parameter value in the Authentication Request is none, but the
	// Authentication Request cannot be completed without displaying a
	// user interface to prompt for a session to use.
	AuthorizationErrorAccountSelectionRequired string = "account_selection_required"
	// The Authorization Server requires End-User consent. This error MAY
	// be returned when the prompt parameter value in the Authentication
	// Request is none, but the Authentication Request cannot be
	// completed without displaying a user interface for End-User consent.
	AuthorizationErrorConsentRequired string = "consent_required"
	// The request_uri in the Authorization Request returns an error or
	// contains invalid data.
	AuthorizationErrorInvalidRequestUri string = "invalid_request_uri"
	// The request parameter contains an invalid Request Object.
	AuthorizationErrorInvalidRequestObject string = "invalid_request_object"
	// The OP does not support use of the request parameter defined in
	// Section 6.
	AuthorizationErrorRequestNotSupported string = "request_not_supported"
	// The OP does not support use of the request_uri parameter defined
	// in Section 6.
	AuthorizationErrorRequestUriNotSupported string = "request_uri_not_supported"
	// The OP does not support use of the registration parameter
	// defined in Section 7.2.1.
	AuthorizationErrorRegistrationNotSupported string = "registration_not_supported"
)
