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
    <div className='bg-whiteGeo bg-cover font-bodyFont flex flex-col items-center py-4'>
      <div className='justify-center'>
        <h4 className='w-full'>Use the form below to send a message directly to my email.</h4>
      </div>
      <form ref={contactForm} onSubmit={sendEmail} className='w-full max-w-xl'>
        <label className="">Full Name</label>
        <input className="bg-gray-200 border-gray-700 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" type="text" name="from_name" />
        <label className="">Email</label>
        <input className="bg-gray-200 border-gray-700 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" type="email" name="reply_to" />
        <label className="">Message</label>
        <textarea className="bg-gray-200 border-gray-700 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" name="message" />
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Send Message"/>
      </form>
    </div>
  );
};
