import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Introduction(props:any) {
  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
      <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Martin Marelius Johnsen
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-gray-300">
                  Backend Engineer
                </p>
                <Link onClick={(e) => props.behaviour(e)} href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full">
                  Contact Information
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="/headshot.jpg"
                    alt="Martin Marelius Johnsen"
                    priority={true}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-blue-400 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['.NET', 'Java', 'React', 'Typescript', 'Finance', 'API', 'Cloud', 'Databases'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.random() * 2, duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {skill}
            </motion.div>
          ))}
            </div>
          
          </section>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="mb-8 text-gray-300">
              I'm always open to new opportunities and collaborations.
            </p>
            <Link href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              LinkedIn
            </Link>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </main>
  )
}

