import React from 'react';
import './portfolio.css'
import SleeperImg from '../../assets/sleeper-logo.jpg';
import CoMTImg from '../../assets/Company-Image.jpg';
import HappyHourImg from '../../assets/happyhour.jpg';
import PM from '../../assets/PM.jpeg';
import Backend from '../../assets/backend.png';
import SocialNetwork from '../../assets/shortstack-blog-best-social-networks.jpg';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        <article className='project-item'>
          <div className='project-image'>
            <img src={PM} alt=''/>
          </div>
          <h3>Planit</h3>
          <div className='btns'>
            <a href='https://github.com/Edna1999/planit' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://planit.herokuapp.com/' className='btn btn-primary' target='_blank'>Deployed App Link</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='project-image'>
            <img src={HappyHourImg} alt=''/>
          </div>
          <h3>Happy Hour Log</h3>
          <div className='btns'>
            <a href='https://github.com/clbutl/happy-hour-log' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://happyhourlog.herokuapp.com/' className='btn btn-primary' target='_blank'>Deployed App Link</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='project-image'>
            <img src={SleeperImg} alt=''/>
          </div>
          <h3>Sleeper API Project</h3>
          <div className='btns'>
            <a href='https://github.com/AndrewKamSki/Sleeper-API-Project' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://andrewkamski.github.io/Sleeper-API-Project/' className='btn btn-primary' target='_blank'>Deployed App Link</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='project-image'>
            <img src={Backend} alt=''/>
          </div>
          <h3>E-commerce Backend API</h3>
          <div className='btns'>
            <a href='https://github.com/AndrewKamSki/E-commerce-Backend-API' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://drive.google.com/file/d/1l_gRDKnwO5FksWOJkslMES1pGqNLzPSA/view' className='btn btn-primary' target='_blank'>Video Walkthrough</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='project-image'>
            <img src={CoMTImg} alt=''/>
          </div>
          <h3>Company Management Tracker</h3>
          <div className='btns'>
            <a href='https://github.com/AndrewKamSki/Company-Management-Tracker' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://drive.google.com/file/d/1xeaDGuIfUQXaS0TY0W1b2LDU9Sz1sJcm/view' className='btn btn-primary' target='_blank'>Video Walkthrough</a>
          </div>         
        </article>
        <article className='project-item'>
          <div className='project-image'>
            <img src={SocialNetwork} alt=''/>
          </div>
          <h3>Social Network API</h3>
          <div className='btns'>
            <a href='https://github.com/AndrewKamSki/Social-Network-API' className='btn btn-primary'target='_blank'>Repo Link</a>
            <a href='https://drive.google.com/file/d/1j2vUgOhLnZ9mFWTZqNWoqgppZh_6Dly4/view' className='btn btn-primary' target='_blank'>Video Walkthrough</a>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;