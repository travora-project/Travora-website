const Booking = require("../models/Booking");
const Trip = require("../models/Trip");


const createBooking = async (req, res) => {
  try {
    const { tripId, paymentMode } = req.body;
    const userId = req.user?.id;

    console.log("Received booking request with tripId:", tripId, "and userId:", userId);

    if (!tripId || !paymentMode) {
      return res.status(400).json({ message: "Trip ID and payment mode are required" });
    }

    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    const existingBooking = await Booking.findOne({ userId, tripId });
    if (existingBooking) {
      return res.status(409).json({ message: "You have already booked this trip" });
    }

    const booking = await Booking.create({
      userId,
      tripId,
      paymentMode,
    });

    return res.status(201).json({ message: "Trip booked successfully", booking });

  } catch (error) {
    console.error("❌ Booking error:", error);  // full object
    return res.status(500).json({ message: "Failed to book trip" });
  }
};


const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ userId }).populate("tripId");

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Get Bookings Error:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
};
