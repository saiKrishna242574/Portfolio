import React from 'react';
import Navbar from './Navbar';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FlipWords } from "./ui/Flipwords";

const Home = () => {
  const words = ["React Native Developer", "React js Developer"];

  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex bg-gradient-to-r  from-teal-900 to-black flex-col md:flex-row items-center justify-center h-screen'>
        <div className='w-full mt-[8vw] ml-[-8vw] md:w-2/4 px-[4vw] py-[6vw] text-center  md:text-left'>
          <h3 className='text-3xl text-teal-500 font-bold font-serif'>Hello, It's me</h3>
          <h1 className='text-6xl font-bold mb-[1vw] font-serif text-teal-500'>Sai Krishna</h1>
          <h3 className='text-4xl ml-[] font-serif'>And I am a <FlipWords words={words} duration={3000} className="text-teal-400  ml-[-1vw]" /></h3>
          <p className='text-xl belleza-regular text-white mt-[2vw] '>
            I am a passionate frontend developer skilled in HTML, CSS, and JavaScript,
            specializing in creating responsive and dynamic user interfaces with React.js.
            I thrive on crafting engaging and innovative web experiences.....
          </p>
          <div className='flex justify-center md:justify-center space-x-[3vw] mt-[3vw]'>
            {/* <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-white hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={40} />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-white hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={40} />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='text-white hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={40} />
            </a> */}
            {/* <button className='flex font-bold border w-auto mr-[6vw] h-[3vw] rounded-2xl py-[0.5vw] px-[2vw] bg-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500 '>More About me</button> */}
          </div>
        </div>
        <div className='flex ml-[10vw] justify-center items-center'>
          <div>
            <img 
              className='rounded-[400vw] w-[34vw] h-[35vw] ml-[-5vw] mt-[8vw]  hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' 
              src="/images/img1.jpeg" 
              alt="Sai Krishna" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
