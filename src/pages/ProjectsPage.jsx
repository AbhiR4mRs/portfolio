import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteData';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Data Science' },
  { id: 'web', label: 'Web & Full-Stack' }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') {
      return (
        project.category.includes('AI/ML') || 
        project.category.includes('Computer Vision') || 
        project.category.includes('Data Science')
      );
    }
    if (activeCategory === 'web') {
      return project.category.includes('Full-Stack');
    }
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="space-y-16"
    >
      {/* Page Header */}
      <div>
        <SectionTitle 
          eyebrow="Projects" 
          title="Case studies of intelligent systems & full-stack software." 
          text="These technical case studies show how I approach architecture, data ingestion layers, model fitting, and validation testing." 
        />
      </div>

      {/* Category Pills Selector */}
      <div className="flex flex-wrap gap-2.5 border-b border-white/5 pb-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat.id
                ? 'text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activeProjectCategoryTab"
                className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div 
        layout
        className="grid gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-zinc-500 font-mono text-sm">
          No projects found in this category.
        </div>
      )}
    </motion.div>
  );
}