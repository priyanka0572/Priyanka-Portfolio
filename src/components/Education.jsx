import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-items">
          <div className="education-item">
            <h3>Sri Sairam Engineering College</h3>
            <p className="degree">Bachelor of Engineering (B.E.) in Computer Science and Engineering (CSE)</p>
            <p className="duration">Sep 2023 – June 2027</p>
            <p className="gpa">GPA: 8.86/10.0</p>
          </div>
          <div className="education-item">
            <h3>Chinmaya Vidyalaya Senior Secondary School</h3>
            <p className="degree">Central Board of Secondary Education (CBSE)</p>
            <p className="duration">June 2009 – March 2023</p>
            <p className="percentage">Percentage: 95%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
