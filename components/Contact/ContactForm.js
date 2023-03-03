import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

 const ContactForm = () => {
   const form = useRef();
   const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81ss9ok', 'template_bgxfchw', form.current, 'iZnUotY3oBnh-h8Xu')
      .then((result) => {
        console.log(result.text);
        setStatusMessage("Email sent success 😁");
      }, (error) => {
        console.log(error.text);
        setStatusMessage(`${error.text} happened 😱`);
      });
    e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form mb-4">
      <input type="text" name="user_name" placeholder='NAME' />
      <input type="number" name="user_number" placeholder='CONTACT NUMBER'  />
      <input type="email" name="user_email" placeholder='EMAIL'  />
      <textarea name="message" placeholder='MESSAGE'  />
      <input className="contact__form__btn mt-3" type="submit" value="Send" />
      <p className="mt-2">{statusMessage}</p>
    </form>
  );
};

export default ContactForm
