const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// API endpoint placeholder
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
