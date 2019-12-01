import React from "react";
import { ISquareProps } from "../interfaces";

const Square: React.FC<ISquareProps> = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
