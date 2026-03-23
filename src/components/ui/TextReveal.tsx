import { motion } from 'motion/react';
import React from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ children, className = '', delay = 0 }: TextRevealProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
