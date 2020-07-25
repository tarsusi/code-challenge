import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-container__link">
        HomePage
      </Link>
    </header>
  );
};

export default Header;
