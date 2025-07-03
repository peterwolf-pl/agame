const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// API endpoint placeholder
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Simple AI event endpoint placeholder
app.post('/api/ai/event', (req, res) => {
  const events = [
    {
      text: 'Spotykasz tajemniczego przechodnia oferującego szybki zarobek.',
      options: [
        { id: 'accept', description: 'Przyjmij ofertę' },
        { id: 'decline', description: 'Odmów i odejdź' },
      ],
    },
    {
      text: 'Znajdujesz portfel na chodniku.',
      options: [
        { id: 'keep', description: 'Zachowaj pieniądze' },
        { id: 'return', description: 'Odnies portfel właścicielowi' },
      ],
    },
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  res.json(event);
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
