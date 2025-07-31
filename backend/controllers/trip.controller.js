const Trip = require("../models/Trip");

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (error) {
    console.error("Failed to fetch trips:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findById(id);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.status(200).json(trip);
  } catch (error) {
    console.error("Failed to fetch trip:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
