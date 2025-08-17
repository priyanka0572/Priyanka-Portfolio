import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-priyanka">Priyanka</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Priyanka</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create beautiful, functional, and user-friendly web applications that 
              solve real-world problems. Passionate about clean code, modern design, 
              and delivering exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="/Priyanka-Resume.pdf" download="Priyanka-Resume.pdf" className="btn-secondary">Download Resume</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/priyanka0572" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/priyanka-v-4ba26b312" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:venkateshpriyanka05@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-circle">
              <img src="./priyanka-pic.jpg" alt="Priyanka V" className="profile-pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
