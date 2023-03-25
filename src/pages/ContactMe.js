import React, { useState } from "react";

export default function ContactMe() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    const inputType = event.target.name
    const inputValue = event.target.value

    if (inputType === "fullName") {
      setFullName(inputValueemail)
    } else if (inputType === "email") {
      setEmail(inputValue)
    } else {
      setMessage(inputValue)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="">
      <h2>Contact Me</h2>
        <form>
          {/* make these labels hover over the text box, then slide up, out of the way when you hover ************see supportimages/contactFormIdea*************/}
          <label for="fullName">Full name</label>
          <input name="fullName"value={fullName} onChange={handleInputChange}></input>
          <label for="email">E-mail</label>
          <input name="email" type="email" value={email}></input>
          <label for="message">Message</label>
          <textarea name="message" value={message}></textarea>
          <button type="submit" onClick={handleFormSubmit}>Send Message</button>
        </form>
    </div>
  );
}
