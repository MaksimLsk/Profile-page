import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark-theme');


  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    })
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};