import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './ui/TextReveal';
import { Code, Smartphone, Zap, Cpu, Blocks, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Static Websites',
    description: 'Ultra-fast, SEO-optimized landing pages and marketing sites built with modern frameworks.'
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Complex, scalable, and secure full-stack web applications tailored to your business needs.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that deliver native-like performance and user experience.'
  },
  {
    icon: Zap,
    title: 'Automations',
    description: 'Streamline your workflows with custom scripts, API integrations, and business logic automation.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Leverage LLMs and machine learning models to build intelligent features into your products.'
  },
  {
    icon: Blocks,
    title: 'Web3 & Crypto',
    description: 'Smart contracts, dApps, and blockchain integrations for the decentralized web.'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 border-b border-grid bg-[#0A0A0A] text-[#F4F4F0]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <TextReveal className="font-mono text-sm uppercase tracking-widest text-[#FF3300]">
              [ 02 ] Capabilities
            </TextReveal>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              <TextReveal>What we do</TextReveal>
              <TextReveal delay={0.1}>best.</TextReveal>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4F4F0]/20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0A0A0A] p-10 lg:p-12 border border-transparent hover:border-[#FF3300] transition-colors duration-300 group cursor-crosshair"
            >
              <service.icon className="w-10 h-10 text-[#FF3300] mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
