/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import CartContextProvider from './CartContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <CartContextProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>
   </CartContextProvider>
    
  </StrictMode>,
)
