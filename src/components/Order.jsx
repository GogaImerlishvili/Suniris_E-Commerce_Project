import React, {useState} from 'react';
import emailjs from "@emailjs/browser";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstuctionVideo from "../assets/video/insturctionVideo.mp4"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OrderInfo from './OrderInfo';
import "./order.css"  

const Order = () => {
  const [open,setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telNumber: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value});
  }

 
 const handleToggle = () => {
  setOpen(!open)
 }
  const serviceId = "service_ijkoz4q";  
const templateId = "template_l0c4uxl";
const publicKey = "KCRw-B6zKIJegy5ho";


  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
    emailjs.send(serviceId,templateId , {
      from_name: formData.name,
      from_email: formData.email,
      from_tel: formData.telNumber,
      from_checkbox1: formData.checkbox1 ? 'Selected' : 'Not Selected',
      from_checkbox2: formData.checkbox2 ? 'Selected' : 'Not Selected',
      from_checkbox3: formData.checkbox3 ? "Selected" : 'Not Selected',
      from_checkbox4: formData.checkbox4 ? 'Selected' : 'Not Selected',
      from_checkbox5: formData.checkbox5 ? 'Selected' : 'Not Selected',
      from_checkbox6: formData.checkbox6 ? 'Selected' : 'Not Selected',
      from_checkbox7: formData.checkbox7 ? 'Selected' : 'Not Selected',
      from_checkbox8: formData.checkbox8 ? 'Selected' : 'Not Selected',
      from_checkbox9: formData.checkbox9 ? 'Selected' : 'Not Selected',
  
      
      // from_checkbox3: formData.checkbox3 ? 'Selected' : 'Not Selected' 
    }, publicKey)
      .then((response) => {
        console.log('Form data sent via email!', response.status, response.text);
      }, (error) => {
        console.error('Failed to send form data via email', error);
      });
  }

  return (
    <>
    <div className="wrapper">
    <form className='form' onSubmit={handleSubmit}>
      <h3>შესაკვეთი ფორმა</h3>
      <div className='input-box'>
        <input type="text" name="name" placeholder='სახელი' value={formData.name} onChange={handleChange} />
        <ContactMailIcon className='icon' />
      </div>
      <div className='input-box'>
        <input type="email" name="email" placeholder='მეილი' value={formData.email} onChange={handleChange} />
        <AttachEmailIcon className='icon'/>
      </div>
      <div className="input-box">
        <input type="tel" name="telNumber" placeholder='ნომერი' value={formData.telNumber} onChange={handleChange} />
        <PermPhoneMsgIcon className='icon'/>
      </div>
      {/* <div className="input-box">
        <input type="tel" name="telNumber" placeholder='ფაილის მიმაგრება' value={formData.telNumber} onChange={handleChange} />
        <PermPhoneMsgIcon className='icon'/>
      </div> */}

      {/* Check Boxes */}
      <div className="wrapp">
      <div onClick={handleToggle} className="select-option">{open ? 'დახურვა' : `პოსტერი ზომების მიხედვით `}</div>
      {open && (
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox3"
              checked={formData.checkbox3}
              onChange={handleChange}
            />
            10x15 სმ - 39₾
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox4"
              checked={formData.checkbox4}
              onChange={handleChange}
            />
            20x20 სმ - 65₾ 
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox5"
              checked={formData.checkbox5}
              onChange={handleChange}
            />
           25x35 სმ - 85₾
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox6"
              checked={formData.checkbox6}
              onChange={handleChange}
            />
           30x40 სმ - 105₾
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox7"
              checked={formData.checkbox7}
              onChange={handleChange}
            />
            40x50 სმ - 125₾ 
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox8"
              checked={formData.checkbox8}
              onChange={handleChange}
            />
           40x60 სმ - 135₾
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox9"
              checked={formData.checkbox9}
              onChange={handleChange}
            />
            50x70 სმ - 155₾
          </label>
          </div>
          
      )}
        <div className='wrapp-checkbox'>
      <label>
        <input type="checkbox" name="checkbox1" checked={formData.checkbox1} onChange={handleChange} />
        <span className='checkbox-title'>სამკაული</span>
      </label>
      <label>
        <input type="checkbox" name="checkbox2" checked={formData.checkbox2} onChange={handleChange} />
        <span className='checkbox-title'>ჩანთა</span>
      </label> 
     <div>
      </div>
      </div>
      </div>
      <button type="submit" className='submit-button'>Send Email</button>
    </form>

    <div className="video-instruction">
      <h3>ვიდეო ინსტრუცტია</h3>
    <video controls width="500" height="500">
      <source src={InstuctionVideo} type="video/mp4" />
    </video>
    </div>

    <div className='written-instruction'>
      <OrderInfo />
    </div>
    </div>
    </>
  );
};

export default Order;
