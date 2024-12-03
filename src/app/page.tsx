"use client";

import React from 'react';
import GitHubProjectsGrid from './components/Projects2'
import Header from './components/Header';
import Footer from './components/Footer2';
import About2 from './components/About2';
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
      

      <section id='home'>
        <Introduction behaviour={handleScroll} />
      </section>

      <section id='about'>
        <About2 behaviour={handleScroll} />
      </section>

      <section id='projects'>
        <GitHubProjectsGrid />
      </section>

      <section id='experience'>
        <WorkExperience />
      </section>

      <section id='contact'>
        <Footer behaviour={handleScroll} />
      </section>
    </main>
  )
}
