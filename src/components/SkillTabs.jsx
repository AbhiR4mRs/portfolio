import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategorized } from '../data/siteData';

export default function SkillTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        {skillsCategorized.map((categoryObj, idx) => (
          <button
            key={categoryObj.category}
            onClick={() => setActiveTab(idx)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeTab === idx
                ? 'text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {activeTab === idx && (
              <motion.div
                layoutId="activeSkillTab"
                className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {categoryObj.category}
          </button>
        ))}
      </div>

      {/* Grid of Skills for Selected Tab */}
      <div className="relative min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex flex-wrap gap-3.5"
          >
            {skillsCategorized[activeTab].items.map((skill, skillIdx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: skillIdx * 0.03 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="group relative flex items-center gap-2.5 rounded-2xl border border-white/5 bg-slate-900/50 px-5 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-indigo-500/30 hover:text-white"
              >
                {/* Tech icon decoration */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400 transition-colors duration-300" />
                <span className="font-mono text-xs uppercase tracking-wider">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
