import { IGameState, IAction } from ".";

export interface IStateContext {
  gameState: IGameState;
  dispatch: React.Dispatch<IAction>;
}
