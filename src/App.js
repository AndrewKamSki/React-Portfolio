import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [componentSelect, setComponentSelect] = useState('about');

  const renderComponent = () => {
    if (componentSelect === 'about') {
      return <About />
    } else if (componentSelect === 'portfolio') {
      return <Portfolio />
    } else if (componentSelect === 'resume') {
      return <Resume />
    } else {
      return <Contact />
    }
  };

  const handleComponentChange = (component) => setComponentSelect(component);

  return (
    <>
      <Header />
      <Nav componentSelect={componentSelect} handleComponentChange={handleComponentChange}/>
      {renderComponent()}
      <Footer />
    </>
  )
}

export default App;
