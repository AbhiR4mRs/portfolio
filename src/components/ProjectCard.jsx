import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="h-full"
    >
      <SpotlightCard className="group flex h-full flex-col justify-between p-5 sm:p-7 border border-white/5 bg-slate-900/30">
        <div>
          {/* Category */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 font-body text-sm leading-relaxed text-zinc-400">
            {project.short}
          </p>
        </div>

        {/* Footer info: Tech stack & Case study link */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((item) => (
              <span 
                key={item} 
                className="rounded-lg bg-white/5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300 border border-white/[0.03]"
              >
                {item}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="rounded-lg bg-white/5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                +{project.stack.length - 3} more
              </span>
            )}
          </div>

          <Link 
            to={`/projects/${project.slug}`} 
            className="flex sm:inline-flex items-center justify-center gap-2 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
          >
            View Case Study 
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
