import React from 'react';
import './service.css';

const Service = () => {
  return (
    <div className="service-container" id="services">
      <div className="service-card-bg">
        <h2>My Services</h2>

        <div className="service-card-box">
          
          <div className="service-card">
            <h3>Full-Stack Web Development</h3>
            <p>
              I build scalable and secure web applications using the MERN stack,
              handling everything from frontend UI to backend logic and database design.
            </p>
          </div>

          <div className="service-card">
            <h3>Custom Application Development</h3>
            <p>
              I develop tailored solutions such as booking systems, admin dashboards,
              and role-based platforms based on real business requirements.
            </p>
          </div>

          <div className="service-card">
            <h3>Frontend Development (React)</h3>
            <p>
              I create responsive, modern, and interactive user interfaces using React,
              ensuring smooth user experience across all devices.
            </p>
          </div>

          <div className="service-card">
            <h3>Backend & API Development</h3>
            <p>
              I design secure RESTful APIs with Node.js and Express, including
              authentication, authorization, and optimized MongoDB integration.
            </p>
          </div>

          <div className="service-card">
            <h3>Authentication & Security</h3>
            <p>
              Implementation of JWT-based authentication, role-based access control,
              password encryption, and secure data handling.
            </p>
          </div>

          <div className="service-card">
            <h3>Deployment & Optimization</h3>
            <p>
              Deployment-ready applications with performance optimization,
              clean architecture, and production-level configuration.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Service;