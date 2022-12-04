import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className='social-icons'>
      <a href='https://linkedin.com/in/andrewkaminski214' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/AndrewKamSki' target='_blank'>
        <FaGithub />
      </a>
    </div>
  )
};

export default SocialMediaIcons;