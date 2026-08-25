# Bengal-IT Official

Official Website and Portal for **Bengal-IT**, built with **Next.js**, **Express.js**, **Node.js**, and **MongoDB**.

## Project Architecture

```
Bengal-it-official/
├── client/          # Next.js App Router (Frontend)
├── server/          # Express.js REST API Server (Backend)
└── package.json     # Root npm orchestration
```

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local server or MongoDB Atlas connection string)

### 2. Installation
Install dependencies for root, client, and server at once:
```bash
npm run install:all
```

### 3. Environment Variables
Create a `.env` file inside the `server/` directory based on `server/.env.example`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bengal_it
NODE_ENV=development
JWT_SECRET=bengalit_secret_key_change_in_production
```

### 4. Running the Development Server
Run both Next.js frontend and Express backend concurrently:
```bash
npm run dev
```

- **Frontend (Next.js)**: [http://localhost:3000](http://localhost:3000)
- **Backend API (Express)**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### 5. Running Individually
- **Client only**: `npm run dev:client`
- **Server only**: `npm run dev:server`

## Tech Stack
- **Frontend**: Next.js 14, React 18, Custom CSS Tokens & Glassmorphism Design, Lucide Icons
- **Backend**: Node.js, Express.js, Cors, Dotenv
- **Database**: MongoDB with Mongoose ORM
