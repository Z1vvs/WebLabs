import React, { useState, useRef, useEffect } from "react";
import { Task, Bug, Feature } from "../types";

export default function TaskForm({ onAdd }: { onAdd: (task: Task) => void }) {
  const [mode, setMode] = useState<"bug" | "feature">("bug");
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [severity, setSeverity] = useState<Bug["severity"]>("low");
  const [priority, setPriority] = useState<number>(1);

  useEffect(() => {
    inputRef.current?.focus();
  }, [mode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const base = {
      id: Date.now(),
      title,
      status: "todo" as const,
    };

    if (mode === "bug") {
      const newTask: Bug = { ...base, type: "bug", severity };
      onAdd(newTask);
    } else {
      const newTask: Feature = { ...base, type: "feature", priority };
      onAdd(newTask);
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => setMode("bug")}>
          Bug
        </button>
        <button type="button" onClick={() => setMode("feature")}>
          Feature
        </button>
      </div>

      <input
        ref={inputRef}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Title"
      />

      {mode === "bug" && (
        <select
          value={severity}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSeverity(e.target.value as Bug["severity"])
          }
        >
          <option value="low">Low</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      )}

      {mode === "feature" && (
        <input
          type="number"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPriority(Number(e.target.value))
          }
        />
      )}

      <button type="submit">Add</button>
    </form>
  );
}
