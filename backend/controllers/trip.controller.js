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
