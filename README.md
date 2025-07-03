# ADHD Life Template

This repository provides a basic setup for a browser-based life simulator built with React and Node.js. It includes:

- **client/** – a React + TypeScript app created with Vite.
- **server/** – a minimal Express server serving the built client and an example API endpoint.

## Development

1. Install dependencies for both `client` and `server`:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
2. Run the client in development mode:
   ```bash
   cd client
   npm run dev
   ```
3. Build the client and start the server:
   ```bash
   cd client && npm run build
   cd ../server && npm start
   ```

The server serves the compiled client from `client/dist` and exposes a sample API endpoint at `/api/hello`.
It also provides an in-memory `/api/stats` endpoint used by the **Zdrowie** app
and a `/api/messages` endpoint used by the new **Mail** app.
