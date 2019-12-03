import React, { useContext } from "react";
import { IStateContext } from "../interfaces";

const stateContext = React.createContext({} as IStateContext);

export const StateProvider = stateContext.Provider;

export default () => useContext(stateContext);
