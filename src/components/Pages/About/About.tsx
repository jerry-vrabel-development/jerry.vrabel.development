import { motion } from 'framer-motion';
import { FaUserAlt, FaLaptopCode, FaQuestionCircle } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <div className="about" id='about'>
      <div className="about-container">
        <header className="about-header">
          <div>
            <motion.h1
            >jv
            </motion.h1>
          </div>

          <p className="about-intro">
          Software Developer & Problem Solver
          </p>
        </header>

        <div className="about-content">
          {/* Experience Section */}
          <section className="about-section" data-section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="about-section-title">
                <FaUserAlt /> Experience
              </h2>
              <p className="about-text">A skilled software developer with over 16 years of experience in building robust and scalable applications.
                <p>My expertise spans across:<br /> React, Node.js, TypeScript, and cloud infrastructure. I'm a passionate frontend developer with agency experience creating beautiful and functional web</p>
              </p>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="about-section" data-section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="about-section-title">
                <FaLaptopCode /> Skills
              </h2>
              <p className="about-text">
                Proficient in React, TypeScript, Next.js, and modern frontend technologies.
              </p>
            </motion.div>
          </section>

          {/* About Section */}
          <section className="about-section" data-section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="about-section-title">
                <FaQuestionCircle /> About
              </h2>
              <p className="about-text">
                I focus on creating user-friendly interfaces while maintaining robust, secure, and efficient code.
              </p>
              <div className="about-closing">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Let's work together to bring your vision to life.
                </motion.p>
                <h3 className="signature">- jv</h3>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
