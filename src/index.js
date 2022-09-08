import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ProductsContext from "./contexts/ProductsContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const SingleProduct = createContext();
export const Cart = createContext();

root.render(
  <ProductsContext>
    <SingleProduct.Provider value="how are you">
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </SingleProduct.Provider>
  </ProductsContext>
);
