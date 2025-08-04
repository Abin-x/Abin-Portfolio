import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-container" id="home">
      <div className="logo">Abin Y</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>

      <div className={`navlink ${isOpen ? 'show' : ''}`}>
        <Link smooth className="nav-item" to="/#home" onClick={closeMenu}>
          Home
        </Link>
        <Link smooth className="nav-item" to="/#about" onClick={closeMenu}>
          About
        </Link>
        <Link smooth className="nav-item" to="/#services" onClick={closeMenu}>
          Services
        </Link>
        <Link smooth className="nav-item" to="/#skills" onClick={closeMenu}>
          Skills
        </Link>
        <Link smooth className="nav-item" to="/#project" onClick={closeMenu}>
          Project
        </Link>
        <Link smooth className="nav-item" to="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
