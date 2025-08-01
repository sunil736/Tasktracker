import React from "react";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) return <p className="text-gray-500">No tasks yet!</p>;

  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-3 rounded shadow ${
            task.completed ? "bg-green-100" : "bg-white"
          }`}
        >
          <span
            onClick={() => onToggle(task.id)}
            className={`flex-grow cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
