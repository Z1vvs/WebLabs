import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskItem({ id, text, done = false }) {
  const { toggleTask, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  return (
    <li className="task">
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows={2}
        />
      ) : (
        <span className={`task-text ${done ? "done" : ""}`}>{text}</span>
      )}

      <div className="actions">
        {!isEditing && (
          <button className="done-btn" onClick={() => toggleTask(id)}>
            Done
          </button>
        )}

        {isEditing ? (
          <button
            className="save-btn"
            onClick={() => {
              editTask(id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        {!isEditing && (
          <button className="delete-btn" onClick={() => deleteTask(id)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
