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

// --- AI event system ---
const events = [
  {
    id: 'evt1',
    description:
      'Spotykasz tajemniczego przechodnia oferującego szybki zarobek.',
    options: [
      {
        label: 'Przyjmij ofertę',
        resultText: 'Zgadzasz się i zyskujesz trochę gotówki kosztem stresu.',
        effects: { luxury: 10, stress: 15 },
      },
      {
        label: 'Odmów i odejdź',
        resultText: 'Ignorujesz propozycję i zachowujesz spokój.',
        effects: { selfDiscipline: 5, stress: -5 },
      },
    ],
  },
  {
    id: 'evt2',
    description: 'Znajdujesz portfel na chodniku.',
    options: [
      {
        label: 'Zachowaj pieniądze',
        resultText: 'Zatrzymujesz gotówkę, ale czujesz wyrzuty sumienia.',
        effects: { luxury: 5, stress: 5 },
      },
      {
        label: 'Odnies portfel właścicielowi',
        resultText: 'Oddajesz portfel i zyskujesz wdzięczność.',
        effects: { social: 5, selfDiscipline: 2 },
      },
    ],
  },
];

app.post('/api/ai/event', (req, res) => {
  const event = events[Math.floor(Math.random() * events.length)];
  res.json(event);
});

app.post('/api/ai/event/resolve', (req, res) => {
  const { eventId, optionLabel } = req.body;
  const ev = events.find((e) => e.id === eventId);
  if (!ev) return res.status(404).end();
  const option = ev.options.find((o) => o.label === optionLabel);
  if (!option) return res.status(404).end();
  res.json({ resultText: option.resultText, effects: option.effects });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
