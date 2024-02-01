import React from 'react'
import "../../styles/navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
   <nav>
    <div className='nav-box'>
        <span className='my-shop'>My shop</span>
        <div className='cart'>
        <span><ShoppingCartIcon /></span>
            <span className='number'>0</span>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
