const express = require('express');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout } = require('../controllers/workoutController');

const router = express.Router();

// GET all the workouts
router.get('/', getWorkouts);

// POST a new workout
router.post('/', createWorkout);

// GET a single workout
router.get('/:id', getWorkout);

// DELETE a single workout
router.delete('/:id', deleteWorkout);

// UPDATE a single workout
router.patch('/:id', (req, res) => {
  res.send({ msg: 'Updates a single workout' });
});

module.exports = router;
