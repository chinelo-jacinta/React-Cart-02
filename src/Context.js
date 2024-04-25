import React from 'react';
import { useContext, useReducer, useEffect } from 'react';
import { data } from './Data';
import reducer from './reducer';
const AppContext = React.createContext();
const initialState = {
  cart: data,
  loading: false,
  total: 0,
  amount: 0,
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{ ...state, remove, clear, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, Context };
