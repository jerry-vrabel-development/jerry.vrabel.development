import React from 'react';
import { IoIosContact } from "react-icons/io";
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className='contact' id="contact">
      <h1>Contact Page <IoIosContact /></h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
