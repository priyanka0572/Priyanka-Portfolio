import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Tamil", level: "Fluent" },
    { name: "Korean", level: "Basic" }
  ];

  return (
    <section id="languages" className="languages">
      <div className="container">
        <h2>Languages</h2>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-item">
              <h3>{language.name}</h3>
              <p className={`level ${language.level.toLowerCase()}`}>{language.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
