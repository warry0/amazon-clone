import React, { createContext, useContext, useReducer } from "react";

// Prepare la dataLayer
export const StateContext = createContext();

// Enveloppe notre application et fournissez la Datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// extrait des informations du datalayer
export const useStateValue = () => useContext(StateContext);
