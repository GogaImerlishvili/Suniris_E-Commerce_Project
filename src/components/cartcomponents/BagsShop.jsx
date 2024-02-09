import React from 'react'
import Navbar from './Navbar'
import "../../styles/shopcart.css"
const BagsShop = ({img,title,price}) => {
 
  return (
      <div className='card-container'>
      <div className='card'>
        <img src={img} alt="img" />
        <div className='info'>
            <h1>{title}</h1>
            <p>{price}₾</p>
        </div>
      </div>
      </div>
  )
}


export default BagsShop
