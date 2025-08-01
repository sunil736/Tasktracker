import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2 w-full max-w-md">
      <input
        type="text"
        className="flex-grow border rounded p-2"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200">
        Add
      </button>
    </form>
  );
}

export default TaskInput;
