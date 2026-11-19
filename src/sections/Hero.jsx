import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between bg-[#0C0C0C] pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 md:px-10 overflow-hidden">
      
      {/* Massive Hero Heading: "HI, I'M MIRAJ" */}
      <div className="relative z-0 overflow-hidden w-full text-center mt-4 sm:mt-6 select-none">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[16.5vw]"
        >
          Hi, I&rsquo;m Miraj
        </motion.h1>
      </div>

      {/* Centered Hero Portrait / Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto my-6 sm:my-8 flex items-center justify-center pointer-events-auto"
      >
        <div className="relative group">
          {/* Subtle ambient glow behind portrait */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/30 via-[#2563EB]/25 to-[#00e5ff]/30 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-[#D7E2EA]/40 p-2 bg-[#12121e]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <img
              src={portfolioData.hero.portrait.image}
              alt="Miraj Hossain - Full-Stack & AI Developer"
              className="w-full h-full object-cover rounded-full filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0A0A0F]/90 border border-white/20 text-[11px] sm:text-xs text-white font-mono uppercase tracking-widest whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Internships</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar: Left Tagline + Right Glowing Contact Me Button */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-4 mt-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center sm:text-left"
        >
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
            A Software Engineer & AI Developer driven by crafting striking and high-performance projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href={portfolioData.about.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !rounded-full !py-3 !px-6 text-xs sm:text-sm uppercase tracking-widest font-mono"
          >
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="contact-btn-surface inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm cursor-pointer"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
