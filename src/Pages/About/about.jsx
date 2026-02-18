import React from 'react';
import './about.css';

const about = () => {
  return (
    <>
      <div className="home-about-me" id="about">
        <div className="home-about-card">
          <h2 className="about-heading">About Me</h2>

          <div className="home-about-grid">
            <div className="home-about-img">
              <img src="/img/IMG_20250608_091322.jpg" alt="About Me" />
            </div>

            <div className="home-about-banner">
              <h3>I am a passionate Web Developer.</h3>
              <p>
                With a background in engineering and a strong passion for
                technology, I bring a unique blend of creativity and technical
                skills to web development. My mission is to build responsive,
                accessible, and visually compelling web applications using
                modern technologies and best practices.
              </p>
              {/* <div className="home-btn">
                <button className="contact-btn">Contact Me</button>
                <button className="download-btn">Download CV</button>
              </div> */}
              <div className="about-social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram "></i>
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
