const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const stats = {
  boredom: 5,
  intellect: 5,
  luxury: 5,
  hunger: 5,
  fatigue: 5,
  sleep: 5,
  social: 5,
  love: 5,
  addiction: 0,
  stress: 5
};

const messages = [
  { id: 1, from: 'Szef', subject: 'Witaj w pracy', body: 'Pamiętaj o jutrzejszym spotkaniu.' },
  { id: 2, from: 'Mama', subject: 'Obiad w niedzielę', body: 'Zapraszam na 14:00.' }
];

app.use(express.json());
// Serve static files from the client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// API endpoint placeholder
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.post('/api/stats', (req, res) => {
  Object.assign(stats, req.body);
  res.json(stats);
});

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
