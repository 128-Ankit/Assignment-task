const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', taskRoutes);

// DB connect
connectDB();

app.listen(PORT, () => {
    console.log(`Server is started: http:localhost:${PORT}`)
})