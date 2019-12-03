import { SquareValue } from "../enums";
import { IAction } from ".";

export interface IBoardProps {
  squares: Array<SquareValue>;
}

export interface ISquareProps {
  value: SquareValue;
  onClick: () => void;
}
