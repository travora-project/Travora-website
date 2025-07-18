const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const { tripId, paymentMode } = req.body;

    if (!tripId) {
      return res.status(400).json({ message: "Trip ID is required" });
    }

    const booking = await Booking.create({
      userId,
      tripId,
      paymentMode,
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Failed to book trip" });
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
