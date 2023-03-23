const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

// GET all the workouts
router.get('/', (req, res) => {
  res.send({ msg: 'Returns all workout' });
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title: title, reps: reps, load: load });
    res.status(200).send(workout);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

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
