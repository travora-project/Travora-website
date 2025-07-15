const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connectToPrisma() {
  try {
    await prisma.$connect();
    console.log("✅ PostgreSQL (Auth DB) connected via Prisma");
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL (Auth DB):", error.message);
  }
}

connectToPrisma();

module.exports = prisma;
