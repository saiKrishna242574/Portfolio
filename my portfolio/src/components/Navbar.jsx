import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between md:px-[2vw] md:py-[2vw] border w-full h-auto md:h-[6vw] bg-gradient-to-r from-teal-900 to-black text-white text-2xl'>
        <h1 className='text-center text-4xl md:text-left'>Sai Krishna</h1>
        <div className='flex flex-col md:flex-row items-center space-y-[2vw] md:space-y-0 md:space-x-[4vw]  md:mt-0'>
          <button className='hover:text-teal-400 transition duration-300'>Home</button>
          <button className='hover:text-teal-400 transition duration-300'>About me</button>
          {/* <button className='hover:text-teal-400 transition duration-300'>Services</button> */}
          <button className='hover:text-teal-400 transition duration-300'>Skills</button>
          <button className='hover:text-teal-400 transition duration-300'>Project</button>
          <button className='hover:text-teal-400 transition duration-300'>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
