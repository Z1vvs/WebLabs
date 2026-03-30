import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./styles.css";

export default function App() {
  return (
    <TaskProvider>
      <div className="app">
        <div className="container">
          <h1>
            <img src="./logo.svg" alt="Logo" width="32" height="32" />
            zen Task Manager
          </h1>
          <TaskInput />
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}
