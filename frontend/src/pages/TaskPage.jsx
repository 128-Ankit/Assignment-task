import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/Task/TaskCard";
import Modal from "../components/Task/Modal";
import { BsThreeDots } from "react-icons/bs";


const TaskPage = () => {
  const { tasks, loading, handleAddTask, handleUpdateTask, handleDeleteTask } =
    useTasks();
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleToggleComplete = (task) => {
    handleUpdateTask(task.id, { completed: !task.completed });
  };

  const handleToggleImportant = (task) => {
    handleUpdateTask(task.id, { important: !task.important });
  };

  const handleSubmitNewTask = () => {
    handleAddTask(newTaskName);
    setNewTaskName("");
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      {/* Popover for Add Task */}
      <div className="relative flex items-end justify-end">
        <button
          className="mb-4 px-4 py-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300"
          onClick={() => setPopoverOpen(!isPopoverOpen)}
        >
          <BsThreeDots />
        </button>

        {isPopoverOpen && (
          <div className="absolute top-[40px] bg-blue-600 shadow-lg border rounded-md p-2">
            <button
              className="w-full px-4 py-2 text-left text-white"
              onClick={() => {
                setModalOpen(true);
                setPopoverOpen(false);
              }}
            >
              Add Task
            </button>
          </div>
        )}
      </div>

      {/* Task List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleUpdateTask}
            onDelete={handleDeleteTask}
            onToggleImportant={handleToggleImportant}
            onToggleComplete={handleToggleComplete}
          />
        ))
      )}

      {/* Modal for Adding New Task */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitNewTask}
      >
        <h2 className="text-lg font-bold mb-2">Add New Task</h2>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Task name"
        />
      </Modal>
    </div>
  );
};

export default TaskPage;
