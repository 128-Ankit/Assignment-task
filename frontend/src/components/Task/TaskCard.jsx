/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";


const TaskCard = ({ task, onEdit, onDelete, onToggleImportant, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.task_name);

  const handleSaveEdit = () => {
    onEdit(task.id, { task_name: editedTaskName });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm mb-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        ) : (
          <span
            className={`${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.task_name}
          </span>
        )}
      </div>
      <div className="flex items-center">
        <button
          className={`mr-3 ${task.important ? "text-yellow-500" : "text-gray-500"}`}
          onClick={() => onToggleImportant(task)}
        >
          <FaStar/>
        </button>
        {isEditing ? (
          <button
            className="text-green-500 mr-2"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="text-blue-500 mr-2"
            onClick={() => setIsEditing(true)}
          >
            ✏️
          </button>
        )}
        <button className="text-red-500" onClick={() => onDelete(task.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
