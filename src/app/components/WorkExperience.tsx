'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface WorkExperience {
  title: string
  dateFrom: string
  dateTo: string
  company: string
  location: string
  logosrc: string
  about: string
  skills: string[]
  projects?: [string, string][];
}

const initialWorkExperiences: WorkExperience[] = [
  {
    title: 'Software Engineer',
    dateFrom: 'Sep. 2022',
    dateTo: 'Present',
    company: 'Riverty Group AS',
    location: 'Oslo, Norway',
    logosrc: 'riverty.jpg',
    about: 'Responsible for the design, development, and maintenance of server-side applications and systems. I work closely with a team of developers to build and improve financial services, ensuring that our systems are reliable, scalable, and secure in handling thousands of financial transactions daily.',
    skills: ['.NET', 'C#', 'REST API', 'MySQL', 'RabbitMQ', 'Angular', 'Azure DevOps', 'Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Finance'],
  },
  {
    title: 'Fullstack Developer / Consultant',
    dateFrom: 'March 2022',
    dateTo: 'Present',
    company: 'Self Employed',
    location: 'Alta, Norway',
    logosrc: 'martin.jpg',
    about: 'I create websites and apps from concept to launch. I have a strong foundation in multiple programming languages and work closely with clients to deliver custom solutions. I am motivated, detail-oriented, and constantly seeking to improve my skills and stay up-to-date with the latest technologies.',
    skills: ['React', 'Mobile Development', 'HTML', 'CSS', 'JavaScript/Typescript', 'AWS', 'Cloud', 'Docker', 'Java', 'C#', 'REST API'],
  },
  {
    title: 'Production Lead / Coordinator',
    dateFrom: 'March 2020',
    dateTo: 'March 2022 - 2 yr 1 month',
    company: 'Arges AS',
    location: 'Alta, Norway',
    logosrc: 'arges.jpg',
    about: 'As a production Lead in the petroleum industry, I oversee daily operations and coordinate the activities of production teams to ensure efficient and safe production. I also track and maintain production data, troubleshoot issues, and develop strategies to improve efficiency and reduce costs. During my time here I developed and presented a coordination platform demo for the employees to coordinate machine startup and product quality in order to significantly reduce waste and defects.',
    skills: ['Production Lead', 'Team Coordination', 'Industry Safety', 'Data Analytics', 'Problem Solving'],
  },
  {
    title: 'UiB Studies - Software Design',
    dateFrom: 'Jan. 2019',
    dateTo: 'Dec. 2019',
    company: 'University of Bergen',
    location: 'Bergen, Norway',
    logosrc: 'uib.jpg',
    about: 'Achieved an A in System Construction (INF112) and a B in Object-Oriented Design (INF110), focusing on Java development. Worked on team projects, including an interactive puzzle game and a study plan collaboration app.',
    skills: ['Java', 'Object-Oriented Design', 'Software Architecture', 'Frontend Development', 'AWS'],
    projects: [['Interactive Puzzle Game', 'https://github.com/inf112-v20/Kokkene'], ['Study Plan Collaboration App', 'https://github.com/Martin-Marelius/StudyPartnerBackend']],
  },
  {
    title: 'UiB Studies - Introductory Programming',
    dateFrom: 'Jan. 2018',
    dateTo: 'Dec. 2018',
    company: 'University of Bergen',
    location: 'Bergen, Norway',
    logosrc: 'uib.jpg',
    about: 'Completed INF100, an introductory programming course, and explored artificial intelligence and programming concepts. Developed a beat detector program analyzing MP3 files for rhythm game integration and a Flappy Bird clone to refine game development skills.',
    skills: ['Java', 'Programming', 'Game Development', 'Artificial Intelligence', 'Problem-Solving'],
    projects: [['Beat Detector', 'https://github.com/Martin-Marelius/BeatDetector'], ['Flappy Bird Clone', 'https://github.com/Martin-Marelius/Barebones-FlappyBird']],
  },
  {
    title: 'Started Bachelor - Cognitive Science',
    dateFrom: 'Aug. 2017',
    dateTo: 'Dec. 2017',
    company: 'University of Bergen',
    location: 'Bergen, Norway',
    logosrc: 'uib.jpg',
    about: 'Began studies in Cognitive Science, exploring the intersection of technology and human cognition. Gained foundational knowledge in programming, logic, and artificial intelligence.',
    skills: ['Java', 'Logic', 'Cognition', 'Artificial Intelligence', 'Mathematics'],
  }
];


export default function WorkExperience() {
  const [workExperiences] = useState<WorkExperience[]>(initialWorkExperiences)

  return (
    <div className="w-full max-w-4xl mx-auto mt-24 mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        My Experience
      </h2>
      <div className="space-y-8">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-gray-800 border-gray-700 rounded-xl">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={`/${experience.logosrc}`}
                        alt={`${experience.company} logo`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                      <p className="text-gray-400">{experience.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{experience.location}</p>
                    <p className="text-gray-400">{experience.dateFrom} - {experience.dateTo}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{experience.about}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.projects?.map(([title, url], index) => (
                    <Link href={url} key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pl-2 pr-2 rounded-full shadow-xl hover:scale-105 transition-smooth">
                      {title}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gradient-to-r from-gray-500 to-gray-600 text-white pl-2 pr-2 rounded-full shadow-xl">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

