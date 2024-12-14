// /models/taskModel.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    uid: {
        type: String,
    },
    task_name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    },
    deleted_at: {
        type: Date,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
