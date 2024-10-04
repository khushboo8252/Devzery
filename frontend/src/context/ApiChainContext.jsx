import React, { createContext, useReducer } from 'react';
import ApiChainReducer from './ApiChainReducer';

const ApiChainContext = createContext();

export const ApiChainProvider = ({ children }) => {
  const [apiChain, dispatch] = useReducer(ApiChainReducer, []);

  const addApiToChain = (api) => {
    dispatch({ type: 'ADD_API', payload: api });
  };

  return (
    <ApiChainContext.Provider value={{ apiChain, addApiToChain }}>
      {children}
    </ApiChainContext.Provider>
  );
};

export default ApiChainContext;
