"useclient"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

interface SkillPointsProps {
    skill: string;
    points: number;
}

const Skills = () => {
    const [frontend, setFrontend] = useState([
        {
            skill: 'React',
            points: 8
        },
        {
            skill: 'Typescript',
            points: 7
        },
        {
            skill: 'HTML',
            points: 9
        },
        {
            skill: 'CSS',
            points: 8
        },
        {
            skill: 'React Native',
            points: 6
        },
        {
            skill: 'Angular',
            points: 6
        }
    ])
    const [backend, setBackend] = useState([
        {
            skill: 'C#',
            points: 8
        },
        {
            skill: '.NET',
            points: 8
        },
        {
            skill: 'Docker',
            points: 7
        },
        {
            skill: 'Kubernetes',
            points: 6
        },
        {
            skill: 'REST API',
            points: 8
        },
        {
            skill: 'Cloud Computing',
            points: 6
        }
    ])
    const [various, setVarious] = useState([
        {
            skill: 'Mobile development',
            points: 8
        },
        {
            skill: 'Scripting',
            points: 7
        },
        {
            skill: 'Finance',
            points: 8
        },
        {
            skill: 'Architecture',
            points: 7
        },
        {
            skill: 'Git',
            points: 9
        },
        {
            skill: 'Agile',
            points: 8
        }
    ])
    const [skillset, setSkillset] = useState(frontend);
    const [isOpen, setIsOpen] = useState(true)

    const handleFrontendClick = () => {
        setSkillset(frontend);
    };

    const handleBackendClick = () => {
        setSkillset(backend);
    };

    const handleVariousClick = () => {
        setSkillset(various);
    };


    return(
        <div className="w-full bg-white pb-24">
            <h1 className="font-bold text-slate-700 text-2xl p-12 self-start">
                Skills
            </h1>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center m-4 gap-8 text-lg font-semibold text-slate-800">
                <button
                        className={`p-2 pl-4 pr-4 rounded-full transition-all hover:scale-105 ${
                            skillset === frontend ? 'bg-amber-500' : 'bg-slate-200'
                        }`}
                        onClick={handleFrontendClick}
                    >
                        Frontend
                    </button>
                    <button
                        className={`p-2 pl-4 pr-4 rounded-full transition-all hover:scale-105 ${
                            skillset === backend ? 'bg-amber-500' : 'bg-slate-200'
                        }`}
                        onClick={handleBackendClick}
                    >
                        Backend
                    </button>
                    <button
                        className={`p-2 pl-4 pr-4 rounded-full transition-all hover:scale-105 ${
                            skillset === various ? 'bg-amber-500' : 'bg-slate-200'
                        }`}
                        onClick={handleVariousClick}
                    >
                        Various
                    </button>
                </div>
                <div className="w-min-fit self-center items-center justify-center">
                    <AnimatePresence>
                        
                            {skillset.map((skill, index) => (
                                <SkillPoints key={index} {...skill} />
                            ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

const SkillPoints: React.FC<SkillPointsProps> = ({ skill, points }) => {
    return (
        <motion.div
            key={skill}
            transition={{ ease: "easeIn", duration: 0.3 }}         
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}>
            <div className="flex items-center justify-end gap-1">
            <motion.div
            key={skill}
            transition={{ ease: "easeIn", duration: 0.4 * Math.random() }}         
            initial={{ opacity: 0, x:-30 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}>
                <h2 className="font-semibold text-md text-slate-500">
                    {skill}
                </h2>
                </motion.div>
                <div className="w-px bg-slate-400 h-6 ml-2 mr-2" />
                    {Array.from(Array(10).keys()).map((index) => (
                        <motion.div
                        key={skill}
                        transition={{ ease: "easeIn", duration: 0.1 + index/20 + Math.random()/5 }}         
                        initial={{opacity: 0, y: -20, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0 }}
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.005 },
                          }}
                          whileTap={{ scale: 1.1, transition: { duration: 0.001 } }}>
                        <div key={index} className={`${points > index ? 'bg-amber-500' : 'bg-slate-200'} w-8 h-2 rounded-full`} />
                        </motion.div>
                    ))}     
            </div>
        </motion.div>
    )};

export default Skills;