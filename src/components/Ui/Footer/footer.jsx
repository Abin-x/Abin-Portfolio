import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3><a href="#home">Abin Y</a></h3>
          <p>Full Stack Developer | MERN Stack</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/Abin-x" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/abin-y" target="_blank"><FaLinkedin /></a>
            <a href="https://instagram.com/abin_ig" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Abin Y. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
