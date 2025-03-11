import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, addTask, deleteTask, editTask, toggleComplete }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Add a new task..."
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
