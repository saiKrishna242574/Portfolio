import React from 'react';
import Navbar from './Navbar';

const Skills = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-teal-900 to-black min-h-3 p-8 text-white">
      
      <div className="w-full md:w-1/2 mb-8  mt-[5vw] md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-center  border-teal-500 pb-2">Technical Skills</h2>
        <div className="space-y-12 mt-[4vw]">
          <SkillLine name="HTML" percentage={90} />
          <SkillLine name="CSS" percentage={60} />
          <SkillLine name="JavaScript" percentage={85} />
          <SkillLine name="Python" percentage={50} />
          <SkillLine name="React.js" percentage={75} />
        </div>
      </div>
      <div className="w-full  mt-[5vw] md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-center  border-teal-500 pb-2">Professional Skills</h2>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center space-y-16 mt-[4vw]">
            <SkillCircle name="Creativity" percentage={90} />
            <SkillCircle name="Communication" percentage={65} />
          </div>
          <div className="flex flex-col items-center space-y-16 mt-[4vw]">
            <SkillCircle name="Problem Solving" percentage={75} />
            <SkillCircle name="Teamwork" percentage={85} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const SkillLine = ({ name, percentage }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-1/4 text-center text-lg md:text-xl">{name}</div>
      <div className="flex-grow bg-gray-200 h-[0.5vw] rounded-md overflow-hidden">
        <div
          className="bg-teal-500 h-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="ml-2 text-lg">{percentage}%</div>
    </div>
  );
};

const SkillCircle = ({ name, percentage }) => {
  const circleRadius = 35; // Radius of the circle
  const circumference = 2 * Math.PI * circleRadius; // Circumference of the circle
  const progress = circumference - (percentage / 100) * circumference; // Length of unfilled part of the circle

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-center text-lg md:text-xl">{name}</div>
      <div className="relative w-20 h-20 mb-2">
        <svg className="absolute top-0 left-0" width="80" height="80">
          <circle
            className="text-gray-200"
            stroke="#e0e0e0"
            strokeWidth="6"
            fill="transparent"
            r={circleRadius}
            cx="40"
            cy="40"
          />
          <circle
            className="text-teal-400"
            stroke="#34d399"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            fill="transparent"
            r={circleRadius}
            cx="40"
            cy="40"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
          {percentage}%
        </div>
      </div>
    </div>
    
  );
};

export default Skills;
