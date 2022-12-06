import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {IconContext} from 'react-icons';

const SocialMediaIcons = () => {
  return (
    <div className='social-icons'>
      <a href='https://linkedin.com/in/andrewkaminski214' target='_blank'>
        <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
          <>
            <FaLinkedin />
          </>
        </IconContext.Provider>
      </a>
      <a href='https://github.com/AndrewKamSki' target='_blank'>
        <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
          <>
            <FaGithub />
          </>
        </IconContext.Provider>
      </a>
    </div>
  )
};

export default SocialMediaIcons;