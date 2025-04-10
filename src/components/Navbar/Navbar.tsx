import { useState } from 'react';
import { motion } from 'framer-motion';
import { FcAbout } from "react-icons/fc";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { GiDogHouse } from "react-icons/gi";
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Animation for the underline effect
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <div className="App">
      <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
       
        <div className="menu-container">
          <ul className="navbar-ul">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <span>Home <GiDogHouse /></span>
                <div className="link-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span>About <FcAbout /></span>
                <div className="link-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <span>Services <MdMiscellaneousServices /></span>
                <div className="link-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <span>Portfolio <IoIosCodeWorking /></span>
                <div className="link-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span>Contact <IoIosContact /></span>
                <div className="link-underline"></div>
              </a>
            </li>
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
            <li className="mobile-nav-item">
              <a href="#home" className="nav-link">
                <span>Home</span>
                <motion.div 
                  className="link-underline"
                  initial="hidden"
                  whileHover="visible"
                  variants={underlineVariants}
                />
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="nav-link">
                <span>About</span>
                <motion.div 
                  className="link-underline"
                  initial="hidden"
                  whileHover="visible"
                  variants={underlineVariants}
                />
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#services" className="nav-link">
                <span>Services</span>
                <motion.div 
                  className="link-underline"
                  initial="hidden"
                  whileHover="visible"
                  variants={underlineVariants}
                />
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#portfolio" className="nav-link">
                <span>Portfolio</span>
                <motion.div 
                  className="link-underline"
                  initial="hidden"
                  whileHover="visible"
                  variants={underlineVariants}
                />
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="nav-link">
                <span>Contact</span>
                <motion.div 
                  className="link-underline"
                  initial="hidden"
                  whileHover="visible"
                  variants={underlineVariants}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
