import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 mix-blend-difference text-white"
    >
      <div className="font-mono text-sm uppercase tracking-widest font-bold">
        STACKD.
      </div>
      <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
        <a href="#about" className="hover:text-[#FF3300] transition-colors duration-300">About</a>
        <a href="#services" className="hover:text-[#FF3300] transition-colors duration-300">Services</a>
        <a href="#projects" className="hover:text-[#FF3300] transition-colors duration-300">Projects</a>
        <a href="#team" className="hover:text-[#FF3300] transition-colors duration-300">Team</a>
        <a href="#contact" className="hover:text-[#FF3300] transition-colors duration-300">Contact</a>
      </div>
    </motion.nav>
  );
};
