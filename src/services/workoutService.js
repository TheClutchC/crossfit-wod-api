const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

/*---------------- /api/v1/workouts -----------------*/

  const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    };
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
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
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };