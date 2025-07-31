const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agent.controller");
const requireAgentAuth = require("../middlewares/requireAgentAuth");

// All agent routes require authentication and authorization
// GET /agent/:id/bookings - List all bookings for this agent's trips
router.get("/:id/bookings", requireAgentAuth, agentController.getAgentBookings);

// GET /agent/:id/bookings/stats - Count of total bookings
router.get("/:id/bookings/stats", requireAgentAuth, agentController.getAgentBookingStats);

// GET /agent/:id/earnings - Total completed earnings
router.get("/:id/earnings", requireAgentAuth, agentController.getAgentEarnings);

// GET /agent/:id/pending-payments - Sum of pending payments
router.get("/:id/pending-payments", requireAgentAuth, agentController.getAgentPendingPayments);

// GET /agent/:id/activities - Agent activity feed
router.get("/:id/activities", requireAgentAuth, agentController.getAgentActivities);

module.exports = router; 