import React from 'react';
import './about.css';

const about = () => {
  return (
    <>
      {/* About Section */}
      <div className="home-about-me" id='about'>
        <div className="home-about-card">
          <div className="home-about-img">
            <img src="/img/IMG_20250609_115924~2.jpg" alt="" />
          </div>
          <div className="home-about-banner">
            <div className="home-about-text">
              <h1>About Me</h1>
              <h1>I am a passionate web developer.</h1>
            </div>
            <p>
              With a background in engineering and a passion for technology, I
              bring a unique perspective to web development. My technical
              expertise combined with design sensibility allows me to create
              solutions that are both functional and beautiful.
            </p>
           <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
