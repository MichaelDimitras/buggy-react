const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/characters', (req, res) => {
  axios.get('https://swapi.co/api/characters')
    .then(apiRes => res.json(apiRes.data))
    .catch(err => console.error('Error connecting to API', err));
});

app.listen(3000);
