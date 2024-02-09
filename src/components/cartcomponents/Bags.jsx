import React from 'react'
import bagsList from '../bagsData'
import BagsShop from './BagsShop'
import "./suniris.css";

const Bags = () => {
    console.log(bagsList)
  return (
    <div className='set-grid'>
        {bagsList.map((list) => (
        <BagsShop key={list.id} img={list.img} title={list.title} price={list.price} />
        ))}
    </div>
  )
}

export default Bags
