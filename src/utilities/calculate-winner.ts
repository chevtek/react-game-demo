import { SquareValue } from "../enums";

const winConfigurations: Array<Array<number>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function calculateWinner(squares: Array<SquareValue>): SquareValue | false {
  for (let index = 0; index < winConfigurations.length; index++) {
    const [a, b, c] = winConfigurations[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default calculateWinner;
