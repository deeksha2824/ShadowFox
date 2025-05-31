import React from "react";
import "./Dashboard.css";

export default function Dashboard({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Overview</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h4>Total</h4>
          <p>{tasks.length}</p>
        </div>
        <div className="stat-card">
          <h4>Completed</h4>
          <p>{completed}</p>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <p>{pending}</p>
        </div>
      </div>
    </div>
  );
}
