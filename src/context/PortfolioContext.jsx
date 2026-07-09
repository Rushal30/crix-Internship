import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTheme = () => {
    setTheme((value) => (value === 'light' ? 'dark' : 'light'));
  };

  return (
    <PortfolioContext.Provider value={{ theme, toggleTheme, selectedProject, setSelectedProject }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used inside PortfolioProvider');
  }
  return context;
}
