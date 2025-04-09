import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
        
        <div className="menu-container">
          <ul className="navbar-ul">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </button>

        {/* Mobile menu items */}
        <div className={`mobile-menu-container ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-navbar-ul">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
