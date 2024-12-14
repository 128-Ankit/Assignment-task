const Task = require('../models/taskModel');
const mongoose = require('mongoose');

// Add Task
const addTask = async (req, res) => {
    try {
        const { task_name } = req.body;

        if (!task_name) {
            return res.status(400).json({ message: 'Task name is required' });
        }

        const newTask = new Task({
            id: new mongoose.Types.ObjectId(),
            uid: req.user ? req.user.id : 'default_user', 
            task_name,
        });

        await newTask.save();

        res.status(201).json({
            message: 'Task added successfully',
            task: newTask,
        });
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get All Tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ deleted_at: null });

        res.status(200).json({
            tasks,
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update Task
const updateTask = async (req, res) => {
    try {
        const { task_name, completed, important } = req.body;
        const taskId = req.params.id;

        const task = await Task.findOne({ id: taskId });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update fields only if provided
        if (task_name !== undefined) task.task_name = task_name;
        if (completed !== undefined) task.completed = completed;
        if (important !== undefined) task.important = important;

        await task.save();

        res.status(200).json({
            message: 'Task updated successfully',
            task,
        });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete Task (Soft Delete)
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await Task.findOne({ id: taskId });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.deleted_at = Date.now();

        await task.save();

        res.status(200).json({
            message: 'Task deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    addTask,
    getAllTasks,
    updateTask,
    deleteTask,
};
