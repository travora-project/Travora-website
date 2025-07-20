const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  startDate: Date,
  endDate: Date,
  capacity: Number,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
