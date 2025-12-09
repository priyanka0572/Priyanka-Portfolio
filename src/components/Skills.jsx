import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "FastAPI"]
    },
    {
      title: "DevOps & Cloud Tools",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Render", "Netlify"]
    },
    {
      title: "Developer Tools & Databases",
      skills: ["Git", "Postman API", "VS Code", "Google Colab", "MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      title: "UI/UX Design",
      skills: ["Prototyping", "Wireframing", "User-Centered Design Principles"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Teamwork", "Problem Solving"]
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
