import React from 'react';
import './resume.css';
import ResumePdf from '../../assets/Resume.pdf';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div className='container resume-container'>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>NodeJs</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Bootstrap</li>
          <li>Heroku</li>
          <li>HandleBars</li>
          <li>Slack</li>
          <li>Nodemailer</li>
        </ul>
        <div className='resume-btn'>
          <a href={ResumePdf} download="Andrew-Kaminski-Resume" className='btn'>Download Resume</a>
        </div>
      </div>
    </section>
  )
};

export default Resume;