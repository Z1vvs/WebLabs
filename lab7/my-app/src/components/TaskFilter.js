import React from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskFilter() {
  const { setFilter } = useTasks();

  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Done", value: "done" },
  ];
  return (
    <div className="filter">
      {filters.map(({ label, value }) => (
        <button key={value} onClick={() => setFilter(value)}>
          {label}
        </button>
      ))}
    </div>
  );
}
