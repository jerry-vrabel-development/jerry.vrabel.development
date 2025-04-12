import React from 'react';
import { IoIosCodeWorking } from "react-icons/io";
import { FaServer, FaDatabase, FaReact, FaAws } from "react-icons/fa";
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Enterprise CRM Platform",
      description: "Led development of a cloud-based CRM system serving 500+ enterprise clients with 99.9% uptime.",
      technologies: "React, Node.js, MongoDB, AWS",
      role: "Lead Architect & Full Stack Developer",
      year: "2020-Present"
    },
    {
      id: 2,
      title: "FinTech Payment Processing System",
      description: "Architected and implemented a secure payment gateway processing $50M+ in transactions monthly.",
      technologies: "Java, Spring Boot, PostgreSQL, Kubernetes",
      role: "Technical Lead",
      year: "2018-2020"
    },
    {
      id: 3,
      title: "Healthcare Data Management Platform",
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
      description: "Leading architecture decisions and development for enterprise SaaS products with microservices architecture."
    },
    {
      company: "Agile 6",
      position: "Lead Full Stack Developer",
      period: "2024",
      description: "VA.gov"
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
          <h1><IoIosCodeWorking className="header-icon" /> Portfolio</h1>
          <h2>Building robust, scalable applications for over two decades</h2>
        </header>

        <section className="portfolio-summary">
          <h3>Professional Summary</h3>
          <p>
            Seasoned full stack developer with 20+ years of experience architecting 
            and implementing enterprise-grade applications. Specialist in distributed 
            systems, microservices architecture, and cloud infrastructure. Proven track 
            record of delivering high-performance solutions across fintech, healthcare, 
            and e-commerce sectors.
          </p>
        </section>

        <section className="portfolio-skills">
          <h3>Technical Expertise</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4><FaReact className="skill-icon" /> Frontend</h4>
              <ul>
                <li>React/Redux/Next.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3/SASS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4><FaServer className="skill-icon" /> Backend</h4>
              <ul>
                <li>Node.js/Express</li>
                <li>Java/Spring Boot</li>
                <li>Python/Django/Flask</li>
                <li>Ruby on Rails</li>
                <li>GraphQL/REST API Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4><FaDatabase className="skill-icon" /> Database</h4>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4><FaAws className="skill-icon" /> DevOps</h4>
              <ul>
                <li>AWS/Azure/GCP</li>
                <li>Docker/Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform/CloudFormation</li>
                <li>Monitoring & Observability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="portfolio-projects">
          <h3>Featured Projects</h3>
          <div className="projects-container">
            {featuredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <h4>{project.title}</h4>
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
