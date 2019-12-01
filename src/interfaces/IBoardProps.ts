import { SquareValue } from "../enums";
import { IAction } from ".";

export interface IBoardProps {
  squares: Array<SquareValue>;
  dispatch: (action: IAction) => void;
}
