import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from 'react-dark-mode-toggle';

import './header.scss';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header className="header-container">
      <Link to="/" className="header-container__link">
        HomePage
      </Link>
      <DarkModeToggle
        size={60}
        checked={isDarkMode}
        onChange={(isDark) => {
          setIsDarkMode(isDark);
        }}
      ></DarkModeToggle>
    </header>
  );
};

export default Header;
