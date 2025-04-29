import * as React from 'react';
import { InlineWidget } from "react-calendly";
import { IoIosContact } from "react-icons/io";
import ContactForm from '../../ContactForm/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className='contact-container' id="contact">
      <h1 className="contact-heading"><IoIosContact /> Contact Page</h1>
     
      <div className="contact-content">
        <div className="contact-calendly-container">
          <InlineWidget
            url="https://calendly.com/jerry-vrabel-development/new-meeting"
            styles={{ height: '100%', width: '100%' }}
            pageSettings={{
              backgroundColor: '020c1b',
              textColor: 'fefefe',
              primaryColor: 'ffa500'
            }}
          />
        </div>
        <div className="contact-form-container">
          <div className="contact-form-title"><h2>Contact Jerry Vrabel Development</h2></div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
