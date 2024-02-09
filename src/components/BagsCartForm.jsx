import React from 'react'
import Navbar from './cartcomponents/Navbar'
import Bags from './cartcomponents/Bags'
import BagsShop from './cartcomponents/BagsShop'
import "./cartform.css"
const BagsCartForm = () => {
  return (
    <>
      <div className='container'>
      <Navbar />
      </div>
      <div className='set-grid'>
        <Bags />
      </div>
    </>
  )
}

export default BagsCartForm
