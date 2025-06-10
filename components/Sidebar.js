import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ tasks }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">My App</h2>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          Dashboard
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => isActive ? "active" : ""}>
          ToDo List
        </NavLink>
        <NavLink to="/tictactoe" className={({ isActive }) => isActive ? "active" : ""}>
          Tic Tac Toe
        </NavLink>
        <NavLink to="/rockpaperscissors" className={({ isActive }) => isActive ? "active" : ""}>
          Rock Paper Scissors
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <p>Total Tasks: {tasks.length}</p>
      </div>
    </aside>
  );
}
