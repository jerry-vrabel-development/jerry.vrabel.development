import { motion } from 'framer-motion';
import { FaUserAlt, FaLaptopCode, FaQuestionCircle, FaReact, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { ImStack } from "react-icons/im";
import { TbApi } from "react-icons/tb";
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
            Software Developer & Problem Solver
          </motion.p>
        </motion.header>

        <div className="about-content">
          {/* Experience Section */}
          <motion.section 
            className="about-section" 
            data-section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="about-section-title">
              <FaUserAlt className="section-icon" /> Experience
            </h2>
            <p className="about-text">
              With over 16 years of software engineering experience, I specialize in crafting robust and scalable applications. My skill set encompasses both front-end and back-end technologies, bolstered by a strong foundation in UX consulting. I am known for leading high-performing technical teams and driving innovation through the adoption of cutting-edge technologies. As a passionate frontend developer with agency experience, I excel at creating aesthetically pleasing and functional web solutions. My expertise includes React, Node.js, TypeScript, and cloud infrastructure.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="about-section" 
            data-section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="about-section-title">
              <FaLaptopCode className="section-icon" /> Skills
            </h2>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-title"><FaReact className="skill-icon" />Frontend Development</h3>
                <p className="skill-description">Expertise in UX design and accessibility standards.</p>
                <motion.ul className="skill-list">
                  {["TypeScript","React","Redux","Next.js","Angular","HTML5/CSS3/SASS"].map((skill, index) => (
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
                <h3 className="skill-title"><TbApi className="skill-icon" />Backend Technologies</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Skilled in Node.js for server-side development; adept at designing scalable APIs.
                </motion.p>
                <motion.ul className="skill-list">
                  {["Node.js/Express","GraphQL/REST API Design","Java/Spring Boot","Python/Django/Flask","Ruby on Rails"].map((skill, index) => (
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
                <h3 className="skill-title"><ImStack className="skill-icon" />Full-Stack Development</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Capable of handling both client-side and server-side operations to deliver end-to-end solutions.
                </motion.p>
              </div>

              <div className="skill-category">
                <h3 className="skill-title"><FaCloud className="skill-icon" />DevOps</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Experienced with cloud platforms, including AWS and Azure, for deploying scalable applications.
                </motion.p>
                <motion.ul className="skill-list">
                  {["AWS/Azure/GCP","Docker/Kubernetes","CI/CD Pipelines","Terraform/CloudFormation","Monitoring & Observability"].map((skill, index) => (
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
                <h3 className="skill-title"><FaDatabase className="skill-icon" />Database Management</h3>
                <motion.p 
                  className="skill-description"
                  variants={listItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Proficient in SQL and NoSQL databases like PostgreSQL and MongoDB.
                </motion.p>
                <motion.ul className="skill-list">
                  {["PostgreSQL","Redis","MongoDB","Elasticsearch","MySQL"].map((skill, index) => (
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
                <h3 className="skill-title"><FaRobot className="skill-icon" />AI Skills</h3>
                <motion.ul className="skill-list">
                  <motion.li
                    variants={listItemVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Proficient with Ollama for local AI model deployment and inference, enabling efficient development of custom AI solutions.
                  </motion.li>
                  <motion.li
                    variants={listItemVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Experienced with Hugging Face's ecosystem for accessing, fine-tuning, and deploying state-of-the-art machine learning models.
                  </motion.li>
                  
                  <motion.li
                    variants={listItemVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Skilled in implementing LLM applications using frameworks like LangChain and building custom RAG solutions for enterprise use cases.
                  </motion.li>
                  
                  <motion.li
                    variants={listItemVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Proficient with PyTorch and TensorFlow for developing and training custom machine learning models for diverse applications.
                  </motion.li>
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
              <FaQuestionCircle className="section-icon" /> About
            </h2>
            <p className="about-text">
              I focus on creating user-friendly interfaces while maintaining robust, secure, and efficient code.
            </p>
            <div className="about-closing">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Let's work together to bring your vision to life.
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
