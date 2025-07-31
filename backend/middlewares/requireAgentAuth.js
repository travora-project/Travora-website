const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const requireAgentAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get the agent ID from the URL params
    const { id: agentId } = req.params;
    
    // Find the agent and verify it belongs to the authenticated user
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      include: { user: true }
    });

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    // Check if the authenticated user is the owner of this agent profile
    if (agent.userId !== decoded.userId) {
      return res.status(403).json({ message: "Access denied. You can only access your own agent data." });
    }

    // Add agent info to request for use in controllers
    req.agent = agent;
    req.user = { id: decoded.userId };
    
    next();
  } catch (err) {
    console.error("Agent auth error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = requireAgentAuth; 