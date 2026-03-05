/**
 * Technology: Node.js, Express, Prisma
 * Description:
 *      The main entry point for the backend server.
 *      Initializes middleware, registers routes, and starts the Express server.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const dotenv = require('dotenv');
import express from "express";
import cors from "cors";
// Import Route Handlers
const educationRouters = require('./routes/educationRoutes');
const experienceRouters = require('./routes/experienceRoutes');
const profileRouters = require('./routes/profileRoutes');
const projectRouters = require('./routes/projectRoutes');
const skillRouters = require('./routes/skillRoutes');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/*------------------------------------------------------------------------------
                                  MIDDLEWARE
------------------------------------------------------------------------------*/


app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://69a94259de5781fc1326a9fa--voleak-portfolio.netlify.app"
  ],
}));

// Parse incoming JSON requests
app.use(express.json());

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/
/**
 * @brief Base root route.
 */
// app.get('/', (req, res) => {
//     res.send('Hello from the backend!');
// });

// Register API Resource Routes
app.use('/api/education', educationRouters);
app.use('/api/experience', experienceRouters);
app.use('/api/profile', profileRouters);
app.use('/api/project', projectRouters);
app.use('/api/skill', skillRouters);

/*------------------------------------------------------------------------------
                                SERVER EXECUTION
------------------------------------------------------------------------------*/
/**
 * @brief Initialize and start the Express server.
 */
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
