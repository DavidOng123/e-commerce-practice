
import React, { createContext, useContext, useReducer } from "react";

import ProductReducer from './Reducer/Product'
import { defaultState } from "./Reducer/Product";

const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, defaultState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
