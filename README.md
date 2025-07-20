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
for agent
request body
{
  "email": "agent.com",
  "fullName": "Agent",
  "mobileNumber": "9711100481",
  "password": "123456",
  "role": "agent",
  "profileImage": "https://example.com/profile.jpg",
  "dateOfBirth": "1995-08-15",
  "agencyName": "Travora Explorers",
  "agencyAddress": "123, MG Road, Delhi",
  "bankAccountNumber": "123456789012",
  "bankIfsc": "SBIN0001234",
  "bankAccountHolderName": "Adarsh Kumar"
}

for customer
{
  "email": "customer.com",
  "password": "123456",
  "fullName": "John Doe",
  "mobileNumber": "9835630055",
  "role": "customer",
  "address": "123 Main Street",
  "city": "Delhi",
  "state": "Delhi",
  "country": "India"
}

For Login
POST /api/auth/login

request body
{
  
   "mobileNumber": "9835630055",
  "password": "123456"
}



Booking a Trip
POST /api/booking
Books a trip for the logged-in user with the role of customer.

🔐 Authorization Required
✅ JWT Token in Authorization header (Bearer token)

❌ Only customers are allowed to book

📥 Request Headers
http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
📤 Request Body
json

{
  "tripId": "687c7fa5f77bfc9fd9d5270e"
}
tripId (string, required): ID of the trip the user wants to book.

✅ Success Response
Status: 201 Created

json
{
  "message": "Trip booked successfully",
  "booking": {
    "_id": "64d9a9cf7f1b7f08f98d2f19",
    "tripId": "687c7fa5f77bfc9fd9d5270e",
    "userId": "5f8d0d55b54764421b7156c2",
    "createdAt": "2025-07-20T12:34:56.789Z"
  }
}


