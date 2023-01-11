import React from 'react';
import './resume.css';
import ResumePdf from '../../assets/Resume.pdf';
import {IconContext} from 'react-icons';
import { SiJavascript, SiHtml5, SiCss3, SiSlack, SiHandlebarsdotjs, SiHeroku, SiBootstrap, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiGit, SiGithub, SiSequelize, SiNpm, SiJquery, SiJest, SiVisualstudio } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FiMail } from 'react-icons/fi';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div className='container resume-container'>
        <div className='resume-btn'>
          <a href={ResumePdf} download="Andrew-Kaminski-Resume" className='btn'>Download Resume</a>
        </div>
        <h3>Skills</h3>
        <ul>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiJavascript />
                </>
              </IconContext.Provider>
            </div>
            <p>JavaScript</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiHtml5 />
                </>
              </IconContext.Provider>
            </div>
            <p>HTML5</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiCss3 />
                </>
              </IconContext.Provider>
            </div>
            <p>CSS3</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiMongodb />
                </>
              </IconContext.Provider>
            </div>
            <p>MongoDB</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiExpress />
                </>
              </IconContext.Provider>
            </div>
            <p>Express</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiReact />
                </>
              </IconContext.Provider>
            </div>
            <p>React</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiNodedotjs />
                </>
              </IconContext.Provider>
            </div>
            <p>NodeJs</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiNpm />
                </>
              </IconContext.Provider>
            </div>
            <p>NPM</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiGit />
                </>
              </IconContext.Provider>
            </div>
            <p>Git</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiGithub />
                </>
              </IconContext.Provider>
            </div>
            <p>GitHub</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <GrMysql />
                </>
              </IconContext.Provider>
            </div>
            <p>MySQL</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiSequelize />
                </>
              </IconContext.Provider>
            </div>
            <p>Sequelize</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiBootstrap />
                </>
              </IconContext.Provider>
            </div>
            <p>Bootstrap</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiJquery />
                </>
              </IconContext.Provider>
            </div>
            <p>JQuery</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiHeroku />
                </>
              </IconContext.Provider>
            </div>
            <p>Heroku</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiHandlebarsdotjs />
                </>
              </IconContext.Provider>
            </div>
            <p>HandleBars</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiJest />
                </>
              </IconContext.Provider>
            </div>
            <p>Jest</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiSlack />
                </>
              </IconContext.Provider>
            </div>
            <p>Slack</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <FiMail />
                </>
              </IconContext.Provider>
            </div>
            <p>Nodemailer</p>
          </li>
          <li>
            <div className='skill-icon'>
              <IconContext.Provider value={{ className: 'shared-class', size: 32 }}>
                <>
                  <SiVisualstudio />
                </>
              </IconContext.Provider>
            </div>
            <p>VSCode</p>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Resume;