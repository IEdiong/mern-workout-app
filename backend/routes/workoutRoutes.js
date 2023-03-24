const express = require('express');
const { createWorkout } = require('../controllers/workoutController');

const router = express.Router();

// GET all the workouts
router.get('/', (req, res) => {
  res.send({ msg: 'Returns all workout' });
});

// POST a new workout
router.post('/', createWorkout);

// GET a single workout
router.get('/:id', (req, res) => {
  res.send({ msg: 'Returns a single workout' });
});

// DELETE a single workout
router.delete('/:id', (req, res) => {
  res.send({ msg: 'Deletes a single workout' });
});

// UPDATE a single workout
router.patch('/:id', (req, res) => {
  res.send({ msg: 'Updates a single workout' });
});

module.exports = router;
