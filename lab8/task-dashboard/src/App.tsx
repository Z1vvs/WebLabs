import React from "react";
import TaskBoard from "./components/TaskBoard";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Type-Safe Task Dashboard</h1>
      <TaskBoard />
    </div>
  );
}
