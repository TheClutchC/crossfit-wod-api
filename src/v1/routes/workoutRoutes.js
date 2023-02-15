const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const router = express.Router();

/*---------------- /api/v1/workouts -----------------*/

router.get("/", workoutController.getAllWorkouts);

router.post("/", workoutController.createNewWorkout);

/*---------------- /api/v1/workouts/:workoutId -----------------*/

router.get("/:workoutId", workoutController.getOneWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

/*------------ /api/v1/workouts/:workoutId/records --------------*/

router.get("/:workoutId/records", recordController.getRecordForWorkout);

module.exports = router;