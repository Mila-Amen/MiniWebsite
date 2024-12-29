/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import {cartContext} from  "./CartContext.jsx"

export default function Products() {
  const {selectedProducts, setSelectedProducts} = useContext(cartContext)
  console.log("selectedProducts", selectedProducts)

  function handleClick(e){
    setSelectedProducts([...selectedProducts, e.target.innerText])
  }
  return (
   <ul>
    <li><button onClick={handleClick}>Apple iPhone 10</button></li>
    <li><button onClick={handleClick}>Apple iPhone SE 2022</button></li>
    <li><button onClick={handleClick}>Apple iPhone Pro max</button></li>
   </ul>
  )
}
