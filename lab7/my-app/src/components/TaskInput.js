import React, { useState, useRef } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskInput() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="input-group">
      <textarea
        ref={inputRef}
        value={text}
        placeholder="New task... (Enter = new line, Ctrl+Enter = add)"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            handleAdd();
          }
        }}
        rows={2}
      />
      <button onClick={handleAdd} aria-label="Add task">
        +
      </button>
    </div>
  );
}
