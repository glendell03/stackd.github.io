import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextReveal } from './ui/TextReveal';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web Application',
    year: '2025',
    color: '#0A0A0A',
    textColor: '#F4F4F0',
    image: 'https://picsum.photos/seed/fintech/1920/1080?blur=2'
  },
  {
    title: 'AI Content Studio',
    category: 'AI Integration',
    year: '2024',
    color: '#FF3300',
    textColor: '#F4F4F0',
    image: 'https://picsum.photos/seed/aistudio/1920/1080?blur=2'
  },
  {
    title: 'DeFi Exchange',
    category: 'Web3 & Crypto',
    year: '2024',
    color: '#0A0A0A',
    textColor: '#F4F4F0',
    image: 'https://picsum.photos/seed/defi/1920/1080?blur=2'
  }
];

const Card = ({ i, title, category, year, color, textColor, image, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-6">
      <motion.div 
        style={{ backgroundColor: color, color: textColor, scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col justify-between w-full max-w-[1400px] h-[70vh] rounded-3xl p-8 lg:p-12 origin-top overflow-hidden shadow-2xl"
      >
        <div className="flex justify-between items-start z-10 relative">
          <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase max-w-2xl mix-blend-difference text-white">
            {title}
          </h3>
          <div className="text-right font-mono text-sm uppercase tracking-widest mix-blend-difference text-white">
            <p>{category}</p>
            <p className="opacity-50">{year}</p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            style={{ scale: imageScale }}
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={containerRef} className="relative bg-[#F4F4F0] pt-24 lg:pt-32 pb-[10vh]">
      <div className="max-w-[1400px] mx-auto w-full mb-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <TextReveal className="font-mono text-sm uppercase tracking-widest text-gray-500">
              [ 03 ] Selected Work
            </TextReveal>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              <TextReveal>Featured</TextReveal>
              <TextReveal delay={0.1}>Projects.</TextReveal>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};
