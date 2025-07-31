const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  startDate: Date,
  endDate: Date,
  duration: Number,
  capacity: Number,
  agentId: {
    type: String,
    required: true
  }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
