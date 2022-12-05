import React from 'react';
import './header.css'
import Links from './Links';
import Profile from '../../assets/profile-pic.png'
import SocialMediaIcons from './SocialMediaIcons';

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h1>Andrew Kaminski</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Links />
        <div className='profile-pic'>
          <img src={Profile} alt='profile picture of Andrew Kaminski' />
        </div>

        <SocialMediaIcons />
      </div>
    </header>
  )
};

export default Header;