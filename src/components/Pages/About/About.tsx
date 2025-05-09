import { motion } from 'framer-motion';
import { FaUserAlt, FaLaptopCode, FaQuestionCircle, FaReact, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { ImStack } from "react-icons/im";
import { TbApi } from "react-icons/tb";
import { FaStore, FaSearchLocation, FaShoppingCart, FaCalendarAlt, FaTools, FaHandshake } from 'react-icons/fa';
import './About.css';

export default function About() {
  // Animation variants for list items
  const listItemVariants = {
    initial: { opacity: 0.9, x: 0 },
    hover: { opacity: 1, x: 5, transition: { duration: 0.2 } }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about" id='about'>
      <div className="about-container">
        <motion.header 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            jv
          </motion.h1>

          <motion.p 
            className="about-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Rogers Park's Premier Web Developer
          </motion.p>
        </motion.header>

        <div className="about-content">
          {/* Local Focus Section */}
          <motion.section 
            className="about-section" 
            data-section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="about-section-title">
              <FaSearchLocation className="section-icon" /> Rogers Park (60626) Focused
            </h2>
            <p className="about-text">
              As a Rogers Park resident and developer, I understand the unique needs of our diverse community. I specialize in creating digital solutions for local businesses that increase visibility, streamline operations, and grow your customer base right here in our neighborhood. From Devon Avenue to Howard Street, I help businesses like yours stand out in our vibrant community with custom web applications tailored to the 60626 area.
            </p>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            className="about-section" 
            data-section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="about-section-title">
              <FaLaptopCode className="section-icon" /> Services for Local Businesses
            </h2>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-title"><FaStore className="skill-icon" />Custom Website Development</h3>
                <p className="skill-description">Modern, responsive websites designed specifically for Rogers Park businesses.</p>
                <motion.ul className="skill-list">
                  {["Mobile-Friendly Design","Multilingual Options","Local SEO Optimization","Neighborhood-Focused Content","Integration with Google Maps"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaShoppingCart className="skill-icon" />E-commerce Solutions</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Help your Rogers Park business sell online to both local customers and beyond.
                </motion.p>
                <motion.ul className="skill-list">
                  {["Online Store Setup","Local Delivery Integration","Secure Payment Processing","Inventory Management","Customer Loyalty Programs"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaCalendarAlt className="skill-icon" />Booking & Reservation</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Perfect for Rogers Park restaurants, salons, fitness studios, and service providers.
                </motion.p>
                <motion.ul className="skill-list">
                  {["24/7 Online Booking","Automated Reminders","Staff Scheduling","Custom Intake Forms","Calendar Integration"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaTools className="skill-icon" />Business Automation</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Save time and reduce costs with custom automation solutions.
                </motion.p>
                <motion.ul className="skill-list">
                  {["Customer Communication","Invoice Generation","Appointment Scheduling","Email Marketing","Social Media Integration"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaCloud className="skill-icon" />Web Application Development</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Custom solutions for unique business challenges in Rogers Park.
                </motion.p>
                <motion.ul className="skill-list">
                  {["Customer Portals","Business Management Tools","Content Management Systems","Mobile Apps","Community Platforms"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaRobot className="skill-icon" />AI Integration</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Bringing cutting-edge AI solutions to Rogers Park small businesses.
                </motion.p>
                <motion.ul className="skill-list">
                  {["Customer Service Chatbots","Business Intelligence","Content Generation","Personalized Recommendations","Process Automation"].map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={listItemVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section 
            className="about-section" 
            data-section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="about-section-title">
              <FaHandshake className="section-icon" /> Why Choose a Local Developer
            </h2>
            <p className="about-text">
              With over 16 years of software engineering experience and deep roots in Rogers Park, I offer something national agencies can't - personalized service with local knowledge. I understand our community's unique character and customer base. When you work with me, you're supporting the local economy while getting top-tier web development tailored specifically to succeed in our neighborhood.
            </p>
            <div className="about-closing">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Let's meet for coffee at one of our great local cafés to discuss how I can help your Rogers Park business thrive online.
              </motion.p>
              <motion.h3 
                className="signature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                - jv
              </motion.h3>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
