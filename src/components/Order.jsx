import React, {useState} from 'react';
import emailjs from "@emailjs/browser";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstuctionVideo from "../assets/video/insturctionVideo.mp4"
import OrderInfo from './OrderInfo';
import "./order.css"  
const Order = () => {
  // const form = useRef();
  const [named,setNamed] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [check,setCheck] = useState({
    option1:false,
    option2:false,
    option3:false,
  })
  const [result,setResult] = useState("")



  const handleChange = (e) => {
      const { name, checked } = e.target;

    setCheck((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));

   
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ijkoz4q";
    const templateId = "template_l0c4uxl";
    const publicKey = "KCRw-B6zKIJegy5ho";

    // Create a new object that contains dynamic template params 
    const templateParams = {
      from_name: named,
      from_email: email,
      from_tel: phone,
      from_check: check,
      from_option1: check.option1 ? "Option 1 selected" : "",
      from_option2: check.option2 ? "Option 2 selected" : "",
      from_option3: check.option3 ? "Option 3 selected" : "",
      to_name: "Suniris"
    }

    // Prepare the data to be sent via EmailJS
 


    // Send the mail using EmailJS
    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response) => {
      console.log("Email sent successfully!",response);
      setNamed("");
      setEmail("");
      setPhone("");
      setCheck("")
    })
    .catch((error) => {
      console.error("Error sending email", error)
    })
  }

  return (
    <>
  {/* <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      <label>Message</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}  />
      <input type="submit" value="Send" />
    </form>
     */}
        <div className='wrapper'>
<form className='form' onSubmit={handleSubmit}>
 <h1>შესაკვეთი ფორმა</h1>
 <div className='input-box'>
  <input type="mail" placeholder='სახელი' value={named} onChange={(e) => setNamed(e.target.value)}  required />
  <ContactMailIcon className='icon' />
 </div>
 <div className='input-box'>
  <input type="mail" placeholder='მეილი' value={email} onChange={(e) => setEmail(e.target.value)}  required />
  <AttachEmailIcon className='icon'/>
 </div>
 <div className='input-box'>
 <input type="tel" placeholder="ნომერი"value={phone} onChange={(e) => setPhone(e.target.value)}  />
  <PermPhoneMsgIcon className='icon'/>
 </div>
 <label>
        Option 1
        <input
          type="checkbox"
          name="option1"
          checked={check.option1}
          onChange={handleChange}
          // value={check.option1}
        />
      </label>
      <label>
        Option 2
        <input
          type="checkbox"
          name="option2"
          checked={check.option2}
          onChange={handleChange}
        />
      </label>
      <label>
        Option 3
        <input
          type="checkbox"
          name="option3"
          checked={check.option3}
          onChange={handleChange}
        />
      </label>
 {/* <div className='input-box'>
  <span>ატვირთეთ თვალის ფოტო</span>
 <input type="file" accept=".jpeg,.jpg" name="user_file" />
 </div> */}
 
 <button type="submit" value="Send">Send Email</button>
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
