import { IGameState } from "../interfaces";
import { SquareValue } from "../enums";
import calculateWinner from "../utilities/calculate-winner";

export default (gameState: IGameState, index: number): IGameState => {
  const {history, stepNumber, xIsNext} = gameState;
  const newHistory = history.slice(0, stepNumber + 1);
  const current = newHistory[newHistory.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[index] !== SquareValue.Empty) {
    return gameState;
  }
  squares[index] = xIsNext ? SquareValue.X : SquareValue.O;
  return {
    history: newHistory.concat([{ squares }]),
    stepNumber: newHistory.length,
    xIsNext: !xIsNext
  };
};
