import React from 'react';
import './nav.css'
import { BsInfoSquare } from 'react-icons/bs';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { TiDocumentText } from 'react-icons/ti';
import { RiContactsBookLine } from 'react-icons/ri';

const Nav = ({ componentSelect, handleComponentChange }) => {

  return (
    <nav>
      <a href='#about' className={componentSelect === 'about' ? 'select' : ''} onClick={() => handleComponentChange('about')}>
        <BsInfoSquare />
        <h5>About</h5>
      </a>
      <a href='#portfolio' className={componentSelect === 'portfolio' ? 'select' : ''} onClick={() => handleComponentChange('portfolio')}>
        <HiOutlineSquares2X2 />
        <h5>Portfolio</h5>
      </a>
      <a href='#resume' className={componentSelect === 'resume' ? 'select' : ''} onClick={() => handleComponentChange('resume')}>
        <TiDocumentText />
        <h5>Resume</h5>
      </a>
      <a href='#contact' className={componentSelect === 'contact' ? 'select' : ''} onClick={() => handleComponentChange('contact')}>
        <RiContactsBookLine />
        <h5>Contact</h5>
      </a>
    </nav>
  )
};

export default Nav;