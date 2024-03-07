"use client";

import React from 'react';
import Portofolio from './components/Portofolio';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Title from './components/Title';

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
      <div className='absolute z-50'>
        <Header behaviour={handleScroll} />
      </div>

      <section id='introduction'>
        <div className="w-full h-screen bg-black">
          <Title />
          <Introduction />
        </div>
      </section>

      <section id='about'>
        <About />
      </section>

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
