"useclient"

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface WorkExperienceProps {
    title: string;
    dateFrom: string;
    dateTo: string;
    company: string;
    location: string;
    logosrc: string;
    about: string;
    skills: string[];
  }

const WorkExperience = () => {
    const [workExperiences, setWorkExperiences] = useState([
        {
          title: 'Software Engineer',
          dateFrom: 'Sep. 2022',
          dateTo: 'Present - 13 months',
          company: 'Riverty Group AS',
          location: 'Oslo, Norway',
          logosrc: 'riverty.jpg',
          about: 'Responsible for the design, development, and maintenance of server-side applications and systems. I work closely with a team of developers to build and improve financial services, ensuring that our systems are reliable, scalable, and secure.',
          skills: ['.NET', 'C#', 'REST API', 'MySQL', 'RabbitMQ', 'Angular', 'Azure DevOps', 'Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Finance'],
        },
        {
          title: 'Fullstack Developer / Consultant',
          dateFrom: 'March 2022',
          dateTo: 'Sep. 2022 - 7 months',
          company: 'Self Employed',
          location: 'Alta, Norway',
          logosrc: 'martin.jpg',
          about: 'I create websites and apps from concept to launch. I have a strong foundation in multiple programming languages and work closely with clients to deliver custom solutions. I am motivated, detail-oriented, and constantly seeking to improve my skills and stay up-to-date with the latest technologies.',
          skills: ['React', 'Mobile Development', 'HTML', 'CSS', 'JavaScript/Typescript', 'AWS', 'Cloud', 'Docker', 'Java', 'C#', 'REST API'],
        },
        {
          title: 'Production Coordinator',
          dateFrom: 'March 2020',
          dateTo: 'March 2022 - 2 yr 1 month',
          company: 'Arges AS',
          location: 'Alta, Norway',
          logosrc: 'arges.jpg',
          about: 'As a production coordinator in the petroleum industry, I oversee daily operations and coordinate the activities of production teams to ensure efficient and safe production. I also track and maintain production data, troubleshoot issues, and develop strategies to improve efficiency and reduce costs. During my time here I developed and presented a coordination platform demo for the employees to coordinate machine startup and product quality in order to significantly reduce waste and defects.',
          skills: ['Production Lead', 'Team Coordination', 'Industry Safety', 'Data Analytics', 'Problem Solving'],
        },
        {
            title: 'Bachelor - Cognitive Science',
            dateFrom: 'Aug. 2018',
            dateTo: 'March 2020 - 2 yr',
            company: 'University of Bergen',
            location: 'Bergen, Norway',
            logosrc: 'uib.jpg',
            about: 'Studied Cognitive Science with a focus on Computer Science and IT Development at the University of Bergen. Explored the mind-computer relationship, programming, algorithms, software engineering, and human-computer interaction. Although my studies were not completed, I gained valuable knowledge and skills in technology, fostering a passion for ongoing learning and professional growth.',
            skills: ['Java', 'Machine learning', 'Cognition', 'Psychology', 'Logic', 'Mathematics'],
          }
      ]);

    return (
      <div className="flex flex-col w-full p-12 justify-center items-center">
         <h1 className="font-bold text-slate-700 text-2xl self-start pb-4">
                Work Experience
        </h1>
        <AnimatePresence>
        {workExperiences.map((workExperience, index) => (
            <Experience key={index} {...workExperience} />
      ))}
      </AnimatePresence>
      </div>
    );
  };
  
  const Experience: React.FC<WorkExperienceProps> = ({
    title,
    dateFrom,
    dateTo,
    company,
    location,
    logosrc,
    about,
    skills,
  }) => {
    return (
      <motion.div
        transition={{ease:"easeIn", duration: 0.4}}
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y:0}}
        viewport={{ once: true }}
        >
      <div className="my-6 max-w-3xl">
        <div className="flex items-center mb-2">
          <img src={logosrc} alt={title} className="h-8 w-8 mr-2" />
          <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm">
          {company} - {location}
        </p>
        <p className="text-gray-500 text-sm">
          {dateFrom} - {dateTo}
        </p>
        <p className="text-gray-600 mt-2">{about}</p>
        <ul className="mt-2">
          {skills.map((skill, index) => (
            <li key={index} className="inline-block bg-gray-200 text-gray-700 rounded-full py-1 px-2 text-sm mr-2 mt-2 transition-all hover:scale-105">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      </motion.div>
    );
  };

export default WorkExperience