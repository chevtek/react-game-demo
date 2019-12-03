import React from "react";
import { ISquareProps } from "../interfaces";

export const Square = (props: ISquareProps) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);
