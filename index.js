const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;

const { animals } = require('./data.js');

app.use(cors())



app.get('/animals', (req, res) => {
  res.json({ results: animals });
});

app.get('/animals/:id', (req, res) => {
  res.json({ results: animals });
});

const id = req.params.id;

const selectedAnimals = animals.find((animal) => animal.id === id);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
console.log('hello');

module.exports = {
  app 
};