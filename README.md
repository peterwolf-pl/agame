# ADHD Life Template

This repository provides a basic setup for a browser-based life simulator built with React and Node.js. It includes:

- **client/** – a React + TypeScript app created with Vite.
- **server/** – a minimal Express server serving the built client and an example API endpoint.

## Development

1. **Install dependencies before running any other commands**:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
   If you encounter an error like `Cannot find package 'vite'`, it typically means the dependencies were not installed.
2. Run the client in development mode:
   ```bash
   cd client
   npm run dev
   ```
3. In another terminal, start the server for API access during development:
   ```bash
   cd server
   npm start # or `node index.js`
   ```
4. Build the client and start the server:
   ```bash
   cd client && npm run build
   cd ../server && npm start
   ```

The server serves the compiled client from `client/dist` and exposes a sample API endpoint at `/api/hello`.
