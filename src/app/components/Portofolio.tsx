"useclient";

import Image from 'next/image'
import { Component, useState } from 'react';
import { IconType } from 'react-icons';
import { AnimatePresence, easeIn, motion } from 'framer-motion';

import { IoEarth, IoCloudOutline, IoGameControllerOutline, IoPhonePortraitOutline, IoCaretUpCircle } from 'react-icons/io5'

/*
Portofolio component to see previous projects
*/
interface CardProps {
    title: string;
    image: string;
    href: string;
    display: (href:string ) => void;
    about: string;
    icons?: JSX.Element[];
  }

interface ProjectInfo {
  title: string;
  image: string[];
  about: string[];
  link?: string;
  skills: string[];
  finished: boolean;
  dateFrom: string;
  dateTo: string;
}

const projects: ProjectInfo[] = [
  {
    title: "Flyq.no",
    image: ["flyq-big1.png", "flyq-test.png"],
    about: ["I successfully developed a website within a tight timeframe of just two weeks. This dynamic website integrates multiple APIs to accurately calculate estimated meeting times at airports, streamlining the travel experience.",
            "The inspiration for creating Flyq stemmed from witnessing the chaotic scenes at airports immediately following the easing of Covid restrictions. Recognizing the need for a real-time tool to gauge airport congestion levels, I embarked on this engaging project.",
            "I am pleased to announce that the Flyq website is live and accessible for viewing at flyq.no. Experience firsthand the convenience and efficiency it brings to travelers seeking real-time airport activity information."],
    link: "https://flyq.no",
    skills: ["React", "JavaScript", "REST", "Next.js", "C#", ".NET", "AWS", "Docker"],
    finished: true,
    dateFrom: "2022-01-01",
    dateTo: "2022-02-28",
  },
  {
    title: "StudiePartner",
    image: ["studiepartner-big1.png", "studiepartner-big2.png"],
    about: ["As a student, I personally encountered challenges when it came to creating and coordinating a study schedule. I realized that even minor details could be easily overlooked, leading to inefficiencies and added stress.",
            "With StudiePartner, you'll gain the ability to subscribe and collaborate on schedules alongside your classmates. This powerful platform empowers you to work together, ensuring everyone stays on track and achieves their academic goals.",
            "By leveraging StudiePartner, you'll experience enhanced productivity and a sense of tranquility, knowing that you won't miss any tasks or deadlines. It streamlines your workflow, providing a centralized hub for effective task management and deadline tracking."],
    skills: ["React Native", "Typescript", "REST", "TailwindCSS", "C#", ".NET", "AWS", "Docker", "Kubernetes", "Figma"],
    finished: false,
    dateFrom: "2022-01-01",
    dateTo: "2022-02-28",
  },
  {
    title: "Hero Miner",
    image: ["herominer-big1.png", "herominer-big2.png"],
    about: ["For over a year, I have dedicated myself to the development of this game with unwavering passion. Leveraging my programming skills, I have meticulously crafted compelling game logic, immersive artwork, and an engaging atmosphere, resulting in a mobile gaming experience that is both delightful and exhilarating.",
            "Recognizing the importance of visual aesthetics, despite my limited artistic expertise, I took a collaborative approach by engaging talented designers and outsourcing asset creation. Through these partnerships, I ensured that every aspect of the game's visuals aligns seamlessly with my creative vision, delivering a polished and captivating visual experience.",
            "While the app is not yet available on the App Store, I remain fully committed to its ongoing refinement. Continuously striving for excellence, I am dedicated to providing an exceptional user experience that surpasses expectations upon deployment."],
    skills: ["Godot", "GDscript", "Physics", "Memory", "Optimization", "Mobile App"],
    finished: false,
    dateFrom: "2022-01-01",
    dateTo: "2022-02-28",
  }
];
  
  const Portofolio = () => {
    const [hidden, setHidden] = useState(true);
    const [current, setCurrent] = useState("")
    const [information, setInformation] = useState<ProjectInfo>(projects[0]);

    function SetDisplay(href:string) {
      setCurrent(href);
      setProjectInfo(href);
      setHidden(false);
    }

    function setProjectInfo(href: string) {
      if(href == "flyq")
        setInformation(projects[0]);
      else if(href == "studiepartner")
        setInformation(projects[1]);
      else if(href == "herominer")
        setInformation(projects[2]);
    }

    return (
      <div className='w-full bg-slate-800'>
        <h1 className="font-bold text-slate-200 text-2xl self-start p-12">
                Portfolio and Projects
        </h1>
      
      <motion.div
        transition={{ease:"easeIn", duration: 0.4}}
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y:0}}
        viewport={{ once: true }}
        >
          <div className="flex flex-row justify-center items-center pv-24 pb-24 gap-14">
        <Card
          key={0}
          title="Flyq.no"
          image="flyq.jpg"
          href="flyq"
          display={SetDisplay}
          about="Website which shows live busyness and arrival times at all Norwegian airports."
          icons={[<IoCloudOutline key={10}/>, <IoEarth key={11}/>]}
        />
        <Card
          key={1}
          title="StudiePartner"
          image="studiepartner.jpg"
          href="studiepartner"
          display={SetDisplay}
          about="An app which allows for planning and collaboration on study plans."
          icons={[<IoPhonePortraitOutline key={12}/>]}
        />
        <Card
          key={2}
          title="Hero Miner"
          image="hero-miner.jpg"
          href="herominer"
          display={SetDisplay}
          about="Mobile game where you mine resources and upgrade your vehicle."
          icons={[<IoGameControllerOutline key={13}/>, <IoPhonePortraitOutline key={14}/>]}
        />
        </div>
        </motion.div>

        <AnimatePresence>
        <section id='project'>
        <div className='flex w-screen bg-white'>
          <motion.div
            key={current}
            initial={{ opacity: 0, y:-20 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: -100}}
            transition={{ duration: 0.3, ease:"easeIn" }}
            hidden={hidden}>
            <div className='flex flex-col lg:flex-row p-12 justify-center align-center gap-12'>
              <div className='flex flex-row gap-4 lg:w-1/2 w-full items-center lg:items-start lg:justify-end justify-center'>
                <div className='relative'>
                <Image objectFit='contain' src={"/" + information.image[0]} alt='name' quality={100} width={200} height={405} />
                </div>
                <div className='relative'>
                <Image objectFit='contain' src={"/" + information.image[1]} alt='name' quality={100} width={200} height={405} />
                </div>
              </div>

              <div className='flex flex-col lg:w-1/2 w-full'>
                <div className='flex flex-row gap-2'>
                <h1 className="font-bold text-slate-700 text-2xl pb-2">
                  {information.title}
                </h1>
                <h2 className={`font-semibold text-sm self-center pb-2 ${
                    information.finished ? 'text-lime-500' : 'text-amber-400'
                    }`}>
                  {information.finished ? "Completed" : "In progress"}
                </h2>
                </div>
                {information.about.map((text, key) => (
                  <p key={key} className='pt-2 w-2/3'>
                    {text} 
                  </p>
                  
                ))}
                <a hidden={information.link != undefined ? false : true} href="https://flyq.no" className='text-sky-500'>flyq.no</a>
                <ul className="mt-2">
                  {information.skills.map((skill, key) => (
                    <li key={key} className="inline-block bg-gray-200 text-gray-700 rounded-full py-1 px-2 text-sm mr-2 mt-2 transition-all hover:scale-105">
                      {skill} 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          <div className='flex bg-slate-400 h-px w-full justify-center'>
              <button onClick={() => (setHidden(true))} className='flex self-center text-slate-800 bg-white'>
                    <IoCaretUpCircle size={24}/>
              </button>
          </div> 
          </motion.div>
          </div>
          </section>
        </AnimatePresence>

      </div>
    );
  };
  
  const Card = ({ title, image, href, display, about, icons } : CardProps) => {
    return (
      <div className="flex flex-col justify-center min-w-72 w-64 items-center rounded-xl bg-slate-900 shadow-xl transition hover:scale-105">
        <div className="flex rounded-t-xl shadow-lg z-10">
          <img className="rounded-t-xl" src={image} alt="Image" height={400} width={285} />
        </div>
        <div className="p-6 bg-slate-200 rounded-b-xl">
          <h2 className="flex flex-row justify-between text-2xl self-start font-bold text-slate-800">{title}
            <div className='self-center text-slate-800 flex flex-row gap-4'>
                {icons}
            </div>
          </h2>
          <p className="text-md self-start text-slate-800 pt-4">{about}</p>
          <div className="mt-6 self-start">
            <button onClick={() => display(href)} className="bg-amber-500 transition hover:bg-amber-600 p-2 rounded-xl text-md font-bold text-slate-900">
              Read more
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Portofolio