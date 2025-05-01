import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="5" />
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: contact@hrcloud.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
