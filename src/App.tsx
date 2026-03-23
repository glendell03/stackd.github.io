/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-[#F4F4F0] min-h-screen text-[#0A0A0A] selection:bg-[#FF3300] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Contact />
    </main>
  );
}
