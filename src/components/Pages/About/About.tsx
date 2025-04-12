import React from 'react';
import { FcAbout } from "react-icons/fc";
import { FaUserAlt, FaQuestionCircle, FaLaptopCode } from "react-icons/fa";
import './About.css';

const About: React.FC = () => {
  return (
    <div className='about' id="about">
      <div className='about-container'>
        <div className='about-header'>
          <h1><span className='header-icon'><FcAbout /></span>About Me</h1>
          <div className='header-underline'></div>
          <h2>Software Developer & Problem Solver</h2>
        </div>
        
        <div className='about-content'>
          <div className='about-intro'>
            <p>I'm Jerry Vrabel, a passionate developer with a drive to create innovative solutions.</p>
          </div>
          
          <div className='about-section'>
            <h2><FaUserAlt className="section-icon" /> Who am I?</h2>
            <div className='section-content'>
              <p>A skilled software developer with over 16 years of experience in building robust and scalable applications. My
              expertise spans across React, Node.js, TypeScript, and cloud infrastructure. When I'm not coding, you can find me walking my doggo, or painting perhaps.</p>
            </div>
          </div>
          
          <div className='about-section'>
            <h2><FaLaptopCode className="section-icon" /> What do I do?</h2>
            <div className='section-content'>
              <p>As a developer, my focus is on crafting high-quality software that solves real-world problems. I believe in staying
              up-to-date with the latest trends and technologies to deliver cutting-edge solutions. Some of the projects I've worked on include:</p>
              
              <ul className='about-list'>
                <li><a href="https://github.com/jerry-vrabel-development" className="project-link">E-commerce Platform - A full-stack application with React, Node.js, and MongoDB</a> </li>
                <li><a href="https://github.com/jerry-vrabel-development" className="project-link">Smart Home Dashboard - IoT control interface using React and WebSockets</a></li>
              </ul>
            </div>
          </div>
          
          <div className='about-section'>
            <h2><FaQuestionCircle className="section-icon" /> Why this website?</h2>
            <div className='section-content'>
              <p>I created this site as a way to showcase my work and market professional skills. </p>
              
              <ul className='about-list'>
                <li>Updates on my latest projects and achievements</li>
                <li>Insights into the development process and lessons learned</li>
                <li>Resources and tutorials on modern web development practices</li>
              </ul>
              
              <div className='about-closing'>
                <p>Thanks for stopping by! If you have any questions or just want to say hello, feel free to reach out through the contact page.</p>
                <p>Best regards,</p>
                <p className='signature'>Jerry Vrabel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
