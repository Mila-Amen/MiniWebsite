/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContext'

export default function ShoppingCart() {
  const {selectedProducts, setSelectedProducts} = useContext(cartContext)

  function handleClick(){
setSelectedProducts([])
  }
  return (
   <div><p>CART</p><ul>
      {selectedProducts.map(p => (
        <li>{p}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Clear</button>
    </div>
  )
}
