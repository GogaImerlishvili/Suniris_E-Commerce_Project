import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';


const Order = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b3rtu8o', 'template_0mpbjww', form.current, '4Alml_pZG21CATZ9c')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <form>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default Order
