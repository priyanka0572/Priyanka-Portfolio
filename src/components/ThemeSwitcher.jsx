import React, { useState } from 'react';
import { useTheme, themes } from '../contexts/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeName) => {
    changeTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        🎨 {themes[currentTheme].name}
      </button>
      {isOpen && (
        <div className="theme-dropdown">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              className={`theme-option ${currentTheme === key ? 'active' : ''}`}
              onClick={() => handleThemeChange(key)}
              style={{
                background: theme.primary,
                color: 'white'
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
