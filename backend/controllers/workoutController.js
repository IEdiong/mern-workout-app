const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

// Get all workouts
const getWorkouts = async (req, res) => {
  // Query the db for all workouts
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  if (!workouts.length) {
    res.status(100).json({ msg: 'There are no workouts' });
  }
  // Return all workouts

  res.status(200).json(workouts);
};

// Create a workout
const createWorkout = async (req, res) => {
  // Get the data sent from the client
  const { title, reps, load } = req.body;

  // empty fields check
  const emptyFields = [];
  if (!title) emptyFields.push('title');
  if (!reps) emptyFields.push('reps');
  if (!load) emptyFields.push('load');

  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ msg: 'Please fill in all fields', emptyFields });

  // try
  try {
    // Create a workout with the data sent from client
    // Update the db with the new workout
    const workout = await Workout.create({ title, reps, load });

    // Send a response back to the client
    res.status(200).json(workout);
    // catch
  } catch (err) {
    // Send a response back to the client
    res.status(404).json({ msg: err.message });
  }
};

// Get a single workout
const getWorkout = async (req, res) => {
  // Get the id of the workout from the client
  const { id } = req.params;

  // Confirm that the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'Resource not found' });
  }

  // query the db for the workout with the id
  const workout = await Workout.findById(id);

  // if workout does not exist
  if (!workout) {
    return res.status(404).json({ msg: err.message });
  }

  // if all goes well send back the workout
  res.status(200).json(workout);
};

// Delete a single workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'This resource does not exist!!' });
  }

  const workout = await Workout.findByIdAndDelete(id);

  if (!workout) {
    return res.status(404).json({ msg: 'This resource does not exist!!' });
  }

  res.status(200).json(workout);
};

// Update a single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'This resource does not exist!! ' });
  }

  const workout = await Workout.findByIdAndUpdate(id, {
    ...req.body,
  });

  if (!workout) {
    return res
      .status(404)
      .json({ msg: 'There resource does not exist in the db' });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
