const mongoose = require('mongoose');
require('dotenv').config();

// console.log("DB_URL: ",process.env.DB_URL)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
