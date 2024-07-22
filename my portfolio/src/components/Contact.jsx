import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import DockDemo from './ui/DockDemo';

const Contact = () => {
  return (
    <div className='flex flex-col h-[40vw]  justify-center items-center bg-gradient-to-r from-teal-900 to-black text-white'>
    <DockDemo/>
    </div>
  );
};

export default Contact;
