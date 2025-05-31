import React, { useState } from "react";
import "./RockPaperScissors.css";

const choices = ["Rock", "Paper", "Scissors"];

export default function RockPaperScissors() {
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");

  const play = (choice) => {
    const comp = choices[Math.floor(Math.random() * 3)];
    setPlayer(choice);
    setComputer(comp);
    if (choice === comp) setResult("Draw");
    else if (
      (choice === "Rock" && comp === "Scissors") ||
      (choice === "Paper" && comp === "Rock") ||
      (choice === "Scissors" && comp === "Paper")
    ) setResult("You Win!");
    else setResult("You Lose!");
  };

  return (
    <div className="rps-container">
      <h2>Rock Paper Scissors</h2>
      <div className="rps-buttons">
        {choices.map(choice => (
          <button key={choice} onClick={() => play(choice)}>{choice}</button>
        ))}
      </div>
      <p>You: {player} | Computer: {computer}</p>
      <h3>{result}</h3>
    </div>
  );
}
