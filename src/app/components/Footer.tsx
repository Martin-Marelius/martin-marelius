import React from 'react';
import { IoCall, IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = (props:any) => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap justify-center items-start">
          <div className="w-full md:w-2/3">
            <div className="flex justify-start pb-4 lg:justify-center">
              <ul className="flex flex-col gap-2 lg:flex-row lg:gap-4">
                <li>
                  <a onClick={(e) => props.behaviour(e)} href="#introduction" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={(e) => props.behaviour(e)} href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a onClick={(e) => props.behaviour(e)} href="#portfolio" className="text-gray-400 hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a onClick={(e) => props.behaviour(e)} href="#experience" className="text-gray-400 hover:text-white">
                    Work experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-bold">Contact details</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="text-gray-400 hover:text-white">
                  <IoLogoLinkedin className="h-6 w-6 inline-block" />
                </a>
              </li>
              <li>
                <a href="https://github.com/martin-marelius" className="text-gray-400 hover:text-white">
                  <IoLogoGithub className="h-6 w-6 inline-block" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mmarjoh1/" className="text-gray-400 hover:text-white">
                  <IoLogoInstagram className="h-6 w-6 inline-block" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/martin.johnsen.5/" className="text-gray-400 hover:text-white">
                  <IoLogoFacebook className="h-6 w-6 inline-block" />
                </a>
              </li>
            </ul>
            <ul className="mt-2">
              <li className="text-gray-400 mb-2">
                <span className="mr-2">
                  <IoMailOutline className="h-5 w-5 inline-block" />
                </span>
                johnsen.martin1@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="mr-2">
                  <IoCall className="h-5 w-5 inline-block" />
                </span>
                +47 48143389
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-black w-full p-1 pl-4 justify-center align-center'>
        <p className='text-gray-700 text-xs font-base'>
          @Martin Marelius 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;