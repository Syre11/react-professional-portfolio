import React from "react";

export default function ContactMe() {
  return (
    <div className="">
      <h2>Contact Me</h2>
        <form>
          {/* make these labels hover over the text box, then slide up, out of the way when you hover ************see supportimages/contactFormIdea*************/}
          <label for="fullName">Full name</label>
          <input name="fullName"></input>
          <label for="email">E-mail</label>
          <input name="email" type="email"></input>
          <label for="message">Message</label>
          <textarea name="message"></textarea>
        </form>
    </div>
  );
}
