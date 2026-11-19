import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, BookOpen, Languages, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import AnimatedText from '../components/AnimatedText';

export const ABOUT_DECORATIVE_ASSETS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group3d: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const ABOUT_PARAGRAPH =
  "Computer Science & Engineering graduate (AI & Information Systems). I build full-stack web applications with React, PHP, and MySQL, including REST APIs, secure authentication, and role-based access control. I also deploy low-latency deep learning models on edge hardware using Python and OpenCV. Let's build something incredible together!";

const smallTiles = [
  { icon: MapPin, label: "Location", value: "Gazipur, Dhaka", color: "text-red-400", r: -20 },
  { icon: GraduationCap, label: "Education", value: "BSc in CSE", color: "text-violet-400", r: -12 },
  { icon: Briefcase, label: "Status", value: "Open to Intern Roles", color: "text-teal-400", r: -4 },
  { icon: Code2, label: "Core Stack", value: "React · PHP · Python", color: "text-blue-400", r: 4 },
  { icon: BookOpen, label: "Publication", value: "1 Peer Paper", color: "text-[#FF9FFC]", r: 12 },
  { icon: Languages, label: "Languages", value: "Bengali · English", color: "text-emerald-400", r: 20 }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden"
    >
      {/* Top-Left Glowing 3D Glass Moon */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="pointer-events-none select-none absolute top-[4%] left-[2%] sm:left-[4%] md:left-[6%] z-0 w-[100px] sm:w-[150px] md:w-[190px]"
      >
        <img
          src={ABOUT_DECORATIVE_ASSETS.moon}
          alt="3D Glass Moon"
          loading="lazy"
          className="w-full h-auto block object-contain drop-shadow-[0_0_30px_rgba(0,210,255,0.45)]"
        />
      </motion.div>

      {/* Top-Right Glowing 3D Glass Lego */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        animate={{ y: [0, -14, 0] }}
        transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
        className="pointer-events-none select-none absolute top-[4%] right-[2%] sm:right-[4%] md:right-[6%] z-0 w-[100px] sm:w-[150px] md:w-[190px]"
      >
        <img
          src={ABOUT_DECORATIVE_ASSETS.lego}
          alt="3D Glass Lego"
          loading="lazy"
          className="w-full h-auto block object-contain drop-shadow-[0_0_30px_rgba(182,0,168,0.5)]"
        />
      </motion.div>

      {/* Bottom-Left Glowing 3D Glass Smiley */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 } }}
        className="pointer-events-none select-none absolute top-[48%] left-[2%] sm:left-[3%] md:left-[4%] z-0 w-[80px] sm:w-[120px] md:w-[150px]"
      >
        <img
          src={ABOUT_DECORATIVE_ASSETS.object3d}
          alt="3D Glass Smiley"
          loading="lazy"
          className="w-full h-auto block object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]"
        />
      </motion.div>

      {/* Bottom-Right Glowing 3D Glass Pointer */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
        className="pointer-events-none select-none absolute top-[48%] right-[2%] sm:right-[3%] md:right-[4%] z-0 w-[90px] sm:w-[130px] md:w-[160px]"
      >
        <img
          src={ABOUT_DECORATIVE_ASSETS.group3d}
          alt="3D Glass Cursor"
          loading="lazy"
          className="w-full h-auto block object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.45)]"
        />
      </motion.div>

      {/* Centered Content Column */}
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3.5rem,12vw,140px)] select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
            About me
          </h2>
        </motion.div>

        {/* Frosted Dark Glass Card for guaranteed 100% text readability */}
        <div className="relative max-w-[680px] w-full px-6 py-6 sm:px-8 sm:py-8 rounded-3xl bg-[#0A0A12]/80 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <AnimatedText
            text={ABOUT_PARAGRAPH}
            className="text-white font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.25rem)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <a
            href="#contact"
            className="contact-btn-surface inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap px-10 py-3.5 sm:px-12 sm:py-4 text-xs sm:text-sm md:text-base cursor-pointer"
          >
            Contact Me
          </a>

          <a
            href={portfolioData.about.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !rounded-full !py-3.5 !px-8 text-xs sm:text-sm uppercase tracking-widest font-mono flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Fanned-out Glass Deck (From Uiverse.io by codebykay101) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="about-deck-container mt-16 sm:mt-24 relative z-10"
      >
        {smallTiles.map((tile, idx) => {
          const Icon = tile.icon;
          return (
            <div
              key={idx}
              data-text={tile.label}
              style={{ '--r': tile.r }}
              className="about-deck-glass"
            >
              <div className="deck-icon">
                <Icon className={`w-8 h-8 ${tile.color}`} strokeWidth={1.75} />
              </div>
              <span className="deck-value">
                {tile.value}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
