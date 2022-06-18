import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_q582goh', 'template_i0rrbnh', form.current, '8eLQc2PoZtzpAiGJF');

      e.target.reset();
   };
   return (
      <section id='contact'>
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className='container contact_container'>
            <div className='contact_options'>
               <article className='contact_option'>
                  <MdOutlineEmail className='contact_option-icon' />
                  <h4>Email</h4>
                  <h5>ngxumzalusanda@gmail.com</h5>
                  <a href='mailto:ngxumzalusanda@gmail.com' target='_blank'>
                     Send a message
                  </a>
               </article>
               <article className='contact_option'>
                  <BsWhatsapp className='contact_option-icon' />
                  <h4>Whatsapp</h4>
                  <h5>063 048 8930</h5>
                  <a href='https://api.whatsapp.com/send?phone=+27630488930' target='_blank'>
                     Send a message
                  </a>
               </article>
            </div>

            <form onSubmit={sendEmail} ref={form}>
               <input type='text' name='name' placeholder='Your Full Name' required />
               <input type='email' name='email' placeholder='Your Email' required />
               <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
               <button type='submit' className='btn btn-primary'>
                  Send Message
               </button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
