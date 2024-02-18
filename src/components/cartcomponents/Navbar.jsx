import React from 'react'
import "../../styles/navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <nav>
    <div className='nav-box'>
    <Link className='order-btn1' to="/order" >შეკვეთა</Link>
        <h2 className="slogan">გადააქციე შენი თვალი ხელოვნებად</h2>
        <div className='cart'>
        <span><ShoppingCartIcon /></span>
            <span className='number'>0</span>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
