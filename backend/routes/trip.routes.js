const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip.controller");

// GET /trips
router.get("/", tripController.getAllTrips);

// GET /trip/:id
router.get("/:id", tripController.getTripById);

module.exports = router;
