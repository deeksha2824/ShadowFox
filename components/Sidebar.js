import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Tasks</h2>
      <nav>
        <Link className="sidebar-link" to="/dashboard">Dashboard</Link>
        <Link className="sidebar-link" to="/todo">Todo</Link>
        <Link className="sidebar-link" to="/tictactoe">Tic Tac Toe</Link>
        <Link className="sidebar-link" to="/rockpaperscissors">Rock Paper Scissors</Link>
      </nav>
    </div>
  );
}
