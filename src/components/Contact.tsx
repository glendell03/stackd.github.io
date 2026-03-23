import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './ui/TextReveal';
import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-[#F4F4F0] text-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <TextReveal className="font-mono text-sm uppercase tracking-widest text-gray-500">
              [ 05 ] Get in Touch
            </TextReveal>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-[10vw] lg:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85] mb-12">
              <TextReveal>Let's</TextReveal>
              <TextReveal delay={0.1}>Talk.</TextReveal>
            </h2>

            <form className="max-w-2xl flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b-2 border-[#0A0A0A] py-4 text-xl focus:outline-none focus:border-[#FF3300] transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b-2 border-[#0A0A0A] py-4 text-xl focus:outline-none focus:border-[#FF3300] transition-colors rounded-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Project Details</label>
                <textarea 
                  rows={4}
                  className="bg-transparent border-b-2 border-[#0A0A0A] py-4 text-xl focus:outline-none focus:border-[#FF3300] transition-colors resize-none rounded-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="self-start flex items-center gap-4 bg-[#0A0A0A] text-[#F4F4F0] px-8 py-6 font-mono text-sm uppercase tracking-widest hover:bg-[#FF3300] transition-colors duration-300 mt-8"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-grid flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} STACKD. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#FF3300] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#FF3300] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#FF3300] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};
