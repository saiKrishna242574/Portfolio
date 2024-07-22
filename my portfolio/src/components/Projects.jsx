import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCompany, setSelectedCompany] = useState('SriQuilAnchorInfoTech');

  const experiences = {
    SriQuilAnchorInfoTech: {
      position: 'React Native Developer',
      company: '@Sri QuilAnchor Info Tech',
      duration: 'Mar 2024 - June 2024',
      location: 'Chennai',
      tasks: [
        'Worked on Winngoo Pages web development',
        'Worked on Merchant and user interaction',
        'Developed new features for the iOS app',
      ],
    },
    MyndItSolutions: {
      position: 'Software Engineer',
      company: '@ MynditSolutions',
      duration: 'July 2023 - Feb 2024',
      location: 'Hyderabad',
      tasks: [
        'Worked on Bus Tracking for students',
        'Which helps for parents to find their children',
        'Developed for Android',
      ],
    },
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="flex flex-col pl-[5vw] md:flex-row  bg-gradient-to-r  from-teal-900 to-black h-[30vw] text-white">
      <div className="flex flex-col w-full h-[20vw] mt-[7vw] md:w-1/4 p-4 border-r border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        {/* <p className="mb-8">I switch a lot of companies. It's mostly about the culture.</p> */}
        <div className="space-y-4 ">
          {Object.keys(experiences).map((company) => (
            <div
              key={company}
              className={`p-2 rounded cursor-pointer ${selectedCompany === company ? 'bg-teal-500' : 'hover:bg-teal-800'}`}
              onClick={() => handleCompanyClick(company)}
            >
              <h3 className="text-xl">{company}</h3>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        key={selectedCompany}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full md:w-3/4 p-8"
      >
        <h2 className="text-2xl font-bold mb-4 mt-[7vw]">
          {experiences[selectedCompany].position} <span className="text-teal-400">{experiences[selectedCompany].company}</span>
        </h2>
        <p className="mb-4">{experiences[selectedCompany].duration}</p>
        <p className="mb-4">{experiences[selectedCompany].location}</p>
        <ul className="list-disc list-inside">
          {experiences[selectedCompany].tasks.map((task, index) => (
            <li key={index} className="mb-2">{task}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Projects;
