import React from 'react'
import { Link } from 'react-router-dom'
import Img from "../images/photo-output (1).png"
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const closeMobileMenu = () => {
        setIsOpen(false)  
    }

    const handleToggle = () => {
       setIsOpen(!isOpen)
    }
  return (
    <>
    <div className='navbar'>
        <div className='navbar-container'>
        <div className='navbar-logo'>
                   <Link to="/">{<img className='logo' src={Img} alt='' />}</Link> 
                    <label className='logo-title'><label className='sun'>Sun</label>iris</label>
                </div>
            <div className='menu-icon'>
                    {isOpen ? (
                        <IconButton onClick={handleToggle} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleToggle} color="inherit">
                            <MenuIcon className="burger-menu" />
                        </IconButton>
                    )
                }
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu} ><HomeIcon />მთავარი</Link></li>
                <li className='nav-item'><Link to="/jewellery" className='nav-links' onClick={closeMobileMenu} ><DiamondIcon />სამკაული</Link></li>
                <li className='nav-item'><Link to="/posters" className='nav-links' onClick={closeMobileMenu} ><DynamicFeedIcon />პოსტერები</Link></li>
                <li className='nav-item'><Link to="/bags" className='nav-links' onClick={closeMobileMenu} ><ShoppingBagIcon />ჩანთები</Link></li>
                <li className='nav-item'><Link to="/order" className='nav-links' onClick={closeMobileMenu} ><ConnectWithoutContactIcon />საკონტაქტო</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar;
