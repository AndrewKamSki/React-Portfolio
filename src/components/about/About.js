import React from 'react';
import './about.css';
import Profile from '../../assets/profile-pic.png';
import SocialMediaIcons from './SocialMediaIcons';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className='container about-me-container'>
        <div className='about-me'>
          <div className='profile-pic'>
            <img src={Profile} alt='profile picture of Andrew Kaminski' />
          </div>
          <SocialMediaIcons />
        </div>
        
        <div className='about-me-content'>
          <p>
            I am a recent graduate from the Ohio State University College of Engineering's Full-Stack Web 
            Developement program. This was a 6-month intensive bootcamp focused on both front-end and back-end 
            developement using languages such as JavaScript, HTML/CSS and SQL, eventually focusing on the MERN stack.
          </p>
          <p>
            Currently, I am seeking a position as a Junior Web Developer, Software Engineer or any entry level engineering role. 
            I am based out of Columbus, Ohio but I am open to relocation and virtual/remote positions. 
            I aim to start my career while continuing my education and personal developement as a developer.
          </p>
          <p>
            I am currenlty working as a project manager at Sycamore Growth Group. Over the past two years I have successfully led 
            efforts to increase revenue by 100% through strategic planning, effective resource allocation, and strong leadership 
            of cross-functional teams. I also implemented a PTO (paid time off) calendar and tracking system, streamlining the process 
            for employees to request and track time off, and for managers to approve and manage requests. This included researching 
            and selecting a suitable software, creating and communicating guidelines and procedures, and providing training and 
            support for all stakeholders.
          </p>
          <p>
            Aside from work I am typically playing with my two cats Crush and Oli, playing in 
            intramural lacrosse games, and spending time with friends and family.
          </p>
          <p>
            Take some time to scroll through my portfolio and feel free to reach out! 
          </p>
        </div>
      </div>

    </section>
  )
};

export default About;