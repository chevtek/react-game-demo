import React from "react";
import { IBoardProps } from "../interfaces";
import { Square } from "../components/Square";
import { ActionType } from "../enums";
import useStateContext from "../hooks/use-state-context.hook";

export const Board = (props: IBoardProps) => {

  const { dispatch } = useStateContext();

  const renderSquare = (index: number) => {
    const setSquareValue = () => dispatch({
      type: ActionType.SET_SQUARE,
      data: index
    });
    return (
      <Square value={props.squares[index]} onClick={setSquareValue} />
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
