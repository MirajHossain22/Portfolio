import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const filterCategories = {
  'All': ['Languages', 'Backend & APIs', 'Frontend', 'Databases', 'Tools & Practices', 'AI & Computer Vision', 'Hardware & IoT'],
  'Web': ['Languages', 'Backend & APIs', 'Frontend', 'Databases', 'Tools & Practices'],
  'AI/ML': ['Languages', 'AI & Computer Vision', 'Databases', 'Tools & Practices'],
  'IoT': ['Languages', 'Hardware & IoT', 'AI & Computer Vision', 'Tools & Practices']
};

const categoryMetadata = {
  'Languages': {
    tag: 'APEX // 01 · SYNTAX',
    titleMain: 'Core',
    titleBold: 'Languages',
    metrics: [
      { label: 'Paradigm', value: 'Multi-Par.' },
      { label: 'Efficiency', value: 'High' },
      { label: 'Focus', value: 'Full-Stack' },
      { label: 'Status', value: 'Active' },
    ],
    description: 'Foundational programming and scripting languages powering performant web backends, data parsing, and machine learning workflows.',
    btnLabel: 'Active Stack'
  },
  'Backend & APIs': {
    tag: 'APEX // 02 · ARCHITECTURE',
    titleMain: 'Backend &',
    titleBold: 'APIs',
    metrics: [
      { label: 'Arch', value: 'REST / Micro' },
      { label: 'Security', value: 'RBAC / Auth' },
      { label: 'Caching', value: 'Redis Tier' },
      { label: 'Latency', value: 'Sub-100ms' },
    ],
    description: 'Scalable server-side architectures, transactional data isolation, RESTful routing, and asynchronous task execution.',
    btnLabel: 'Active Stack'
  },
  'Frontend': {
    tag: 'APEX // 03 · INTERFACES',
    titleMain: 'Modern',
    titleBold: 'Frontend',
    metrics: [
      { label: 'Core', value: 'React / Next' },
      { label: 'Styling', value: 'Tailwind' },
      { label: 'UX', value: 'Responsive' },
      { label: 'Render', value: 'Hydrated' },
    ],
    description: 'Component-driven interfaces built with responsive design systems, micro-animations, and client-side state management.',
    btnLabel: 'Active Stack'
  },
  'Databases': {
    tag: 'APEX // 04 · PERSISTENCE',
    titleMain: 'Data &',
    titleBold: 'Databases',
    metrics: [
      { label: 'Engines', value: 'Postgres / SQL' },
      { label: 'Integrity', value: 'ACID Strict' },
      { label: 'Vector', value: 'HNSW / pgvec' },
      { label: 'Status', value: 'Nominal' },
    ],
    description: 'Relational schema modeling, normalized entity designs, parameterized reporting, and vector similarity indexing.',
    btnLabel: 'Active Stack'
  },
  'Tools & Practices': {
    tag: 'APEX // 05 · DEVOPS',
    titleMain: 'DevOps &',
    titleBold: 'Practices',
    metrics: [
      { label: 'Deploy', value: 'Docker' },
      { label: 'VCS', value: 'Git Flow' },
      { label: 'Kernel', value: 'Linux CLI' },
      { label: 'Testing', value: 'Automated' },
    ],
    description: 'Continuous integration, containerized workflows, Unix shell automation, and test-driven development practices.',
    btnLabel: 'Active Stack'
  },
  'AI & Computer Vision': {
    tag: 'APEX // 06 · INTELLIGENCE',
    titleMain: 'AI &',
    titleBold: 'Vision',
    metrics: [
      { label: 'Vision', value: 'YOLO / OpenCV' },
      { label: 'Inference', value: 'Real-time' },
      { label: 'Pipelines', value: 'RAG / Agents' },
      { label: 'Status', value: 'Edge-Ready' },
    ],
    description: 'Deep learning models deployed for edge classification, ROI feature extraction, and LLM-powered multi-agent reasoning.',
    btnLabel: 'Active Stack'
  },
  'Hardware & IoT': {
    tag: 'APEX // 07 · EMBEDDED',
    titleMain: 'Hardware &',
    titleBold: 'IoT',
    metrics: [
      { label: 'Chips', value: 'RPi / ESP32' },
      { label: 'Telemetry', value: 'Live Stream' },
      { label: 'Sensors', value: 'Multi-Bus' },
      { label: 'Power', value: 'Low-Draw' },
    ],
    description: 'Autonomous hardware prototyping, wireless video streaming pipelines, sensor telemetry, and embedded diagnostic robots.',
    btnLabel: 'Active Stack'
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredSkills = portfolioData.skills.filter(skill => 
    filterCategories[activeFilter].includes(skill.category)
  );

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {Object.keys(filterCategories).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10 border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((categoryGroup, index) => (
              <SkillCard key={categoryGroup.category} categoryGroup={categoryGroup} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ categoryGroup, index }) {
  const [isActivated, setIsActivated] = useState(false);
  const meta = categoryMetadata[categoryGroup.category] || {
    tag: `APEX // 0${index + 1} · STACK`,
    titleMain: categoryGroup.category.split(' ')[0] || 'Core',
    titleBold: categoryGroup.category.split(' ').slice(1).join(' ') || 'Domain',
    metrics: [
      { label: 'Status', value: 'Active' },
      { label: 'Efficiency', value: '99.8%' },
      { label: 'Count', value: `${categoryGroup.items.length} Tech` },
      { label: 'Mode', value: 'Nominal' }
    ],
    description: 'Specialized technical domain skills, development tooling, and implementation capabilities.',
    btnLabel: 'Active Stack'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="card-frame"
    >
      <div className="card-body">
        <div className="grid-overlay" aria-hidden="true" />

        <header className="header">
          <span className="system-tag">{meta.tag}</span>
          <p className="main-title">
            {meta.titleMain} <b>{meta.titleBold}</b>
          </p>
        </header>

        <div className="metrics">
          {meta.metrics.map((m, i) => (
            <div key={i} className="metric-box">
              <span className="metric-label">{m.label}</span>
              <span className="metric-value">{m.value}</span>
            </div>
          ))}
        </div>

        <p className="description">
          {meta.description}
        </p>

        <div className="skill-chips">
          {categoryGroup.items.map((skill, i) => (
            <span key={i} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>

        <div className="btn-container">
          <button 
            type="button"
            onClick={() => setIsActivated(!isActivated)}
            className={`action-btn ${isActivated ? 'active' : ''}`}
            aria-label={`${meta.titleMain} ${meta.titleBold} status`}
          >
            <span>{isActivated ? 'STACK ENGAGED' : meta.btnLabel}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
