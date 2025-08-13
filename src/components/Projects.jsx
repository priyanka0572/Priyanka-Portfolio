import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-item featured">
            <h3>AI and IoT-Based Storm Overflow Prediction</h3>
            <p className="status">Ongoing</p>
            <p>
              Focused on real-time monitoring and predictive analytics of storm overflow events, 
              aiming to alert municipalities in advance.
            </p>
            <ul>
              <li>Utilized AI, sensors (Ultrasonic, flow and temperature sensors), and LSTM-based ML models to predict overflow events</li>
              <li>Leveraging cloud-based solutions for real-time data processing</li>
            </ul>
            <div className="tech-stack">
              <span>IoT Sensors</span>
              <span>TensorFlow</span>
              <span>IBM Watson</span>
              <span>LSTM</span>
              <span>XGBoost</span>
              <span>QGIS</span>
            </div>
          </div>
          
          <div className="project-item">
            <h3>Mini Projects Collection</h3>
            <p>Various web development projects showcasing different skills</p>
            <ul>
              <li>Calculator with basic arithmetic operations and responsive design</li>
              <li>To-Do List App with task addition, deletion, and local storage integration</li>
              <li>E-commerce site front page with responsive design</li>
              <li>Portfolio Website with smooth navigation and clean layout</li>
            </ul>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <a href="https://github.com/priyanka0572" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
