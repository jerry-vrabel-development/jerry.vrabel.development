import * as React from 'react';
import './ContactForm.css'

const ContactForm: React.FC = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Ensure you use a secure method to handle access keys in production
    formData.append("access_key", "019d82b3-93ff-4ff6-a949-af12fc33056b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "An error occurred while submitting the form.");
      }
    }  catch (error) {
      console.error("Network Error:", error);
      setResult("A network error occurred. Please try again later.");
    }
  };

  return (
    <div className='contact-form' id="contact-form">

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

export default ContactForm;
