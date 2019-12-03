import { useReducer } from "react";
import { IGameState, IAction } from "../interfaces";
import { SquareValue } from "../enums";
import actions from "../actions";

const initialGameState: IGameState = {
  history: [
    { squares: Array(9).fill(SquareValue.Empty) }
  ],
  stepNumber: 0,
  xIsNext: true
};

const reducer = (gameState: IGameState, action: IAction): IGameState => {
  if (actions.hasOwnProperty(action.type)) {
    return actions[action.type](gameState, action.data);
  }
  throw new Error("Dispatch action not found.");
};

export default () => useReducer(reducer, initialGameState);
