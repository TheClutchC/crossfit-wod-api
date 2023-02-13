const express = require("express");
const workoutController = require("../../controllers/workoutController");
const router = express.Router();

/*---------------- /api/v1/workouts -----------------*/

router.get("/", workoutController.getAllWorkouts);

router.post("/", workoutController.createNewWorkout);

/*---------------- /api/v1/workouts/:workoutId -----------------*/

router.get("/:workoutId", workoutController.getOneWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;