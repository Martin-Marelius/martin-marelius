import { IoMenu } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  const childVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 5 }
  };

  const transition = { duration: 0.15, ease: [0.1, 0.2, 0.3, 0.4] };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.matches("a")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <nav className="h-8">
        <ul className="flex flex-col justify-between items-center p-8 ml-4">
          <div className="flex self-start">
            <IoMenu className="text-gray-600 hover:text-gray-400 w-10 h-10 transition-all" onClick={() => toggleMenu()} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.ul className="md:flex flex-col font-semibold text-md space-y-4 backdrop-blur-md bg-opacity-10 bg-gray-500 p-4 rounded-lg"
                variants={variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                exit="closed"
                transition={transition}>
                <motion.li variants={childVariants} transition={{ ...transition, delay: 0.1 }}><a onClick={(e) => props.behaviour(e)} href="#about" className="text-gray-600 hover:text-gray-400 transition-all">About</a></motion.li>
                <motion.li variants={childVariants} transition={{ ...transition, delay: 0.12 }}><a onClick={(e) => props.behaviour(e)} href="#portfolio" className="text-gray-600 hover:text-gray-400 transition-all">Portfolio</a></motion.li>
                <motion.li variants={childVariants} transition={{ ...transition, delay: 0.13 }}><a onClick={(e) => props.behaviour(e)} href="#experience" className="text-gray-600 hover:text-gray-400 transition-all">Work Experience</a></motion.li>
                <motion.li variants={childVariants} transition={{ ...transition, delay: 0.14 }}><a onClick={(e) => props.behaviour(e)} href="#contact" className="text-gray-600 hover:text-gray-400 transition-all">Contact</a></motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </ul>
      </nav>
    </>
  );
};

export default Header;