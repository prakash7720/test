/** @format */

import React, { createContext, useContext, useReducer } from 'react';

const initialState = { category: 'primary' };

const CategoryContext = createContext(initialState);

const reducer = (state = 'primary', action) => {
  switch (action.type) {
    case 'primary':
      return {
        ...state,
        category: action.payload,
      };

    case 'updates':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export const useGlobalState = () => {
  const CategoryContextAlias = useContext(CategoryContext);
  return CategoryContextAlias.state;
};

export const useGlobalDispatch = () => {
  const CategoryContextAlias = useContext(CategoryContext);
  return CategoryContextAlias.dispatch;
};

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default GlobalContext;
