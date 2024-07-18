import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className='fixed flex flex-col md:flex-row items-center justify-center md:px-[2vw] md:py-[2vw] border w-full h-auto md:h-[6vw] bg-gradient-to-r from-teal-900 to-black text-white text-2xl'>
        <div className='flex flex-col md:flex-row items-center text-[1.5vw] space-y-[2vw] md:space-y-0 md:space-x-[4vw] md:mt-0'>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500 ${activeLink === 'home' ? 'text-teal-500 underline underline-offset-8 decoration-4 decoration-teal-500' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500 ${activeLink === 'projects' ? 'text-teal-500 underline underline-offset-8 decoration-4 decoration-teal-500' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500 ${activeLink === 'skills' ? 'text-teal-500 underline underline-offset-8 decoration-4 decoration-teal-500' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500 ${activeLink === 'aboutme' ? 'text-teal-500 underline underline-offset-8 decoration-4 decoration-teal-500' : ''}`}
            onClick={() => handleLinkClick('aboutme')}
          >
            About me
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500 ${activeLink === 'contact' ? 'text-teal-500 underline underline-offset-8 decoration-4 decoration-teal-500' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;