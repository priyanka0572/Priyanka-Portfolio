import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Location</h3>
            <p>1/170, Sai Nagar, Virugambakkam, 600092</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:venkateshpriyanka05@gmail.com">venkateshpriyanka05@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+917550199253">+91 7550199253</a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/priyanka-v-4ba26b312" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/priyanka0572" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
