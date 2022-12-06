import React from 'react';
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
        <article className='project-item'>
          <div className='project-image'></div>
          <h3>Project Title</h3>
          <a href='https://github.com/' className='btn'target='_blank'>Repo Link</a>
          <a href='https://github.com/' className='btn' target='_blank'>Deployed App Link</a>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;