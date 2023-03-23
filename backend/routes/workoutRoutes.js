const express = require('express');

const router = express.Router();

// Get all the workouts
router.get('/', (req, res) => {
  res.send({ msg: 'Returns all workout' });
});

// Create a new workout
router.post('/', (req, res) => {
  res.send({ msg: 'Creates a new workout' });
});

// Get a single workout
router.get('/:id', (req, res) => {
  res.send({ msg: 'Returns a single workout' });
});

// Delete a single workout
router.delete('/:id', (req, res) => {
  res.send({ msg: 'Deletes a single workout' });
});

// Update a single workout
router.patch('/:id', (req, res) => {
  res.send({ msg: 'Updates a single workout' });
});

module.exports = router;
