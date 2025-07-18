const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip.controller");

// GET /trips
router.get("/", tripController.getAllTrips);

module.exports = router;
