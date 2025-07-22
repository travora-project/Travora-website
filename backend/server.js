const express = require("express");
const cors = require("cors");
require("dotenv").config();

const prisma = require("./prisma/client"); // ✅ Prisma Client
const connectDB = require("./config/db");  // Optional MongoDB connection
const authRoutes = require("./routes/auth.routes.js");

const tripRoutes = require("./routes/trip.routes");

const bookingRoutes = require("./routes/booking.routes.js");


const app = express();

// Optional: connect to MongoDB (if used)
connectDB();

// 🔐 Middleware
app.use(cors());
app.use(express.json());

// 📌 Routes
app.use("/api/auth", authRoutes);     // 🔐 Login/Signup (JWT-based)
app.use("/api", bookingRoutes);       // Other APIs


app.use("/trips", tripRoutes);


// 🔍 Add this test route

// ✅ Health Check

app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// 🧠 Connect to PostgreSQL via Prisma and start server
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ PostgreSQL (Auth DB) connected via Prisma");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to PostgreSQL (Auth DB):", err.message);
    process.exit(1);
  }
}

startServer();
