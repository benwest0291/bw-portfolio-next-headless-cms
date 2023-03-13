import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bb8y3v', 'template_vobm7ta', form.current, 'oPcyQ3fHzSsarge9r')
      .then((result) => {
        console.log(result.text);
        setStatusMessage("Your message has been sent to Ben, he will aim to responed within 24 hours 😁");
      }, (error) => {
        console.log(error.text);
        setStatusMessage(`${error.text} happened 😱`);
      });
    e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form mb-4">
      <input className="form-control" type="text" name="user_name" placeholder='NAME' />
      <input className="form-control" type="number" name="user_number" placeholder='CONTACT NUMBER' />
      <input className="form-control" type="email" name="user_email" placeholder='EMAIL' />
      <textarea className="form-control" name="message" placeholder='MESSAGE' />
      <input className="contact__form__btn mt-3" type="submit" value="Send" />
      <p className="mt-2">{statusMessage}</p>
    </form>
  );
};

export default ContactForm
