"use client";

import Image from 'next/image'
import React, { ReactNode, useState, useRef, useEffect } from 'react';
import TerminalWindow from './components/TerminalWindow';
import { ReactTerminal } from "react-terminal";
import Portofolio from './components/Portofolio';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import { motion } from 'framer-motion';
import Introduction from './components/Introduction';
import Link from 'next/link';
import Contact from './components/Contact';

export default function Home() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (
    <main className="flex flex-col">
      <Header behaviour={handleScroll}/>

      <section id='introduction'>
        <Introduction />
      </section>

      <div className='xl:flex xl:flex-row xl:align-center flex-col justify-around'>
        <section id='about'>
          <About />
        </section>

        <Skills />
      </div>

      <section id='portfolio'>
        <Portofolio />
      </section>

      <section id='experience'>
        <WorkExperience />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <section id='contact'>
        <Footer behaviour={handleScroll} />
      </section>
    </main>
  )
}
