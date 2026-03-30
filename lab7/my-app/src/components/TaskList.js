import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}
