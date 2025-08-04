 # Travora Project

This is the official repository for the Travora internship project. The project consists of a frontend and backend working together to provide a travel booking platform.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Booking](#booking)
  - [Other Endpoints](#other-endpoints)
- [Development Notes](#development-notes)
- [Sample Requests](#sample-requests)

---

## Project Overview

- **Backend:** Node.js with Express, PostgreSQL (via Prisma), Clerk for authentication.
- **Frontend:** See `/frontend` for details.
- **Main features:**
  - User signup/login (with agent and customer roles)
  - Trip booking for customers
  - Agent profile management

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

#### Environment Variables

Ensure you have a `.env` file configured with your PostgreSQL credentials, Clerk keys, and any other required secrets.

#### Prisma

To migrate and generate the Prisma client:

```bash
npx prisma migrate dev --name init
```

---

## API Endpoints

### Authentication

#### Signup

- **URL:** `POST /api/auth/signup`
- **Body** (example for agent):

```json
{
  "email": "agent@example.com",
  "fullName": "Agent Name",
  "mobileNumber": "9711100481",
  "password": "yourpassword",
  "role": "agent",
  "profileImage": "https://example.com/profile.jpg",
  "dateOfBirth": "1995-08-15",
  "agencyName": "Travora Explorers",
  "agencyAddress": "123, MG Road, Delhi",
  "bankAccountNumber": "123456789012",
  "bankIfsc": "SBIN0001234",
  "bankAccountHolderName": "Adarsh Kumar"
}
```

- **Body** (for customer):

```json
{
  "email": "customer@example.com",
  "password": "yourpassword",
  "fullName": "John Doe",
  "mobileNumber": "9835630055",
  "role": "customer",
  "address": "123 Main Street",
  "city": "Delhi",
  "state": "Delhi",
  "country": "India"
}
```

#### Login

- **URL:** `POST /api/auth/login`
- **Body:**

```json
{
  "mobileNumber": "9835630055",
  "password": "yourpassword"
}
```

---

### Booking

#### Book a Trip

- **URL:** `POST /api/booking`
- **Authorization:** Bearer JWT token required (customer role only)
- **Body:**

```json
{
  "tripId": "TRIP_ID"
}
```

- **Response:**

```json
{
  "message": "Trip booked successfully",
  "booking": {
    "_id": "BOOKING_ID",
    "tripId": "TRIP_ID",
    "userId": "USER_ID",
    "createdAt": "2025-07-20T12:34:56.789Z"
  }
}
```

---

### Other Endpoints

_Add documentation for additional endpoints here as your backend grows, e.g., agent profile update, trip CRUD, etc._

---

## Development Notes

- Uses Express for API.
- PostgreSQL via Prisma ORM.
- Clerk for authentication and user management.
- Agent and customer roles are handled distinctly.
- All environment-specific configuration is managed via `.env` files.

---

## Sample Requests

#### Signup (Agent)

```bash
curl -X POST http://localhost:PORT/api/auth/signup \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

#### Login

```bash
curl -X POST http://localhost:PORT/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

#### Book a Trip

```bash
curl -X POST http://localhost:PORT/api/booking \
  -H 'Authorization: Bearer <JWT_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{ "tripId": "TRIP_ID" }'
```

---

## Contributing

If you are new to this project, please read through this README and familiarize yourself with the API and project structure before contributing.

---

## License

_Include your license here if applicable._

---
