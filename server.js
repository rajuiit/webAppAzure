const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/workshop', (req, res) => {
    res.send('We will attend');
  });

app.get('/workshop1', (req, res) => {
res.send('We will attend');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
