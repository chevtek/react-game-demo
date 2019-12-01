import React from "react";
import { IBoardProps, IAction } from "../interfaces";
import Square from "../components/Square";
import { ActionType } from "../enums";

const Board: React.FC<IBoardProps> = (props) => {

  const renderSquare = (index: number) => {
    const setSquare: IAction = {
      type: ActionType.SET_SQUARE,
      data: index
    };
    return (
      <Square value={props.squares[index]} onClick={() => props.dispatch(setSquare)} />
    )
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

};

export default Board;
