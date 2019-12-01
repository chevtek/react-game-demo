import { SquareValue } from "../enums";

export interface ICalculateWinner {
  (squares: Array<SquareValue>): SquareValue | null
}
