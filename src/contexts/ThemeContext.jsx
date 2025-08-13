import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  grand: {
    name: 'Grand',
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    accent: '#ffd700',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#2c3e50',
    textLight: '#555555',
    border: '#e9ecef'
  },
  elegant: {
    name: 'Elegant',
    primary: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    secondary: 'linear-gradient(135deg, #bdc3c7 0%, #95a5a6 100%)',
    accent: '#e74c3c',
    background: '#ecf0f1',
    surface: '#ffffff',
    text: '#2c3e50',
    textLight: '#7f8c8d',
    border: '#bdc3c7'
  },
  vibrant: {
    name: 'Vibrant',
    primary: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
    secondary: 'linear-gradient(135deg, #4ecdc4 0%, #45b7aa 100%)',
    accent: '#ffe66d',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#2c3e50',
    textLight: '#6c757d',
    border: '#dee2e6'
  },
  royal: {
    name: 'Royal',
    primary: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
    secondary: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    accent: '#f1c40f',
    background: '#fdf6e3',
    surface: '#ffffff',
    text: '#2c3e50',
    textLight: '#8e44ad',
    border: '#d4b9da'
  },
  ocean: {
    name: 'Ocean',
    primary: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    secondary: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
    accent: '#f39c12',
    background: '#ecf0f1',
    surface: '#ffffff',
    text: '#2c3e50',
    textLight: '#34495e',
    border: '#85c1e9'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('grand');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioTheme', currentTheme);
    
    // Apply CSS custom properties to the root element
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--primary-gradient', theme.primary);
    root.style.setProperty('--secondary-gradient', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--background-color', theme.background);
    root.style.setProperty('--surface-color', theme.surface);
    root.style.setProperty('--text-color', theme.text);
    root.style.setProperty('--text-light-color', theme.textLight);
    root.style.setProperty('--border-color', theme.border);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    changeTheme,
    availableThemes: Object.keys(themes)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
