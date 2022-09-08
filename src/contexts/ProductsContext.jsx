import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import ProductReducer from "../reducers/ProductReducer";

export const Products = createContext();

const ProductsContext = ({ children }) => {
  const initialState = {
    allproducts: null,
    loading: true,
    searchedProducts: null
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const GetAllProducts = (data) => {
    dispatch({ type: "fill_cart", payload: data });
  };
  const GetSearchProducts = (data) => {
    dispatch({ type: "searchfilter", payload: data });
  };
  const GetCategory = (data) => {
    dispatch({ type: "category", payload: data });
  };

  const SortPrice = (data) => {
    dispatch({ type: "sort", payload: data });
  };

  return (
    <Products.Provider
      value={{
        ...state,
        GetAllProducts,
        GetSearchProducts,
        GetCategory,
        SortPrice
      }}
    >
      {children}
    </Products.Provider>
  );
};

export default ProductsContext;
