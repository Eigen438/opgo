# Google Cloud Hosted Service Example

This example demonstrates how to host the OPGO service on Google Cloud Platform.

## Features

- **Cloud Firestore:** Uses Cloud Firestore to persist Issuer, Client, and signing key information.
- **Firebase Authentication:** Leverages Firebase Authentication to manage user information.
- **Cloud Run:** Deploys to Cloud Run to provide redundancy and handle high traffic.

## Configuration

The following environment variables must be set:

- `PROJECT_ID`: The ID of your Google Cloud project.
- `PORT`: The port the service will listen on (default: 8080).
- `ISSUER`: The issuer URL for the service.
- `FIREBASE_API_KEY`: The API key for your Firebase project.
- `FIREBASE_AUTH_DOMAIN`: The authentication domain for your Firebase project.

A default client is created with the following credentials:

- Client ID: `default`
- Client Secret: `secret`

The allowed origins are specified by the `ISSUER` environment variable.

## Endpoints

The following endpoints are available:

- `/api/login`: Login endpoint. Requires a Bearer token in the Authorization header.
- `/web`: Static web files.
- `/api/config.json`: Firebase configuration.
- `/`: Static web files.

## Login

The login process requires a Bearer token in the Authorization header. After successful authentication, the server returns either a redirect URL or HTML content.