import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Skills from './Skills';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';

const Landingpage = () => {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Landingpage;
