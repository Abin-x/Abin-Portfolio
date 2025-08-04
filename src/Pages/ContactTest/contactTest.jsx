import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactTest.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // ✅ Regex validation functions
  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z ]{3,30}$/.test(formData.user_name)) {
      newErrors.user_name = 'Enter a valid name (letters only, 3–30 characters)';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Enter a valid email address';
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔄 Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // 🚀 Send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            {errors.user_name && <small style={{ color: 'red' }}>{errors.user_name}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            {errors.user_email && <small style={{ color: 'red' }}>{errors.user_email}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
