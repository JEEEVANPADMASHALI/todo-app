import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDoItem({ task, deleteTask, editTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const inputRef = useRef(null);

  const handleEdit = () => {
    if (newText.trim() === "") return; // Prevent saving empty tasks
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 p-1 border rounded"
          autoFocus
        />
      ) : (
        <span
          onClick={() => toggleComplete(task.id)}
          className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEdit} className="ml-2 bg-green-500 text-white px-3 py-1 rounded">
          Save
        </button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={() => deleteTask(task.id)} className="ml-2 bg-red-500 text-white px-3 py-1 rounded">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={() => toggleComplete(task.id)}
            className={`ml-2 px-3 py-1 rounded ${task.completed ? "bg-gray-500" : "bg-green-500"} text-white`}
          >
            {task.completed ? "Undo" : "Done"}
          </button>
        </>
      )}
    </li>
  );
}
