const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB congig
const db = require('./congig/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlparser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
