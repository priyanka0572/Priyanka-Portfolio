import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Sri Sairam Engineering College – Incubation Centre",
      location: "Chennai, Tamil Nadu",
      duration: "",
      responsibilities: [
        "Built backend modules for student management, mentor actions, certificates, and attendance using FastAPI",
        "Designed PostgreSQL schema and deployed services on AWS with Kubernetes for scalable orchestration",
        "Automated CI/CD pipelines using GitHub Actions to streamline deployments"
      ]
    },
    {
      title: "Web Development Intern",
      company: "InternPe",
      location: "Chennai, Tamil Nadu",
      duration: "",
      responsibilities: [
        "Built web applications (calculator, to-do list, e-commerce) using React and core web technologies, focusing on UI/UX and accessibility"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-items">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}, {exp.location}</p>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
