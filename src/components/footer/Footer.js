import React from 'react';
import './footer.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { SiLeetcode} from 'react-icons/si';
import {IconContext} from 'react-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footer-socials'>
        <div className='footer-social'>
          <a href='https://linkedin.com/in/andrewkaminski214' target='_blank'>
            <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
              <>
                <FaLinkedin />
              </>
            </IconContext.Provider>
          </a>
          <h5>LinkedIn</h5>
        </div>
        <div className='footer-social'>
          <a href='https://github.com/AndrewKamSki' target='_blank'>
            <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
              <>
                <FaGithub />
              </>
            </IconContext.Provider>
          </a>
          <h5>GitHub</h5>
        </div>
        <div className='footer-social'>
          <a href='https://leetcode.com/andrew_kaminski/' target='_blank'>
            <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
              <>
                <SiLeetcode />
              </>
            </IconContext.Provider>
          </a>
          <h5>LeetCode</h5>
        </div>
      </div>
    </footer>
  )
};

export default Footer;