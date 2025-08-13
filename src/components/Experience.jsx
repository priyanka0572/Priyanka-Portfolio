import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-items">
          <div className="experience-item">
            <h3>Web Development Intern</h3>
            <p className="company">Internpe, Rajasthan</p>
            <p className="duration">Feb 2025</p>
            <ul>
              <li>Worked on multiple web-based projects, including a calculator, to-do list, and e-commerce site.</li>
              <li>Utilized HTML, CSS, JavaScript, and React to build responsive, interactive applications, focusing on UI/UX best practices.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Web Development Intern</h3>
            <p className="company">Zero Solutions, Tamil Nadu</p>
            <p className="duration">Feb 2024</p>
            <ul>
              <li>Developed a deeper understanding of web development fundamentals by creating a portfolio using HTML, CSS, and JavaScript.</li>
              <li>Designed and deployed a responsive portfolio website with dynamic images, ensuring an optimal user experience across multiple devices.</li>
              <li>Deployed a portfolio website using Netlify, showcasing understanding of web hosting and deployment practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
