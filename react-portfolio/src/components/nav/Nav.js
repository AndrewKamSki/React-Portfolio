import React, { useState } from 'react';
import './nav.css'
import { FiHome } from 'react-icons/fi';
import { BsInfoSquare } from 'react-icons/bs';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { TiDocumentText } from 'react-icons/ti';
import { RiContactsBookLine } from 'react-icons/ri';

const Nav = () => {
  const [navSelect, setNavSelect] = useState('#about');

  return (
    <nav>
      {/* <a href='#' className={navSelect === '#' ? 'select' : ''} onClick={() => setNavSelect('#')}>
        <FiHome />
        <h5>Home</h5>
      </a> */}
      <a href='#about' className={navSelect === '#about' ? 'select' : ''} onClick={() => setNavSelect('#about')}>
        <BsInfoSquare />
        <h5>About</h5>
      </a>
      <a href='#portfolio' className={navSelect === '#portfolio' ? 'select' : ''} onClick={() => setNavSelect('#portfolio')}>
        <HiOutlineSquares2X2 />
        <h5>Portfolio</h5>
      </a>
      <a href='#resume' className={navSelect === '#resume' ? 'select' : ''} onClick={() => setNavSelect('#resume')}>
        <TiDocumentText />
        <h5>Resume</h5>
      </a>
      <a href='#contact' className={navSelect === '#contact' ? 'select' : ''} onClick={() => setNavSelect('#contact')}>
        <RiContactsBookLine />
        <h5>Contact</h5>
      </a>
    </nav>
  )
};

export default Nav;