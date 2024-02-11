import React, { useState } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstuctionVideo from "../assets/video/video-output-0CB6972F-9763-4A31-83B1-2613566C22CA.mov"
import TakePic from './TakePic';
import OrderInfo from './OrderInfo';
import "./order.css"

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
      <source src={InstuctionVideo} type="video/quicktime" />
    </video>
    <div className='fsa'>
      <OrderInfo />
    </div>
  </div>
  
    </>

  );
};

export default Order;
