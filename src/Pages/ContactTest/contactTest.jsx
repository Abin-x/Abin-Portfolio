import React, { useState } from 'react';
import './contactTest.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  // Handle Input Change
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit to Google Form
  const sendToGoogleForm = async e => {
    e.preventDefault();

    if (!validate()) return;

    const formURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSdfBe9iwX3-SOiSnz-XTrB69hX3YDhg3i-1x7G-0btD7FW5Vg/formResponse';

    const formBody = new FormData();
    formBody.append('entry.535319089', formData.user_name);
    formBody.append('entry.723127721', formData.user_email);
    formBody.append('entry.247771939', formData.message);

    try {
      await fetch(formURL, {
        method: 'POST',
        mode: 'no-cors', // IMPORTANT
        body: formBody,
      });

      setSuccess('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-card">
        <h2>Contact Me</h2>

        <form className="contact-form" onSubmit={sendToGoogleForm}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
            {errors.user_name && (
              <small style={{ color: 'red' }}>{errors.user_name}</small>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && (
              <small style={{ color: 'red' }}>{errors.user_email}</small>
            )}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <small style={{ color: 'red' }}>{errors.message}</small>
            )}
          </div>

          <button type="submit">Send Message</button>

          {success && (
            <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
