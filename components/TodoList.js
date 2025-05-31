// src/components/TodoList.js
import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ tasks, addTask, toggleTaskCompletion, deleteTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 Your Task List</h2>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">Add Task</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <div className="todo-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span className="todo-text">{task.text}</span>
            </div>
            <button
              className="todo-delete-btn"
              onClick={() => deleteTask(index)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
