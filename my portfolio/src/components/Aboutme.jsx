import React from 'react';

const Aboutme = () => {
  return (
    <div className='flex flex-col md:flex-row  bg-gradient-to-r justify-center items-center from-teal-900 to-black h-[20vw]'>
  <div className='flex w-full md:w-2/4 justify-center mt-[5vw] items-center p-[2vw] md:p-[4vw]'>
    {/* Uncomment the image section if needed */}
    {/* <img
      className='rounded-full w-2/3 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500'
      src="/images/my img.jpeg"
      alt="Sai Krishna"
    /> */}
  </div>
  <div className='flex w-full md:w-2/4 justify-center mt-[15vw] items-center flex-col p-[2vw] md:p-[4vw]'>
    <div className='flex justify-center items-center -ml-[50vw]'>
      <h1 className='text-4xl mb-[2vw] font-bold text-white hover:text-teal-400 transition duration-300'>
        About Me
      </h1>
    </div>
    {/* <h2 className='text-2xl sm:text-3xl mb-[2vw] font-bold text-white hover:text-teal-400 transition duration-300'>
      Fullstack Developer!
    </h2> */}
    <p className='text-teal-500 krona-one-regular -ml-[40vw] mx-[10vw] px-[3vw]  text-lg sm:text-xl md:text-lg text-center'>
      <span className='text-white'>"</span>Aspiring Frontend Developer with internship experience in building responsive and user-friendly web applications. Proficient in JavaScript, ES6, HTML5, and CSS3, with a solid understanding of React.js and state management using Redux. Skilled in integrating RESTful APIs, implementing asynchronous operations, and utilizing modern front-end build tools like Webpack and Babel. Strong communication and teamwork abilities, capable of managing multiple tasks effectively.<span className='text-white'>"</span>
    </p>
    {/* Uncomment the button section if needed */}
    {/* <button className='flex mt-[2vw] font-bold border w-auto h-[3vw] rounded-2xl py-[0.5vw] px-[2vw] bg-teal-500 hover:shadow-2xl hover:shadow-teal-500 transition-shadow duration-500 '>More About me</button> */}
  </div>
</div>

  );
};

export default Aboutme;
