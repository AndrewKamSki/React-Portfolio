import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from 'emailjs-com';

const Contact = () => {
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
          <input type="email" name="email" placeholder="example@email.com" required />
          <textarea name="message" rows="8" placeholder="message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>        
        </form>
      </div>
    </section>
  )
};

export default Contact;