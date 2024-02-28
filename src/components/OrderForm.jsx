import React,{useState} from 'react'
import emailjs from "@emailjs/browser";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import InstuctionVideo from "../assets/video/insturctionVideo.mp4"
import OrderInfo from './OrderInfo';
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./orderForm.css";


const OrderForm = () => {
const [open,setOpen] = useState(false);
const [buttonText, setButtonText] = useState('Send Email');
const serviceId = "service_ijkoz4q";  
const templateId = "template_l0c4uxl";
const publicKey = "KCRw-B6zKIJegy5ho";

const handleToggle = () => {
  setOpen(!open)
}

const handleSubmit = (e) => {
  e.preventDefault();
  setButtonText('Sending...');

  emailjs.sendForm(serviceId, templateId, e.target,publicKey)
    .then(() => {
      setButtonText('Send Email');
      toast.success("შეკვეთა გაიგზავნა")
    })
    .catch((err) => {
      setButtonText('Send Email');
      alert(JSON.stringify(err));
    });
};

      return (
        <>
        <div className='wrapper'>
        <form id="form" onSubmit={handleSubmit}>
          <h3>შესაკვეთი ფორმა</h3>
      <div className="field">
        <input type="text" name="from_name" id="from_name" placeholder="სახელი" required />
        <ContactMailIcon className="icon"/>
      </div>
      <div className="field">
        <input type="text" name="from_email" id="from_email" placeholder="მეილი" required />
        <EmailIcon className="icon"/>
      </div>
      <div className="field">
        <input type="tel" name="from_tel" id="from_tel" placeholder="ნომერი" required />
        <PermPhoneMsgIcon className="icon" />
      </div>
      <div className="field">
        <label htmlFor="from_attachment" className='attach'>მიამაგრეთ თვალის ფოტო</label>
        <input type="file" name="from_attachment" id="from_attachment" required />
        <AttachEmailIcon className="attach-icon"/>
      </div>
      <div className="field" id="field-attach">
        <label htmlFor="from_attachment" className='attach'>მიამაგრეთ მეორე თვალის ფოტო</label>
        <input type="file" name="from_attachment" id="from_attachment"/>
        <AttachEmailIcon className="attach-icon"/>
      </div>
        {/* Check Boxes */}
        <div className='wrapp'>
        <div onClick={handleToggle} className='select-option'>
          {open? "დახურვა" : "პოსტერები ზომების მიხედვით:"}
        </div>
        {open && (
          <div>
           <div className="field-box">
           <label htmlFor="from_checkbox3">10x15სმ- 39₾</label>
           <input type="checkbox" name="from_checkbox3" id="from_checkbox3" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox4">20x20სმ-65₾</label>
           <input type="checkbox" name="from_checkbox4" id="from_checkbox4" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox5">25x35სმ- 85₾</label>
           <input type="checkbox" name="from_checkbox5" id="from_checkbox5" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox6">30x40სმ-105₾</label>
           <input type="checkbox" name="from_checkbox6" id="from_checkbox6" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox7">40x50სმ- 125₾</label>
           <input type="checkbox" name="from_checkbox7" id="from_checkbox7" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox8">40x60სმ -135₾</label>
           <input type="checkbox" name="from_checkbox8" id="from_checkbox8" />
         </div>
         <div className="field-box">
           <label htmlFor="from_checkbox9">50x70სმ - 155₾</label>
           <input type="checkbox" name="from_checkbox9" id="from_checkbox9" />
         </div>
         </div>
        )}
     
      {/* comment */}
      <div className="for-two-check">
      <div className="field-box">
        <label htmlFor="from_checkbox1">სამკაული</label>
        <input type="checkbox" name="from_checkbox1" id="from_checkbox1" />
      </div>
      <div className="field-box">
        <label htmlFor="from_checkbox2">ჩანთა</label>
        <input type="checkbox" name="from_checkbox2" id="from_checkbox2" />
      </div>
      </div>
      </div>
      <input type="submit" id="button" value={buttonText} />
    </form>
      <ToastContainer 
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}    
        pauseOnFocusLoss
        draggable
        pauseOnHover        
      />
    <div className='video-instruction'>
      <h3>ვიდეო ინსტრუქცია</h3>
      <video controls width="500" height="500" className='video-control'>
        <source src={InstuctionVideo} type="video/mp4" />
      </video>
    </div>

    <div className='written-instruction'>
      <OrderInfo />
    </div>
    </div>
    </>
      );
}

export default OrderForm
