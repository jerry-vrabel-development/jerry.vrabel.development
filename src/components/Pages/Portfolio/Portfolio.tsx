import React from 'react';
import { SiAffinitydesigner } from "react-icons/si";
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Enterprise Media Platform",
      imageUrl: "./src/assets/images/winter-bash-jarvis.jpg",
      description: "Led development of a cloud-based CRM system serving 500+ enterprise clients with 99.9% uptime.",
      technologies: "React, Node.js, MongoDB, AWS",
      role: "Lead Architect & Full Stack Developer",
      year: "2020-Present"
    },
    {
      id: 2,
      title: "Enterprise CMS System",
      imageUrl: "./src/assets/images/summer-sunrise-bash.jpg",
      description: "Architected and implemented a secure payment gateway processing $50M+ in transactions monthly.",
      technologies: "Java, Spring Boot, PostgreSQL, Kubernetes",
      role: "Technical Lead",
      year: "2018-2020"
    },
    {
      id: 3,
      title: "Healthcare Data Management",
      imageUrl: "./src/assets/images/beach-smile-bash.jpg",
      description: "Built HIPAA-compliant platform for managing patient data across 12 major hospital networks.",
      technologies: "Python, Django, React, Azure, Redis",
      role: "Senior Full Stack Engineer",
      year: "2015-2018"
    }
  ];

  const workHistory = [
    {
      company: "Forwardslash Development",
      position: "Principal Software Architect",
      period: "2008-Present",
      description: "Leading architecture decisions and development for enterprise SaaS products with microservices architecture.As an experienced web application engineer, I delivered agile-driven projects from small websites to complex content management systems, leading cross-functional teams to enhance development speed by 25%, mentored developers to boost productivity, collaborated with clients for clear project goals, and implemented robust automated testing strategies."
    },
      {
      company: "Agile 6",
      position: "Senior Full Stack Engineer",
      period: "2024",
      description: "Engineered the modern headless foundation for VA.gov, reducing content publishing times for thousands of editors from hours to under five minutes.Assisted with benefits claims processing improvements across the VA stack as part of the PACT Act. Including but not limited to: accessibility updates to custom React form inputs, improving OCR processing of PDF claim data in Python, and adding new features in React and Ruby for Accredited Representatives helping Veterans with the claims process. Rapid prototyping of technical solutions leading to major contract vehicle wins, receiving highest technical marks from government evaluators."
    },
    {
      company: "VMLY&R",
      position: "Senior Software Engineer",
      period: "2022-2023",
      description: "Agency development for global brands"
    },
    {
      company: "Healthcare Information and Management Systems Society",
      position: "Lead Engineer",
      period: "2018-2022",
      description: "Built custom web applications and platforms for healthcare"
    },
    {
      company: "Digital Innovations Ltd.",
      position: "Software Developer",
      period: "2003-2005",
      description: "Worked on early web applications and content management systems."
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1><SiAffinitydesigner className="portfolio-header-icon" /> Portfolio</h1>
          <h2>Building robust, scalable applications for over two decades</h2>
        </header>

        <section className="portfolio-projects">
          <h3>Featured Projects</h3>
          <div className="projects-container">
            {featuredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <h4>{project.title}</h4>
                <img src={project.imageUrl || "/api/placeholder/400/200"}
                  alt={`${project.title} thumbnail`}
                  className="project-image"
                />
                <p className="project-description">{project.description}</p>
                <p className="project-tech"><strong>Technologies:</strong> {project.technologies}</p>
                <div className="project-meta">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-experience">
          <h3>Work Experience</h3>
          <div className="timeline">
            {workHistory.map((job, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-content">
                  <h4>{job.position}</h4>
                  <h5>{job.company}</h5>
                  <p className="timeline-period">{job.period}</p>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
