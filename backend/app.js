require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');

// Express server
const app = express();

// Express middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Express Routes
app.use('/api/workouts', workoutRoutes);

// Connecting to Db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listening on port
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log('Connect to the Db & Listening on port', port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
