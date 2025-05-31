import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList({ tasks, addTask, toggleTaskCompletion, deleteTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">🌸 My Pastel Todo List</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="todo-add-btn">➕ Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span className="task-text">{task.text}</span>
            </label>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
