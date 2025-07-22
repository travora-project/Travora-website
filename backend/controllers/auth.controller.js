const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = "7d"; // you can adjust this

const signupUser = async (req, res) => {
  const {
    email,
    fullName,
    mobileNumber,
    password,
    role,
    profileImage,
    dateOfBirth,
    address,
    city,
    state,
    country,
    agencyName,
    agencyAddress,
    bankAccountNumber,
    bankIfsc,
    bankAccountHolderName
  } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { mobileNumber },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        mobileNumber,
        passwordHash: hashedPassword,
        profileImage: profileImage || null,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        status: "active",
      },
    });

    if (role === "agent") {
      await prisma.agent.create({
        data: {
          userId: user.id,
          agencyName,
          agencyAddress,
          bankAccountNumber,
          bankIfsc,
          bankAccountHolderName,
        },
      });
    } else if (role === "customer") {
      await prisma.customer.create({
        data: {
          userId: user.id,
          address: address || "",
          state: state || "",
          city: city || "",
          country: country || "",
        },
      });
    }

    return res.status(201).json({ message: "Signup successful", userId: user.id });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

const loginUser = async (req, res) => {

  const { mobileNumber, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { mobileNumber },

    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });

    }

    await prisma.user.update({
      where: { id: user.id },

      data: { lastLoginAt: new Date() },
    });

    // 🔐 Create JWT token
    const token = jwt.sign(
      { userId: user.id, mobileNumber: user.mobileNumber },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      userId: user.id,
      fullName: user.fullName,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
