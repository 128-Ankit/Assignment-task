import { useState, useEffect } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../api/tasksApi";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadTasks = async () => {
        setLoading(true);
        const data = await fetchTasks();
        setTasks(data.tasks || []);
        setLoading(false);
    };

    const handleAddTask = async (taskName) => {
        const newTask = await addTask(taskName);
        setTasks((prev) => [...prev, newTask.task]);
    };

    const handleUpdateTask = async (id, updates) => {
        try {
            const updatedTask = await updateTask(id, updates);
            setTasks((prev) =>
                prev.map((task) => (task.id === id ? updatedTask.task : task))
            );
        } catch (error) {
            console.error("Failed to update task:", error.message);
        }
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return { tasks, loading, handleAddTask, handleUpdateTask, handleDeleteTask };
};
