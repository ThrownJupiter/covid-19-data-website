# OneLogin OpenId Connect Authorization Code Flow Sample

The sample is an [Express.js](https://expressjs.com/) app that uses
[Passport.js](http://www.passportjs.org/) and the [Passport-OpenIdConnect](https://github.com/jaredhanson/passport-openidconnect)
module for managing user authentication.

The sample tries to keep everything as simple as possible so only
implements

- Login - redirecting users to OneLogin for authentication
- Logout - destroying the local session and revoking the token at OneLogin
- User Info - fetching profile information from OneLogin
- Test - displaying test datatables.

## Setup

Get the .env file from me.

1. Clone this repo
2. Put the `.env` file in the root directory.

## Run

This sample uses an express app running on nodejs.

From the command line run

```
> npm install
> npm start
```

### Local testing

By default these samples will run on `http://localhost:3000`.

Taken from `https://github.com/onelogin/onelogin-oidc-node/tree/master/1.%20Auth%20Flow#setup`.
