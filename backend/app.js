require('dotenv').config();
const express = require('express');
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

// Listening on port
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Listening on port', port);
});
