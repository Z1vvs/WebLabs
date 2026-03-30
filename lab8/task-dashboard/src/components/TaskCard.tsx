import React from "react";
import { Task } from "../types";
import { isHighPriorityBug } from "../utils/filterTasks";

export default function TaskCard({ task }: { task: Task }) {
  let borderColor = "#6B6E70";

  if (task.type === "bug") borderColor = "#e24e42";
  if (task.type === "feature") borderColor = "#86C232";

  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
      }}
    >
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>

      {task.type === "bug" && <p>Severity: {task.severity}</p>}

      {task.type === "feature" && (
        <>
          <p>Priority: {task.priority}</p>
          {task.expectedRelease && <p>Release: {task.expectedRelease}</p>}
        </>
      )}

      {isHighPriorityBug(task) && (
        <strong style={{ color: "red" }}>!!!Critical Bug!!!</strong>
      )}
    </div>
  );
}
