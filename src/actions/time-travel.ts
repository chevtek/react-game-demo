import { IGameState } from "../interfaces";

export default (gameState: IGameState, step: number): IGameState => {
  const {history} = gameState;
  return {
    history,
    stepNumber: step,
    xIsNext: (step % 2) === 0
  };
}
