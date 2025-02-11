# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where the `express.json()` middleware fails to parse the JSON request body correctly.  The issue and solution are described below.

**Bug:**
The provided Express.js code attempts to parse a JSON request body, but `req.body` remains undefined, preventing proper handling of POST requests with JSON data.  The server may appear to work, but data processing will fail silently.

**Solution:**
The solution involves verifying the correct placement and configuration of `express.json()` middleware.  Ensuring the middleware is used *before* any routes that expect JSON bodies is crucial.