const express = require('express');
const mongoose = require('mongoose');

// initializing routes
const users = require('./routes/api/users');

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

app.get('/', (req, res) => res.send('Hello world-again!'));

// use Routes
app.use('/api/users', users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
