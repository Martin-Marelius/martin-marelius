import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer2(props:any) {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link onClick={(e) => props.behaviour(e)} href="#home" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link onClick={(e) => props.behaviour(e)} href="#about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link onClick={(e) => props.behaviour(e)} href="#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
              <Link onClick={(e) => props.behaviour(e)} href="#experience" className="hover:text-gray-300 transition-colors">Experience</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:johnsen.martin1@gmail.com" className="flex items-center hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                johnsen.martin1@gmail.com
              </a>
              <a className="flex items-center hover:text-gray-300 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +47 48143389
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Martin-Marelius" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Martin Marelius Johnsen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

