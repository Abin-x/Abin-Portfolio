import React from 'react';
import './projects.css';

const HomeProject = () => {
  return (
    <div className="home-project" id="project">
      <div className="home-project-card-bg">
        <h2>My Projects</h2>

        <div className="home-project-grid">
          {/* Project 1 */}
          <div className="home-project-wrapper">
            <div className="home-project-card">
              <img
                src="/img/Screenshot 2025-07-31 000726.png"
                alt="Ecommerce Project"
              />
            </div>
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-desc">
              I built a fully responsive and dynamic eCommerce website that
              allows users to browse products, manage their cart, securely log
              in, and complete payments. The platform includes product listings,
              user authentication, order management, and an admin dashboard.{' '}
              <br />
              <br />
              <strong>Technologies:</strong> HTML, CSS, JavaScript, React.js,
              Node.js, Express.js, MongoDB, Mongoose, Axios, JWT, Bcrypt.js,
              Stripe
            </p>
          </div>

          {/* Project 2 */}
          <div className="home-project-wrapper">
            <div className="home-project-card">
              <img
                src="/img/Screenshot 2025-07-31 001336.png"
                alt="Fitmate Project"
              />
            </div>
            <h3 className="project-title">Fitmate (Fitness Booking)</h3>
            <p className="project-desc">
              Fitmate is a fitness trainer consultation and booking platform
              where users can explore trainer profiles, check availability, and
              book training sessions. It includes dashboards for users,
              trainers, and admins, with integrated payment and schedule
              management.
              <br />
              <br />
              <strong>Technologies:</strong> React.js, Node.js, Express,
              MongoDB, Multer, Stripe, JWT, GSAP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
