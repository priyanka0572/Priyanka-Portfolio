import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI & IoT Storm Overflow Prediction",
      featured: true,
      description: "Developing a real-time stormwater monitoring system using ultrasonic and flow sensors to predict overflow risks in drainage networks.",
      highlights: [
        "Developing real-time stormwater monitoring system using ultrasonic and flow sensors to predict overflow risks in drainage networks",
        "Implemented LSTM and XGBoost models with cloud pipelines for accurate forecasting",
        "Integrated geospatial visualization using QGIS for overflow pattern analysis and risk mapping"
      ],
      technologies: ["IoT Sensors", "LSTM", "XGBoost", "QGIS", "Python", "Cloud Pipelines"],
      link: ""
    },
    {
      title: "Incubation Management System – Backend",
      featured: true,
      description: "A comprehensive backend system for managing student incubation programs with FastAPI and PostgreSQL.",
      highlights: [
        "Designed and implemented FastAPI REST modules for student onboarding, mentor workflows, certificates, and attendance tracking",
        "Engineered PostgreSQL schema for efficient data management and scalability",
        "Deployed on AWS with Kubernetes for containerized orchestration",
        "Integrated CI/CD pipelines via GitHub Actions for automated testing and deployment"
      ],
      technologies: ["FastAPI", "PostgreSQL", "AWS", "Kubernetes", "GitHub Actions", "Docker", "Python"],
      link: ""
    },
    {
      title: "Eye-Care Beneficiary Management System",
      featured: false,
      description: "Built an MVP to manage beneficiaries, donor coordination, inventory alerts, and program analytics for an eye-care nonprofit.",
      highlights: [
        "Built MVP for managing beneficiaries, donor coordination, and inventory alerts",
        "Developed program analytics dashboard for tracking eye-care nonprofit operations",
        "Implemented AI-powered chatbot for quick beneficiary lookup and data access",
        "Automated report generation to streamline administrative workflows"
      ],
      technologies: ["AI Chatbot", "Python", "Database Management", "Analytics", "Report Automation"],
      link: ""
    },
    {
      title: "AI-Driven Security Automation for Microservices",
      featured: false,
      description: "Engineered an AI-assisted security analyzer integrating LLMs and scanners to detect microservice and Kubernetes vulnerabilities.",
      highlights: [
        "Engineered AI-assisted security analyzer integrating LLMs and scanners (Trivy, KubeLinter)",
        "Automated detection of microservice and Kubernetes vulnerabilities",
        "Implemented automated SBOM (Software Bill of Materials) generation",
        "Developed prioritized remediation insights and CI/CD security checks"
      ],
      technologies: ["LLMs", "Trivy", "KubeLinter", "Kubernetes", "CI/CD", "Security Automation", "Python"],
      link: ""
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-item ${project.featured ? 'featured' : ''}`}>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
