import React from 'react'
import "../../styles/shopcart.css"
const ShopCart = ({item}) => {
  if(item) {
  const {title,price,img} = item;
  return (
    <div className='card-container'>
      <div className='card'>
       <img src={img}  alt="img"  />
       <div className='info'>
       <h1>{title}</h1>
          <p>{price}₾</p>
       </div>
      </div>
    </div>
  )
}
}

export default ShopCart
