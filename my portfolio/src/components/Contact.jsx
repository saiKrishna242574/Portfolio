import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-gradient-to-r from-teal-900 to-black text-white'>
      <h1 className='text-3xl mb-[8vw]'>
        <span className='text-4xl text-white font-bold hover:text-teal-500 transition duration-500'>Contact Me</span>
        {/* <span className='hover:text-teal-500 text-white transition duration-500'> Me</span> */}
      </h1>
      <div className='flex flex-wrap justify-center gap-16 mb-8'>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={80} />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={80} />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='hover:text-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500' size={80} />
        </a>
      </div>
      {/* <div className='flex flex-col items-center space-y-4 text-lg'>
        <div className='flex items-center'>
          <MdEmail className='mr-2' size={30} />
          <span>msk242574@gmail.com</span>
        </div>
        <div className='flex items-center'>
          <MdPhone className='mr-2' size={30} />
          <span>+91 9110520049</span>
        </div>
      </div> */}
      <footer className='absolute bottom-4 w-full text-center'>
        <p className='text-white text-sm'>
          {/* Developed by Sai Krishna Muddamsetti &copy; 2023 */}
        </p>
      </footer>
    </div>
  );
};

export default Contact;
