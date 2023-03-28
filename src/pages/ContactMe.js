import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const contactForm = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('syre11prof_portfolio', 'reactPortfolio_template', contactForm.current, 'jxuj-rEQG5Xro5f6O')
      .then((result) => {
          console.log(result.text);
          window.alert("Message Sent Successfully");
      }, (error) => {
          console.log(error.text);
          window.alert("Message failed to send");
      });
  };

  return (
    <div>
      <h4>Use the form below to send a message directly to my email.</h4>
      <form ref={contactForm} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="reply_to" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send Message"/>
      </form>
    </div>

  );
};
