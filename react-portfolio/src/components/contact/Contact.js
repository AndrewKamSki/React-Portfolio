import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import validator from 'validator';


const Contact = () => {
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("Please enter a valid email address")
    }
  }

  const [textarea, setTextarea] = useState("");
  const validateText = (e) => {
    let text = e.target.value;

    if (text) {
      setTextarea("");
    } else {
      setTextarea("Please include a message")
    }
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s8sg7gb', 'template_zky3sko', form.current, 'KYEj3f5O6v5gxTx-u')
  
    e.target.reset();
  }
  return (
    <section>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>andy.kaminski42@gmail.com</h5>
            <a href='mailto:andy.kaminski42@gmail.com'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="example@email.com" required onChange={(e) => validateEmail(e)}/>
          <textarea name="message" rows="8" placeholder="message" required onMouseOut={(e) => validateText(e)}></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>   
          {message}
          {textarea}     
        </form>
      </div>
    </section>
  )
};

export default Contact;