import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

interface FooterProps {
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Jerry Vrabel Development" }) => {
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
        {/* Social Links */}
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p className="footer-copyright">
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="social-links">
            {["Revolt"].map((social) => (
              <motion.a
                key={social}
                href="https://rvlt.gg/1FYB0sxD"
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
