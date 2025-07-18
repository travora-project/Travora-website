const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
} = require("../controllers/bookingController");

const { requireAuth } = require("../middlewares/requireAuth");

// 📌 Booking a trip
router.post("/booking", requireAuth, createBooking);

// 📌 Getting all bookings of a user
router.get("/user/trips", requireAuth, getUserBookings);

module.exports = router;
