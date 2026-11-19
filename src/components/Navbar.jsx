import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', ...navLinks.map(link => link.href.substring(1))];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-50 bg-gradient-to-r from-[#7C3AED] to-[#2563EB]"
          style={{ scaleX }}
        />
        
        <div className="flex items-center justify-between gap-3 sm:gap-6 w-full max-w-[760px] pointer-events-auto">
          {/* Circular Logo Button */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#111111] font-black text-sm flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all shrink-0 select-none tracking-tight"
            aria-label="Go to top"
          >
            MH.
          </a>

          {/* Floating White Center Nav Pill */}
          <nav className="hidden md:flex items-center justify-around flex-1 max-w-[460px] h-11 sm:h-12 px-5 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative inline-flex items-center justify-center h-full px-3 text-sm font-medium transition-opacity text-[#2e2e2e] ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-55 hover:opacity-90'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[#000000] shadow-[-5px_0_0_#000000,5px_0_0_#000000]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Dark Pill Resume Button */}
          <a 
            href={portfolioData.about.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center h-11 sm:h-12 px-6 rounded-full bg-[#28282a] text-[#c8c8c8] hover:text-white hover:bg-[#323234] shadow-[0_4px_16px_rgba(0,0,0,0.25)] text-sm font-medium transition-all hover:-translate-y-0.5 shrink-0"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-11 h-11 rounded-full bg-[#28282a] text-white flex items-center justify-center shadow-md shrink-0 focus-visible:outline-none hover:bg-[#323234] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center gap-5 sm:gap-8 max-h-[calc(100dvh-5rem)] overflow-y-auto py-6"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-2xl sm:text-4xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                href={portfolioData.about.resumeLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary mt-2 sm:mt-4 text-base sm:text-lg px-7 sm:px-8 py-3 sm:py-4"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
