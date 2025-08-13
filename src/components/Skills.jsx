import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "UI/UX Design",
      skills: ["Prototyping", "Wireframing", "User-centered design principles"]
    },
    {
      title: "Project Management",
      skills: ["Agile methodologies", "Task tracking", "Time management"]
    },
    {
      title: "Soft Skills",
      skills: ["Effective communication", "Teamwork", "Critical thinking", "Problem-solving"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
