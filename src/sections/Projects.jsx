import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const filters = ['All', 'Web', 'AI/ML'];
const projectCategoryMap = {
  1: ['Web'], // EcoRise
  2: ['AI/ML', 'IoT'], // AgriBot
  3: ['AI/ML'], // Tomato Maturity CNN
  4: ['Web'], // Pharmacy Expiry Shelf Check
  5: ['Web', 'AI/ML'],
  6: ['Web', 'AI/ML'],
  7: ['Web', 'AI/ML'],
  8: ['Web'],
  9: ['Web', 'AI/ML']
};

const hasProjectLink = (url) => Boolean(url && url !== '#');
const projectOrder = [9, 6, 7, 8, 1, 2, 3, 4];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const filteredProjects = [...portfolioData.projects]
    .sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id))
    .filter(project => {
      if (activeFilter === 'All') return true;
      return projectCategoryMap[project.id]?.includes(activeFilter);
    });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#00e5ff] font-mono text-xs uppercase tracking-[0.25em] mb-3 block font-bold">
            Interactive Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Featured Projects
          </h2>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'glass text-gray-200 hover:text-white hover:bg-white/10 border-white/10 font-semibold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sticky-Stacking Projects Deck */}
        <div ref={containerRef} className="relative flex flex-col gap-10 sm:gap-14 pb-24 sm:pb-36">
          {filteredProjects.map((project, index) => (
            <StickyProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={filteredProjects.length}
              progress={scrollYProgress}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0A0A0F]/85 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass relative w-full max-w-4xl max-h-[94dvh] sm:max-h-[90vh] overflow-y-auto flex flex-col bg-[#0A0A0F]/95 border border-white/20 shadow-2xl z-10 rounded-[32px]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 p-2 bg-[#0A0A0F]/60 backdrop-blur-md rounded-full border border-white/15 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="w-full h-56 sm:h-80 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 relative overflow-hidden border-b border-white/10 shrink-0">
                 {selectedProject.image ? (
                   <img
                     src={selectedProject.image}
                     alt={selectedProject.imageAlt || selectedProject.title}
                     loading="lazy"
                     className={`absolute inset-0 h-full w-full ${selectedProject.imageFit === 'contain' ? 'object-contain bg-[#12121e] p-6' : 'object-cover'}`}
                     style={{ objectPosition: selectedProject.imagePosition || 'center' }}
                   />
                 ) : (
                   <div className="absolute inset-0 flex items-center justify-center p-8 text-center opacity-30">
                     <span className="text-2xl sm:text-5xl font-bold tracking-widest">{selectedProject.title.split(':')[0]}</span>
                   </div>
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#00e5ff] font-mono mb-3">
                  <span>{projectCategoryMap[selectedProject.id]?.join(' · ') || 'ENGINEERING'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 sm:mb-6 pr-8">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="label-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 font-light">
                  {selectedProject.description}
                </p>

                {selectedProject.highlights?.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-mono mb-3 font-semibold">Key Highlights & Architecture</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-gray-300 text-sm sm:text-base flex items-start gap-2.5">
                          <span className="text-[#00e5ff] mt-1 shrink-0">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {(hasProjectLink(selectedProject.demo) || hasProjectLink(selectedProject.github)) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    {hasProjectLink(selectedProject.demo) && (
                      <a aria-label={`Open live demo for ${selectedProject.title}`} href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    {hasProjectLink(selectedProject.github) && (
                      <a aria-label={`Open GitHub repository for ${selectedProject.title}`} href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
                        <FiGithub className="w-5 h-5" />
                        GitHub Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function StickyProjectCard({
  project,
  index,
  totalCards,
  progress,
  onSelectProject,
}) {
  const targetScale = Math.max(0.88, 1 - (totalCards - 1 - index) * 0.025);
  const rangeStart = totalCards > 1 ? index / totalCards : 0;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);
  const formattedNumber = String(index + 1).padStart(2, '0');
  const categoryLabel = projectCategoryMap[project.id]?.join(' · ') || 'ENGINEERING';

  return (
    <div className="h-[82vh] min-h-[620px] sm:min-h-[680px] flex items-start justify-center sticky top-20 sm:top-24 md:top-28">
      <motion.article
        style={{
          scale,
          top: `${index * 24}px`,
          willChange: 'transform',
        }}
        className="project-card-container relative w-full max-w-6xl origin-top rounded-[36px] sm:rounded-[48px] md:rounded-[56px]"
      >
        {/* Circulating LED Blob Animation (From Uiverse by dylanharriscameron) */}
        <div className="project-card-blob" aria-hidden="true" />

        {/* Card Surface sitting above the circulating LED blob */}
        <div className="project-card-surface relative z-10 p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-hidden min-h-[520px]">
          {/* Ambient background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#2563EB]/10 pointer-events-none" />

          {/* Top Header Row: Number, Category + Title, and Direct CTAs */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-white/10">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
              <span className="font-black leading-none text-white/90 tabular-nums shrink-0 text-4xl sm:text-6xl md:text-7xl font-mono">
                {formattedNumber}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[#00e5ff] font-mono uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
                  {categoryLabel}
                </span>
                <h3 className="text-white font-bold tracking-tight text-xl sm:text-2xl md:text-3xl truncate">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {hasProjectLink(project.demo) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm flex items-center gap-2 rounded-full font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {hasProjectLink(project.github) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open GitHub repository for ${project.title}`}
                  className="btn-ghost !py-2.5 !px-5 text-xs sm:text-sm flex items-center gap-2 rounded-full font-medium"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Two-Column Content: Left Details & Right Cinematic Media Preview */}
          <div className="relative z-10 mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            {/* Left Column (5 cols): Summary, Highlights, Chips */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.highlights?.length > 0 && (
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-gray-400">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#00e5ff] shrink-0 font-bold">▹</span>
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-auto pt-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 6).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="label-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs uppercase tracking-widest text-[#00e5ff] hover:text-white transition-colors flex items-center gap-1.5 font-mono cursor-pointer"
                >
                  <span>View Full Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Column (7 cols): Cinematic Screenshot / Media Frame */}
            <div className="lg:col-span-7 flex">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="group relative w-full h-[220px] sm:h-[300px] lg:h-full min-h-[220px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#14141E] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-white transition-transform"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    loading="lazy"
                    className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-6 bg-[#1a1a24]' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-105`}
                    style={{ objectPosition: project.imagePosition || 'center' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#12121c] to-[#1e1b4b] p-8 text-center">
                    <span className="text-2xl sm:text-3xl font-bold tracking-widest text-white/40">
                      {project.title.split(':')[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C14]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <span>Expand Preview</span>
                  <span>↗</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
