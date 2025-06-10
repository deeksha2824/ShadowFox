import React from "react";
import "./Dashboard.css";

export default function Dashboard({ tasks = [], laterTasks = [] }) {
  const totalTasks = tasks.length + laterTasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Your Progress Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h4>Total Tasks</h4>
          <p>{totalTasks}</p>
        </div>
        <div className="stat-card">
          <h4>Completed</h4>
          <p>{completedTasks}</p>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <p>{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}
