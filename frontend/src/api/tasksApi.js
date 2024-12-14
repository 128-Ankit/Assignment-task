const BASE_URL = "http://localhost:4000/api";

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return response.json();
};

export const addTask = async (taskName) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task_name: taskName }),
  });
  return response.json();
};

export const updateTask = async (id, updates) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
