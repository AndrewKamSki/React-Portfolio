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
            I am a current enrollee in The Ohio State University's College of Engineering's Full-Stack Web 
            Developement program. This is a 6-month intensive bootcamp focused on both front-end and back-end 
            developement using languages such as JavaScript, HTML/CSS and SQL, eventually focusing on the MERN stack.
          </p>
          <p>
            I'm officially 2/3 of the way through and will be completing the program at the 
            end of December.
          </p>
          <p>
            Currently I am seeking a position as a Junior Web Developer, Software Engineer or any entry level engineering role. 
            I am based out of Columbus, Ohio but I am open to relocation and virtual/remote positions. 
            I aim to start my career while continuing my education and personal developement as a developer.
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