const express = require('express');

const app = express();

// DB congig
const db = require('./congig/keys').mongoURI;

app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
