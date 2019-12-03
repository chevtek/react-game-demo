import React from "react";
import "./App.css";
import { SquareValue, ActionType } from "../enums";
import calculateWinner from "../utilities/calculate-winner";
import useGameState from "../hooks/use-game-state";
import Board from "../components/Board";

const App: React.FC = () => {

  const [gameState, dispatch] = useGameState();
  const { history, stepNumber, xIsNext } = gameState;
  const current = history[stepNumber];
  const nextPlayer = xIsNext ? SquareValue.X : SquareValue.O;
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  const moveClick = (move: number) => dispatch({
    type: ActionType.TIME_TRAVEL,
    data: move
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} dispatch={dispatch} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step, move) => (
            <li key={move}>
              <button onClick={() => moveClick(move)}>
                {move ? `Go to move #${move}` : "Go to game start"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

}

export default App;
