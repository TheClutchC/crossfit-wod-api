const Workout = require('../database/Workout')

/*---------------- /api/v1/workouts -----------------*/

  const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  };
  
  const createNewWorkout = () => {
    return;
  };

  /*---------------- /api/v1/workouts/:workoutId -----------------*/
  
  const getOneWorkout = () => {
    return;
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };