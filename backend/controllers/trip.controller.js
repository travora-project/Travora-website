const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany({
      include: {
        agent: true,
      },
    });
    res.status(200).json(trips);
  } catch (error) {
    console.error("Failed to fetch trips:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await prisma.trip.findUnique({
      where: { id },
      include: { agent: true },
    });
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.status(200).json(trip);
  } catch (error) {
    console.error("Failed to fetch trip:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
