'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  longDescription: string
  bigImage?: string
}
  
  const projects: Project[] = [
  {
    id: 1,
    title: "Flyq.no",
    description: "A real-time tool for gauging airport congestion using multiple APIs to streamline travel experience.",
    image: "/flyq.jpg",
    bigImage: "/flyq-test.png",
    technologies: ["React", "JavaScript", "REST", "Next.js", "C#", ".NET", "AWS", "Docker"],
    githubUrl: "https://github.com/Martin-Marelius/flyq",
    longDescription:
      "I developed Flyq.no within two weeks to address the chaotic airport scenes after Covid restrictions eased. The website calculates estimated meeting times at airports by integrating APIs, offering travelers real-time insights. Visit the live site at flyq.no to see its functionality.",
  },
  {
    id: 2,
    title: "StudiePartner",
    description: "A collaboration platform for managing and subscribing to study schedules, enhancing productivity.",
    image: "/studiepartner-big1.png",
    technologies: [
      "React Native",
      "Typescript",
      "REST",
      "TailwindCSS",
      "C#",
      ".NET",
      "AWS",
      "Docker",
      "Kubernetes",
      "Figma",
    ],
    githubUrl: "https://github.com/Martin-Marelius/StudyPartnerBackend",
    longDescription:
      "StudiePartner addresses the challenges of coordinating study schedules. This platform allows users to collaborate on tasks and deadlines efficiently, fostering teamwork and productivity. By using StudiePartner, students can achieve their goals with reduced stress and improved workflow.",
  },
  {
    id: 3,
    title: "Hero Miner",
    description: "A mobile game with engaging logic, immersive artwork, and a captivating atmosphere.",
    image: "/herominer-big1.png",
    technologies: ["Godot", "GDscript", "Physics", "Memory", "Optimization", "Mobile App"],
    githubUrl: "https://github.com/Martin-Marelius/HeroMiner", 
    longDescription:
      "Hero Miner is a passion project I've been developing for over a year. Using Godot, I've built complex game mechanics and immersive environments. Collaborating with designers for visual assets, the game offers a polished experience. Although not yet released, I remain dedicated to refining the app for deployment.",
  },
  {
    id: 4,
    title: "ML-Numbers",
    description: "A machine learning project for predicting hand-drawn numbers with high accuracy.",
    image: "/digit-recognizer.png", 
    technologies: ["Python", "TensorFlow", "Keras", "MNIST", "Data Visualization"],
    githubUrl: "https://github.com/Martin-Marelius/Digit-recognizer-ML",
    longDescription:
      "ML-Numbers is a machine learning project that processes and predicts hand-drawn numerical data with an impressive 98.8% accuracy on the MNIST dataset. Features include data preprocessing, model training, evaluation, and visualization of results. The GUI allows users to test the model interactively. The repository also includes scripts for setting up the environment and running the application. Clone the repository and explore this powerful tool for numerical data analysis and prediction.",
  },
  {
    id: 5,
    title: "Dynamic CRUD API",
    description: "A flexible CRUD API built in C# and .NET for dynamic types, supporting quick frontend testing and dynamic data storage.",
    image: "/backend-crud.png",
    technologies: ["C#", ".NET", "REST", "Dynamic Typing", "CRUD Operations"],
    githubUrl: "https://github.com/Martin-Marelius/MinimialBackend",
    longDescription:
      "The Dynamic CRUD API is a versatile backend solution for frontend testing. It provides RESTful API endpoints to perform Create, Read, Update, and Delete operations on dynamically typed data. With features like flexible type handling and a straightforward endpoint structure, this API is ideal for quick prototyping and testing. Users can dynamically store, retrieve, update, and delete entries, tailoring data storage to their needs. Built in C# and .NET, it ensures reliability and scalability for developers.",
  },
  {
    id: 6,
    title: "CopyTrading Dashboard",
    description: "A Solana-based copy trading system with a dashboard for managing and monitoring trades, built with .NET and React.",
    image: "/sol.png",
    technologies: ["C#", ".NET", "React", "Solana", "MongoDB", "AWS", "Trading Algorithms"],
    githubUrl: "",
    longDescription:
      "The CopyTrading Dashboard is a platform that enables users to replicate trades performed by specific Solana addresses. It features functionalities such as percentage-based trade allocation, profit-taking, and stop-loss mechanisms. The dashboard, built with React, provides statistics for individual addresses and overall performance. Users can dynamically add, remove, or modify copy trading addresses with full control. The backend, implemented in .NET, handles trading logic, and MongoDB is used for storing logs, active trades, and address data. Deployed securely on AWS, with IP restricted access."
  }
  
]

export default function GitHubProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    if(selectedProject?.id !== project.id) {
      setSelectedProject(project)
    }
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Some of my projects
      </h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
              selectedProject?.id === project.id ? 'col-span-full' : 'cursor-pointer hover:scale-105'
            }`}
            onClick={() => handleProjectClick(project)}
          >
            <AnimatePresence>
              {selectedProject?.id === project.id ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className=" mx-auto text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-bold ">{project.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Close expanded view"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative aspect-video self-center align-center mx-auto">
                      <Image
                        src={project.bigImage || project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        fill={false}
                        quality={100}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">{project.longDescription}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full p-2 px-3 text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {!project.githubUrl && (
                        <Link 
                        href={""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                      >
                        <Github className="mr-2" size={18} />
                        private repo
                      </Link>)}
                      {project.githubUrl && (
                        <Link 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                      >
                        <Github className="mr-2" size={18} />
                        View on GitHub
                      </Link>
                      )
                      }
                      
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div>
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      quality={100}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <section className="text-center mt-12">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">Profiles</h2>
  <p className="text-gray-300 max-w-2xl mx-auto">
    Checkout my other projects on Github,
  </p>
  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
    or look at my solutions on LeetCode.
  </p>
  <div className="flex flex-col md:flex-row gap-4 justify-center">
    <Link
      href="https://github.com/martin-marelius"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      Github
    </Link>
    <Link
      href="https://leetcode.com/u/marjoh/"
      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      LeetCode
    </Link>
  </div>
</section>
    </div>
  )
}

