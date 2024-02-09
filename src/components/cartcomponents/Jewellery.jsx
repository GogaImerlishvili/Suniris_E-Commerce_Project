import React from 'react'
import jewelleryList from '../jewelleryData'
import JewelleryShop from './JewelleryShop'
import "./suniris.css"

const Jewellery = () => {
    console.log(jewelleryList)
  return (
    <div className='set-grid'>
      {jewelleryList.map((list) => (
        <JewelleryShop key={list.id} jewellery={jewelleryList} img={list.img} title={list.title} price={list.price}  />
      ))}
    </div>
  )
}

export default Jewellery
