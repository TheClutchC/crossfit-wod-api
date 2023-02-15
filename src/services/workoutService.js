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
    try {
      const createdWorkout = Workout.createNewWorkout(workoutToInsert);
      return createdWorkout;
    } catch (error) {
      throw error;
    }
  };

/*---------------- /api/v1/workouts/:workoutId -----------------*/
  
  const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  };
  
  const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  };
  
  const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
  };
  
  module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };