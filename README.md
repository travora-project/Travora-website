# Travora Project

This is the official repository for the Travora internship project.

## 🖥️ How to Run

### Frontend

```bash
npm run dev
Backend
bash
npm run dev

🔐 Signup Feature
Accepts POST /api/auth/signup

Creates user in PostgreSQL using Prisma

If role is "agent", also creates empty Agent record

Clerk user ID stored as reference

📦 Features
Express.js server setup

PostgreSQL integration using Prisma

Clerk authentication (user ID reference)

Agent model connected via userId

.env support with environment-based config

🔧 Commands
Install dependencies
bash
npm install
Run development server
bash
npm run dev
Prisma: Migrate and generate client
bash
npx prisma migrate dev --name init
📮 Sample Payload (Signup)
POST /api/auth/signup

json
Copy
Edit
{
  "email": "shruti@example.com",
  "fullName": "Shruti Verma",
  "mobileNumber": "9876501234",
  "clerkUserId": "clerk_456",
  "role": "agent"
}

