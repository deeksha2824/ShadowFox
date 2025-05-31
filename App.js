// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import TodoList from "./components/TodoList";
import Signup from "./components/Signup";
import TicTacToe from "./components/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const addTask = (newTask) => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="app-container">
        {isSignedIn && <Sidebar tasks={tasks} />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Signup onSignIn={() => setIsSignedIn(true)} />} />
            <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
            <Route
              path="/todo"
              element={
                <TodoList
                  tasks={tasks}
                  addTask={addTask}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
