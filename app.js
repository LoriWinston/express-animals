const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/animals', (req, res) => {
  res.json({ results: animals });
});

module.exports = {
    app
}