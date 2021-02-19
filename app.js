const express = require('express')
const cors = require('cors');
const app = express()
const { animals } = require('./data.js');

app.use(cors())



app.get('/animals', (req, res) => {
  console.log('hello world!')
  res.json({ results: animals });
  
});

// app.get('/animals/:id', (req, res) => {
//   res.json({ results: animals });
// });

// const id = req.params.id;

// const selectedAnimals = animals.find((animal) => animal.id === id);


module.exports = {
  app 
}