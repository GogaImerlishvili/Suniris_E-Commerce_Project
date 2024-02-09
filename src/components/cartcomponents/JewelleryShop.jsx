import React from 'react'
import "../../styles/shopcart.css"

const JewelleryShop = ({title,price,img}) => {
    // if(jewellery){
        // const {title,price,img} = jewellery;
  return (
    <div className='card-container'>
        <div className='card'>
            <img src={img} alt="img" />
            <h1>{title}</h1>
            <p>{price}₾</p>
        </div>
    </div>
  )
}
// }

export default JewelleryShop;
