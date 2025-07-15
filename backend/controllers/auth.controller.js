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

module.exports = { signupUser };
