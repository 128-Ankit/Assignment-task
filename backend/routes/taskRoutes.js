// /routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Task Routes
router.post('/tasks', taskController.addTask); // Add task
router.put('/tasks/:id', taskController.updateTask); // Update task
router.delete('/tasks/:id', taskController.deleteTask); // Delete task
router.get('/tasks', taskController.getAllTasks); // Get all tasks

module.exports = router;
