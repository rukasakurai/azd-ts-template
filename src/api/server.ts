import express = require('express');
import cors = require('cors');

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

// Simple GET endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API server listening at http://localhost:${port}`);
});
