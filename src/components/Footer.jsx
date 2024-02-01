import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Logo from "../images/photo-output (1).png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  let date = new Date().getFullYear();
  console.log(date)
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
        <img className='footer-logo' src={Logo} alt='' />
        <label className='footer-title'><label className='footer-sun'>Sun</label>iris</label>
        <div className= 'copy-right'>
          <span className='copy-right'>&copy;{date}<p>ყველა უფლება დაცულია</p> </span>
        </div>
        </div>
        <div className='footer-right'>
         {/* <span><Link><FacebookIcon className='fa-facebook' /></Link></span> */}
         <InstagramIcon className="fa-facebook" />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
