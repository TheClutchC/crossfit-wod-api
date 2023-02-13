const workoutService = require('../services/workoutService');

/*---------------- /api/v1/workouts -----------------*/

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send("Get all workouts");
  };
  
  const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout");
  };

  /*---------------- /api/v1/workouts/:workoutId -----------------*/

  const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
  };
  
  
  const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };