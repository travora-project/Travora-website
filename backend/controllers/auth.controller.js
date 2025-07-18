const prisma = require("../prisma/client.js");

const signupUser = async (req, res) => {
  try {
    const { email, fullName, mobileNumber, clerkUserId, role } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        mobileNumber,
        clerkId: clerkUserId,
        passwordHash: "", // Optional: depends on your Clerk integration
        status: "active",
      },
    });

    if (role === "agent") {
      await prisma.agent.create({
        data: {
          userId: user.id,
          agencyName: "Default Agency",
          agencyAddress: "N/A",
          bankAccountNumber: "0000000000",
          bankIfsc: "IFSC0000000",
          bankAccountHolderName: fullName,
        },
      });
    }

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, clerkUserId } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { clerkId: clerkUserId }
        ]
      },
      include: {
        agent: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.status !== "active") {
      return res.status(403).json({ message: "Account is not active" });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    const { passwordHash, ...userWithoutPassword } = user;
    
    res.status(200).json({ 
      message: "Login successful", 
      user: userWithoutPassword,
      role: user.agent ? "agent" : "user"
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = { signupUser, loginUser };
