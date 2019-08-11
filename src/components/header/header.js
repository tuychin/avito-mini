import React from 'react';

import Navbar from '../navbar/';
import Filter from '../filter';

import './header.css';

const Header = () => {
  return (
    <header>
      <Navbar />
      <Filter />
    </header>
  );
}

export default Header;