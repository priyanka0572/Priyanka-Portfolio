import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Profile Summary</h2>
        <p>
          A highly motivated engineering student with a strong passion for web development and coding. 
          Demonstrates a solid foundation in problem-solving and a keen ability to quickly learn new technologies. 
          Eager to apply academic knowledge to real-world challenges and contribute to impactful projects while 
          gaining hands-on experience in a dynamic tech environment. Adept at collaborating in teams and 
          continuously seeking opportunities to expand technical skills.
        </p>
        <div className="achievements-subtle">
          <p><strong>Notable Achievement:</strong> First Place winner at JP Morgan Code for Good Hackathon</p>
        </div>
      </div>
    </section>
  );
};

export default About;
