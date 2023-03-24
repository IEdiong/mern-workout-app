const Workout = require('../models/workoutModel');

// Get all workouts
const getWorkouts = async (req, res) => {
  // Query the db for all workouts
  // Return all workouts
};

// Create a workout
const createWorkout = async (req, res) => {
  // Get the data sent from the client
  const { title, reps, load } = req.body;

  // try
  try {
    // Create a workout with the data sent from client
    // Update the db with the new workout
    const workout = await Workout.create({ title, reps, load });

    // Send a response back to the client
    res.status(200).send(workout);
  } catch (err) {
    res.status(404).send({ msg: err.message });
  }

  // catch
  // Send a response back to the client
};

// Get a single workout

// Delete a single workout

// Update a single workout

module.exports = {
  getWorkouts,
  createWorkout,
};
