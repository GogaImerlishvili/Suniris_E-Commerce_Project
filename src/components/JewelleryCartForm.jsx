import React from 'react'
import "./cartform.css"
import Navbar from './cartcomponents/Navbar'
import Jewellery from './cartcomponents/Jewellery'
import JewelleryShop from './cartcomponents/JewelleryShop'
const JewelleryCartForm = () => {
  return (
    <>
    <div className="container">
      <Navbar />
    </div>
    <div className='set-grid'>
    <Jewellery />
    </div>
    </>
  )
}

export default JewelleryCartForm
