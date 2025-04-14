# Local Hosted Service

LocalHostedService is a test provider that allows simple login and returns a single user.

## How to run

1. Get the code to act as an OpenID Connect provider

```sh
git clone https://github.com/Eigen438/opgo.git
cd opgo/examples/LocalHostedService
```

2. Run the following command to start the provider

```sh
PORT=8080 ISSUER=http://localhost:8080 go run main.go
```

3. See how discover endpoints works
```sh
curl http://localhost:8080/.well-known/openid-configuration
```

4. See how jwks endpoints works
 - The opgo automatically generates a private/public key pair.
 - **Please note that the LocalHostedService demo uses volatile memory, so a different key is generated each time it is started.**

```sh
curl http://localhost:8080/.well-known/jwks.json
```

5. Open a browser and log in using the Test UI
 - Enter the following URL into your browser.
> http://localhost:8080/authorize?client_id=default&response_type=id_token&scope=openid%20email&redirect_uri=http://localhost&nonce=12345
 - Follow the instructions on your browser to log in.
 - **Note that the LocalHostedService demo skips checking the redirest_uri.**

6. Extract the id_token from the address bar and decode it with [jwt.io](https://jwt.io/)
 - You should get a result similar to the following.
 - See the source of [pkg/testui](../../pkg/testui) for claims on id_token
```json
{
  "aud": "default",
  "email": "sample@example.com",
  "email_verified": true,
  "exp": 1744559715,
  "iat": 1744556115,
  "iss": "http://localhost:8080",
  "jti": "ea2100ad-f8cc-4ea3-b78b-1b3b85ab851b",
  "nonce": "12345",
  "sub": "abcdef12345"
}
```