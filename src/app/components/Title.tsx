import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Title = () => {
    return (
        <div className='flex flex-col w-full h-full absolute justify-center align-center items-center gap-8'>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                style={{ height: 1, border: 1, backgroundColor: "white", opacity: 0.5, top: "70%", position: "absolute" }}
            />
            <motion.div
                className="flex text-4xl font-bold text-center text-gray-400 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                style={{ top: "68%", position: "absolute", fontFamily: "open-sans, sans-serif" }}
            >
                <h1>
                    Martin Marelius Johnsen
                </h1>
            </motion.div>

            <motion.div
                className="flex text-2xl font-medium text-center text-gray-600 mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                style={{ top: "75%", position: "absolute", fontFamily: "open-sans, sans-serif" }}
            >
                <h2>
                    Fullstack Developer - Oslo
                </h2>
            </motion.div>

            <motion.div
                className="flex flex-row justify-center items-center gap-4 text-gray-700 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.6 }}
                style={{ top: "81%", position: "absolute" }}
            >
                <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="hover:text-gray-400">
                    <IoLogoLinkedin className="h-6 w-6 inline-block" />
                </a>
                <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="hover:text-gray-400">
                    <IoLogoGithub className="h-6 w-6 inline-block" />
                </a>
                <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="hover:text-gray-400">
                    <IoLogoInstagram className="h-6 w-6 inline-block" />
                </a>
                <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="hover:text-gray-400">
                    <IoLogoFacebook className="h-6 w-6 inline-block" />
                </a>
            </motion.div>

            <motion.div
                className="flex flex-row justify-center items-center gap-4 text-gray-700 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.6 }}
                style={{ top: "97%", position: "absolute" }}
            >
                <p className='text-xs'>
                    Made with three.js
                </p>
            </motion.div>

        </div>
    );
};

export default Title;