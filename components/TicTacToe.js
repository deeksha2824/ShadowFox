import React, { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Check for winner helper
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6]          // diagonals
    ];
    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const handleClick = (index) => {
    if (winner || board[index]) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    const newWinner = calculateWinner(newBoard);
    if (newWinner) setWinner(newWinner);
    else setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="tictactoe-container">
      <h2 className="tic-tac-toe-title">Tic Tac Toe</h2>
      <div className="board">
        {board.map((cell, idx) => (
          <div key={idx} className="cell" onClick={() => handleClick(idx)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}
