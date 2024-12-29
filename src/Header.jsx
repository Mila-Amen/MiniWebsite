/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom"
import { cartContext } from './CartContext'
import { useContext } from 'react'
import {ContactForm} from './ContactForm'

export default function Header() {
  const {selectedProducts} = useContext(cartContext)

  return (
    <header>
     <nav>
      <Link to="/home">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/cart">Cart({selectedProducts.length})</Link> |
      <Link to="/contact" element={<ContactForm/>}/>
     </nav>
    </header>
  )
}
