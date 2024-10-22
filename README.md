# CPU Management Application
## Description
This project is a full-stack application that allows users to view and edit CPU characteristics. It consists of a Node.js backend using Express and Sequelize for API development and database interaction, and a Next.js frontend for the user interface.

## Prerequisites
- Node.js (v14.x or later recommended)
- npm or yarn
- MySQL database
- Git

## Installation

1. Clone the Repository

`git clone https://github.com/yourusername/cpu-management-app.git
cd cpu-management-app`
2. Install Backend Dependencies

Navigate to the backend directory and install dependencies:
`cd backend
npm install`

3. Install Frontend Dependencies
Navigate to the frontend directory and install dependencies:
`cd ../frontend
npm install`

## Configuration


## Backend Configuration
Create a .env File in the backend directory:
`
PORT=5000
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
Database Setup:`

Ensure your MySQL database is running.
Create a database matching the DB_NAME specified in your .env file.
The backend will handle database synchronization using Sequelize.

## Frontend Configuration
Create a .env.local File in the frontend directory:

`NEXT_PUBLIC_API_URL=http://localhost:3000`

# Running the Application
## Start the Backend Server
Open a terminal in the backend directory and run:

`npm start`
The backend server will start on the port specified in your .env file (default is 5000).
Ensure the server is running before starting the frontend.

## Start the Frontend Server
Open a terminal in the frontend directory and run:

`npm run dev`
The frontend server will start on http://localhost:3001.

