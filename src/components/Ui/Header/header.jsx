import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-container">
      <div className="logo">Abin Y</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <nav className={`navlink ${isOpen ? "show" : ""}`}>
        <Link smooth to="/#home" className="nav-item" onClick={closeMenu}>
          Home
        </Link>

        <Link smooth to="/#about" className="nav-item" onClick={closeMenu}>
          About
        </Link>

        <Link smooth to="/#services" className="nav-item" onClick={closeMenu}>
          Services
        </Link>

        <Link smooth to="/#skills" className="nav-item" onClick={closeMenu}>
          Skills
        </Link>

        <Link smooth to="/#project" className="nav-item" onClick={closeMenu}>
          Project
        </Link>

        <Link smooth to="/#contact" className="nav-item" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
