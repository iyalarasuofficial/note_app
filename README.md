Notes Application
Project Overview
This is a full-stack Notes application with a Flutter frontend and a Node.js + Express backend connected to a PostgreSQL database hosted on Supabase. Users can add, edit, delete, and mark notes as complete. Notes are stored persistently in the PostgreSQL database.

Features
Add, edit, delete notes

Mark notes as done/undone

Notes stored and retrieved from remote PostgreSQL DB

Secure database connection using environment variables

Cross-origin support with CORS for frontend-backend communication

Technologies Used
Frontend: Flutter

Backend: Node.js, Express, pg (PostgreSQL client)

Database: PostgreSQL (hosted on Supabase)

Environment & Deployment: dotenv for config, CORS middleware

Setup Instructions
Backend Setup
Clone the repo and navigate to the backend folder.

Create a .env file with your PostgreSQL credentials:

text
PG_USER=postgres
PG_PASSWORD=your-password
PG_HOST=your-supabase-host
PG_PORT=5432
PG_DATABASE=postgres
PORT=3000
Install dependencies: npm install

Start backend server: node index.js

Frontend Setup
Navigate to the frontend folder.

Configure API URL in the ApiService class to your backend URL.

Install dependencies and run the Flutter app as usual.

Usage
Open the frontend Flutter app in browser or on device and manage notes with full CRUD functionality backed by the PostgreSQL database.
