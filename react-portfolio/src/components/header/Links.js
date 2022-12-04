import React from "react";
import Resume from '../../assets/Resume.pdf';

const Links = () => {
  return (
    <div className='links'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
};

export default Links;