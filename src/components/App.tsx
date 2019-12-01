import React, { useState, useReducer } from "react";
import "./App.css";
import { SquareValue, ActionType } from "../enums";
import { IGameState } from "../interfaces";
import calculateWinner from "../services/calculate-winner";
import stateReducer from "../services/state-reducer";
import Board from "../components/Board";

const initialGameState: IGameState = {
  history: [
    { squares: Array(9).fill(SquareValue.Empty) }
  ],
  stepNumber: 0,
  xIsNext: true
};

const App: React.FC = () => {

  const [gameState, dispatch] = useReducer(stateReducer, initialGameState);

  function jumpTo (step: number):void {
    dispatch({
      type: ActionType.TIME_TRAVEL,
      data: step
    });
  }

  const { history, stepNumber, xIsNext } = gameState;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const text = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{text}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? SquareValue.X : SquareValue.O}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} dispatch={dispatch} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );

}

export default App;
