import React from 'react';
import './contact.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <div className="contact-card">
        <h2>Contact Me</h2>
        <div className="contact-wrapper">
          {/* Contact Form */}

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <FaEnvelope /> abin@example.com
            </p>
            <p>
              <FaPhoneAlt /> +91 9876543210
            </p>
            <p>
              <FaMapMarkerAlt /> Kochi, Kerala, India
            </p>
            <div className="social-icons">
              <a href="https://github.com/Abin-x" target="_blank">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abin-y" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/abin_ig" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
