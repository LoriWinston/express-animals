const express = require('express')
const cors = require('cors');
const app = express()
const { animals } = require('./data.js');

app.use(cors())



app.get('/animals', (req, res) => {
  console.log('hello world!')
  res.json({ results: animals });
  
});

app.get('/animals/:id', (req, res) => {
  const id = Number(req.params.id);

const selectedAnimals = animals.find((animal) => animal.id === id);
  res.json({ results: selectedAnimals });
});




module.exports = {
  app 
}