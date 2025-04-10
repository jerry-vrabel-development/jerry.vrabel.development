import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

interface FooterProps {
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Awesome Company" }) => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h3 className="footer-heading" whileHover={hoverScale}>
              {companyName}
            </motion.h3>
            <p className="footer-text">
              Making the web beautiful, functional, and fast. Creating amazing digital experiences since 2007.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h3 className="footer-heading" whileHover={hoverScale}>
              Quick Links
            </motion.h3>
            <ul className="footer-links">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="footer-link"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h3 className="footer-heading" whileHover={hoverScale}>
              Contact Us
            </motion.h3>
            <address className="footer-contact">
              <p>Chicago, IL 60626</p>
              <p>jerry.vrabel.development@gmail.com</p>
            </address>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h3 className="footer-heading" whileHover={hoverScale}>
              Stay Updated
            </motion.h3>
            <p className="footer-text">Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <motion.button
                className="newsletter-button"
                whileHover={{ backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p className="footer-copyright">
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="social-links">
            {["Discord", "Slack", "Twitch", "LinkedIn"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="social-link"
                whileHover={hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
