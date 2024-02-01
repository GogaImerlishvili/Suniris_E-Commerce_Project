import React from 'react'
import list from '../data'
import ShopCart from './ShopCart'
import "./suniris.css"


const Suniris = () => {
  return (
    <div className='set-grid'>
    {list.map((list) => ( 
<ShopCart key={list.id} item={list} />
    ))} </div>
  )
}

export default Suniris


