import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTask = useCallback((id, newText) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        toggleTask,
        deleteTask,
        editTask,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
