import React from "react";
import "./App.css";
import { SquareValue, ActionType } from "../enums";
import calculateWinner from "../utilities/calculate-winner";
import useStateReducer from "../hooks/use-state-reducer.hook";
import { StateProvider } from "../hooks/use-state-context.hook";
import { Board } from "../components/Board";

export const App = () => {
  const [gameState, dispatch] = useStateReducer();
  const { history, stepNumber, xIsNext } = gameState;
  const current = history[stepNumber];
  const nextPlayer = xIsNext ? SquareValue.X : SquareValue.O;
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  const moveClick = (move: number) =>
    dispatch({
      type: ActionType.TIME_TRAVEL,
      data: move
    });

  return (
    <StateProvider value={{ gameState, dispatch }}>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} />
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
    </StateProvider>
  );
};
