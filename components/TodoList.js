import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList({
  tasks,
  laterTasks,
  addTask,
  toggleTaskCompletion,
  deleteTask,
  moveToLater,
}) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Plan Your Day ✨</h2>
      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button className="todo-add-btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      {/* Today's Tasks */}
      <div className="todo-list">
        <h3 className="section-heading">Today's Tasks</h3>
        {tasks.length === 0 && <p className="empty-text">No tasks yet!</p>}
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div className="todo-buttons">
              <button
                onClick={() => toggleTaskCompletion(index, false)}
                className="done-btn"
              >
                Done
              </button>
              <button onClick={() => moveToLater(index)} className="later-btn">
                Make It Later
              </button>
              <button
                onClick={() => deleteTask(index, false)}
                className="delete-btn"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Later Tasks */}
      <div className="todo-list">
        <h3 className="section-heading">Make It Later</h3>
        {laterTasks.length === 0 && <p className="empty-text">Nothing postponed!</p>}
        {laterTasks.map((task, index) => (
          <div
            key={index}
            className={`todo-item postponed ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div className="todo-buttons">
              <button
                onClick={() => toggleTaskCompletion(index, true)}
                className="done-btn"
              >
                Done
              </button>
              <button
                onClick={() => deleteTask(index, true)}
                className="delete-btn"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
