import React, { useState, createContext } from 'react';

export const ThemeContext = createContext({
  lightTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};