import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Title = () => {
    return (
        <div className='flex flex-col w-full h-full absolute justify-end align-center items-center'>
            <div className='flex absolute flex-col items-center self-center place-content-end w-full mb-24'>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                    style={{ height: 1, border: 1, backgroundColor: "white", opacity: 0.5}}
                />
                <motion.div
                    className="flex text-4xl font-bold text-center text-gray-400 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    style={{fontFamily: "open-sans, sans-serif" }}
                >
                    <h1>
                        Martin Marelius Johnsen
                    </h1>
                </motion.div>

                <motion.div
                    className="flex text-2xl font-medium text-center text-gray-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    style={{fontFamily: "open-sans, sans-serif" }}
                >
                    <h2>
                        Fullstack Developer - Oslo
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-row justify-center items-center gap-4 text-gray-700 z-50 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.6 }}
                >
                    <a href="https://www.linkedin.com/in/martin-marelius-johnsen-3975731a6/" className="hover:text-gray-400">
                        <IoLogoLinkedin className="h-6 w-6 inline-block" />
                    </a>
                    <a href="https://github.com/martin-marelius" className="hover:text-gray-400">
                        <IoLogoGithub className="h-6 w-6 inline-block" />
                    </a>
                    <a href="https://www.instagram.com/mmarjoh1/" className="hover:text-gray-400">
                        <IoLogoInstagram className="h-6 w-6 inline-block" />
                    </a>
                    <a href="https://www.facebook.com/martin.johnsen.5/" className="hover:text-gray-400">
                        <IoLogoFacebook className="h-6 w-6 inline-block" />
                    </a>
                </motion.div>

                <motion.div
                    className="flex flex-row justify-center items-center gap-4 text-gray-700 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5, duration: 0.6 }}
                >
                    <p className='text-xs'>
                        Made with three.js, try clicking
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Title;