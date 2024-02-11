import React, { useState } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstuctionVideo from "../assets/video/insturctionVideo.mp4"
import TakePic from './TakePic';
import OrderInfo from './OrderInfo';
import "./order.css"
import PaperImg from "../assets/video/desktop-wallpaper-old-paper-swirls-texture-border-background-for-powerpoint-for-your-mobile-tablet-explore-ancient-ancient-greece-ancient-rome-ancient-roman.jpg"
const Order = () => {
  
  return (
    <>
        <div className='wrapper'>
<form className='form' action=''>
 <h1>შესაკვეთი ფორმა</h1>
 <div className='input-box'>
  <input type="mail" placeholder='Sunirisiris@gmail.com' required />
  <ContactMailIcon className='icon' />
 </div>
 <div className='input-box'>
  <input type="mail" placeholder='თქვენი მეილი' required />
  <AttachEmailIcon className='icon'/>
 </div>
 <div className='input-box'>
 <input type="tel" placeholder="მიუთითეთ თქვენი ნომერი" />
  <PermPhoneMsgIcon className='icon'/>
 </div>
 <div className='input-box'>
  <span>ატვირთეთ თვალის ფოტო</span>
 <input type="file" accept=".jpeg,.png" />
 </div>
 <button type="submit">Send Email</button>
</form>
    <video controls width="500" height="500">
      <source src={InstuctionVideo} type="video/mp4" />
    </video>
    <div className='fsa'>
      <OrderInfo />
    </div>
  </div>
  
    </>

  );
};

export default Order;
