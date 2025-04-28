import React from 'react';
import { IoIosContact } from "react-icons/io";
import './Contact.css';

const Contact: React.FC = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "019d82b3-93ff-4ff6-a949-af12fc33056b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id="contact">
      <h1>Contact Page <IoIosContact /></h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
