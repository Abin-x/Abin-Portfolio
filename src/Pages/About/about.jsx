import React from 'react';
import './about.css';

const about = () => {
  return (
    <>
      {/* About Section */}
      <div className="home-about-me">
        <div className="home-about-card">
          <div className="home-about-img">
            <img src="/img/IMG_20250609_115924~2.jpg" alt="" />
          </div>
          <div className="home-about-banner">
            <div className="home-about-text">
              <h1>About Me</h1>
            </div>
            <p>
              With a background in engineering and a passion for technology, I
              bring a unique perspective to web development. My technical
              expertise combined with design sensibility allows me to create
              solutions that are both functional and beautiful.
            </p>
            <br />
            <p>
              I specialize in building robust web applications using modern
              JavaScript frameworks and designing intuitive user interfaces that
              enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
