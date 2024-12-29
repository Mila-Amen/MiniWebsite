/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useState, createContext } from "react";


/* eslint-disable no-unused-vars */
//Create shared state container

const cartContext = createContext();
function CartContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <cartContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </cartContext.Provider>
  );
}
export {cartContext}
export default CartContextProvider;
