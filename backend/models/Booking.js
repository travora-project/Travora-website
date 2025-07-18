const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String, // Clerk's user ID
    required: true
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  paymentMode: {
    type: String,
    enum: ["PayNow", "PayAfterTrip"],
    default: "PayNow"
  },
  status: {
    type: String,
    enum: ["Booked", "Cancelled"],
    default: "Booked"
  },
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
