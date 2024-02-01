import React from 'react'
import Navbar from './cartcomponents/Navbar'
import Suniris from './cartcomponents/Suniris'
import ShopCart from './cartcomponents/ShopCart'
import "./cartform.css"

const CartForm = () => {
  return (
    <>
    <div className='container'>
     <Navbar />
    </div>  
    <div className='set-grid'>
    <Suniris />
    <ShopCart  />
    </div>
    </>
  )
}

export default CartForm
