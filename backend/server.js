const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// 🔍 Add this test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
