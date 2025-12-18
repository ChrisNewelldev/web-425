const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const factions = [
  { id: 1, name: 'Iron Brotherhood', description: 'Warriors guild' },
  { id: 2, name: 'Shadow Circle', description: 'Rogues and spies' },
  { id: 3, name: 'Arcane Order', description: 'Mages and scholars' }
];

app.get('/api/character-factions', (req, res) => {
  res.json(factions);
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
