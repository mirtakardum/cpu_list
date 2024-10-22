# CPU List Application
## Description
This project is a full-stack application that allows users to view and edit CPU characteristics. It consists of a Node.js backend using Express and Sequelize for API development and database interaction and a Next.js frontend for the user interface.

## Prerequisites
- Node.js (v14.x or later recommended)
- npm or yarn
- MySQL database
- Git

## Installation

1. Clone the Repository <br/>
`git clone https://github.com/mirtakardum/cpu-list.git` <br/>
`cd cpu-list` <br/>
2. Install Backend Dependencies
Navigate to the backend directory and install dependencies: <br/>
`cd backend` <br/>
`npm install` <br/>
The sequelize package needs to be installed globally, therefore run: <br/>
`npm install -g sequelize-cli` <br/>
3. Install Frontend Dependencies
Navigate to the frontend directory and install dependencies: <br/>
`cd ../frontend` <br/>
`npm install` <br/>

# Configuration
## Backend Configuration

Create a .env File in the backend directory: <br/>

`PORT=5000` <br/>
`DB_HOST=localhost` <br/>
`DB_USER=your_db_username` <br/>
`DB_PASSWORD=your_db_password` <br/>
`DB_NAME=your_db_name` <br/>

Ensure your MySQL database is running. <br/>
Create a database matching the DB_NAME specified in your .env file. <br/>
The backend will handle database synchronization using Sequelize. <br/>


# Running the Application
## Start the Backend Server
Open a terminal in the backend directory and run: <br/>
`node app.js` <br/>
The backend server will start on the port specified in your .env file (default is 5000). <br/>
In case no data can be fetched, check if the backend server is on a different port. <br/>
To seed the database tables, run: <br/>
`sequelize db:seed:all` <br/>
Ensure the server is running before starting the frontend. <br/>

## Start the Frontend Server
Open a terminal in the frontend directory and run: <br/>
`npm run dev` <br/>
The frontend server will start on http://localhost:3000.

