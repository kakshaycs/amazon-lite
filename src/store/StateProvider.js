// setup data layer for all app
// we need this to track basket
import React, { createContext, useContext, useReducer } from "react";

// this is The Data Layer
export const StateContext = createContext();

// Build A provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
