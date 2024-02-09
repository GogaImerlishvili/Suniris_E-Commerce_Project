import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('senderEmail', senderEmail);
    formData.append('recipientEmail', recipientEmail);
    formData.append('subject', subject);
    formData.append('message', message);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.get('/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      console.log(error);
      alert('Error sending email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Your email" 
        required
        value={senderEmail} 
        onChange={(e) => setSenderEmail(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Recipient email" 
        required
        value={recipientEmail} 
        onChange={(e) => setRecipientEmail(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Subject" 
        required
        value={subject} 
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea 
        placeholder="Message" 
        required
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input 
        type="file" 
        accept=".pdf,.doc,.docx" 
        onChange={handleFileChange}
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Order;
