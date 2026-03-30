import React, { useState } from "react";
import { Task } from "../types";
import List from "./List";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { filterTasks } from "../utils/filterTasks";

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState("");

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

  const filtered = filterTasks(tasks, query);

  return (
    <div>
      <TaskForm onAdd={addTask} />
      <input
        placeholder="Search..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      <List items={filtered} renderItem={(task) => <TaskCard task={task} />} />
    </div>
  );
}
