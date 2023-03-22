require('dotenv').config();
const express = require('express');

// Express server
const app = express();

// Express middleware
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Express Routes
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to our express app!' });
});

// Listening on port
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Listening on port', port);
});
