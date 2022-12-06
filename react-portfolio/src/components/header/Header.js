import React from 'react';
import './header.css';
import Links from './Links';

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h1>Andrew Kaminski</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Links />
      </div>
    </header>
  )
};

export default Header;