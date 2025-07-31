const { PrismaClient } = require("@prisma/client");
const Booking = require("../models/Booking");
const Trip = require("../models/Trip");

const prisma = new PrismaClient();

// GET /agent/:id/bookings - List all bookings for this agent's trips
exports.getAgentBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const agent = req.agent;

    // Get all trips created by this agent from MongoDB
    const trips = await Trip.find({ agentId: id });
    const tripIds = trips.map(trip => trip._id);

    // Get all bookings for these trips from MongoDB
    const bookings = await Booking.find({
      tripId: { $in: tripIds }
    }).populate('tripId');

    res.status(200).json({
      agent: {
        id: agent.id,
        agencyName: agent.agencyName,
        fullName: agent.user.fullName
      },
      bookings
    });

  } catch (error) {
    console.error("Failed to fetch agent bookings:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /agent/:id/bookings/stats - Count of total bookings
exports.getAgentBookingStats = async (req, res) => {
  try {
    const { id } = req.params;

    // Get all trips created by this agent from MongoDB
    const trips = await Trip.find({ agentId: id });
    const tripIds = trips.map(trip => trip._id);

    // Count total bookings from MongoDB
    const totalBookings = await Booking.countDocuments({
      tripId: { $in: tripIds }
    });

    // Count bookings by status from MongoDB
    const bookedCount = await Booking.countDocuments({
      tripId: { $in: tripIds },
      status: "Booked"
    });

    const cancelledCount = await Booking.countDocuments({
      tripId: { $in: tripIds },
      status: "Cancelled"
    });

    res.status(200).json({
      agentId: id,
      stats: {
        totalBookings,
        bookedCount,
        cancelledCount
      }
    });

  } catch (error) {
    console.error("Failed to fetch agent booking stats:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /agent/:id/earnings - Total completed earnings
exports.getAgentEarnings = async (req, res) => {
  try {
    const { id } = req.params;

    // Get all trips created by this agent from MongoDB
    const trips = await Trip.find({ agentId: id });
    const tripIds = trips.map(trip => trip._id);

    // Get completed bookings from MongoDB
    const completedBookings = await Booking.find({
      tripId: { $in: tripIds },
      status: "Booked"
    }).populate('tripId');

    // Calculate total earnings
    const totalEarnings = completedBookings.reduce((total, booking) => {
      return total + (booking.tripId?.price || 0);
    }, 0);

    res.status(200).json({
      agentId: id,
      totalEarnings,
      completedBookingsCount: completedBookings.length
    });

  } catch (error) {
    console.error("Failed to fetch agent earnings:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /agent/:id/pending-payments - Sum of pending payments
exports.getAgentPendingPayments = async (req, res) => {
  try {
    const { id } = req.params;

    // Get all trips created by this agent from MongoDB
    const trips = await Trip.find({ agentId: id });
    const tripIds = trips.map(trip => trip._id);

    // Get pending payments from MongoDB (PayAfterTrip bookings that are still "Booked")
    const pendingBookings = await Booking.find({
      tripId: { $in: tripIds },
      paymentMode: "PayAfterTrip",
      status: "Booked"
    }).populate('tripId');

    // Calculate total pending amount
    const totalPendingAmount = pendingBookings.reduce((total, booking) => {
      return total + (booking.tripId?.price || 0);
    }, 0);

    res.status(200).json({
      agentId: id,
      totalPendingAmount,
      pendingBookingsCount: pendingBookings.length,
      pendingBookings
    });

  } catch (error) {
    console.error("Failed to fetch agent pending payments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /agent/:id/activities - Agent activity feed
exports.getAgentActivities = async (req, res) => {
  try {
    const { id } = req.params;
    const agent = req.agent;

    // Get recent bookings for this agent's trips from MongoDB
    const trips = await Trip.find({ agentId: id });
    const tripIds = trips.map(trip => trip._id);

    const recentBookings = await Booking.find({
      tripId: { $in: tripIds }
    })
    .populate('tripId')
    .sort({ bookedAt: -1 })
    .limit(10);

    // Format activities
    const activities = recentBookings.map(booking => ({
      type: 'booking',
      action: `New booking for ${booking.tripId?.title || 'Trip'}`,
      userId: booking.userId,
      paymentMode: booking.paymentMode,
      status: booking.status,
      timestamp: booking.bookedAt,
      tripName: booking.tripId?.title
    }));

    // Add agent profile activities (from PostgreSQL)
    const profileActivities = [
      {
        type: 'profile',
        action: 'Agent profile created',
        timestamp: agent.user.createdAt
      }
    ];

    // Combine and sort all activities by timestamp
    const allActivities = [...activities, ...profileActivities]
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.status(200).json({
      agentId: id,
      agentName: agent.user.fullName,
      activities: allActivities
    });

  } catch (error) {
    console.error("Failed to fetch agent activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}; 