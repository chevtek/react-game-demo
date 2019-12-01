import { IGameState, IAction } from "../interfaces";
import { ActionType, SquareValue } from "../enums";
import calculateWinner from "../services/calculate-winner";

function stateReducer (gameState: IGameState, action: IAction): IGameState {
  const {history, stepNumber, xIsNext} = gameState;
  switch (action.type) {
    case ActionType.SET_SQUARE:
      const newHistory = history.slice(0, stepNumber + 1);
      const current = newHistory[newHistory.length - 1];
      const squares = current.squares.slice();
      const index = action.data;
      if (calculateWinner(squares) || squares[index] !== SquareValue.Empty) return gameState;
      squares[index] = xIsNext ? SquareValue.X : SquareValue.O;
      return {
        history: newHistory.concat([{ squares }]),
        stepNumber: newHistory.length,
        xIsNext: !xIsNext
      };
    case ActionType.TIME_TRAVEL:
      const step = action.data;
      return {
        history,
        stepNumber: step,
        xIsNext: (step % 2) === 0
      };
    default:
      throw new Error("Dispatch action not found.");
  }
}

export default stateReducer;
