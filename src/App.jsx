/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<p>PRODZ</p>} />
        <Route path="/Home" element={<Products/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
      </Routes>
    </>
  );
}

export default App;
