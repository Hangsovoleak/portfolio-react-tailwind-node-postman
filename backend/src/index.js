const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Import Routes
const educationRouters = require('./routes/educationRoutes');
const experienceRouters = require('./routes/experienceRoutes');
const profileRouters = require('./routes/profileRoutes');
const projectRouters = require('./routes/projectRoutes');
const skillRouters = require('./routes/skillRoutes');

//Register new API routes
app.use('/api/education', educationRouters);
app.use('/api/experience', experienceRouters);
app.use('/api/profile', profileRouters);
app.use('/api/project', projectRouters);
app.use('/api/skill', skillRouters);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
