import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BrainCircuit, ScanSearch, Terminal, ShieldAlert } from 'lucide-react';
import { profile, projects, roles } from '../data/siteData';
import InteractiveAIBrain from '../components/InteractiveAIBrain';
import SpotlightCard from '../components/SpotlightCard';
import ProjectCard from '../components/ProjectCard';
import SkillTabs from '../components/SkillTabs';
import SectionTitle from '../components/SectionTitle';

const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'Deep Learning Systems',
    text: 'Formulating and training neural networks (LSTMs, Autoencoders, Custom Loss) to solve specialized tabular & sequential challenges.',
    color: 'from-indigo-500/10 to-indigo-500/5',
    borderColor: 'group-hover:border-indigo-500/30'
  },
  {
    icon: ScanSearch,
    title: 'Computer Vision Pipelines',
    text: 'Deploying high-speed object detection workflows with YOLO models and OpenCV processing under complex visibility and weather constraints.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    borderColor: 'group-hover:border-cyan-500/30'
  },
  {
    icon: Terminal,
    title: 'Full Stack Integration',
    text: 'Exposing models via highly optimized FastAPI endpoints, buffering with Redis pipelines, and orchestrating deployments using Docker.',
    color: 'from-violet-500/10 to-violet-500/5',
    borderColor: 'group-hover:border-violet-500/30'
  }
];

export default function HomePage() {
  const [selectedRoleId, setSelectedRoleId] = useState('aiml');
  const [mousePos, setMousePos] = useState({ x: 150, y: 180 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroElement = document.getElementById('hero-section');
      if (!heroElement) return;
      const rect = heroElement.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeRole = roles.find(r => r.id === selectedRoleId) || roles[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="space-y-36"
    >
      {/* Hero Section */}
      <section 
        id="hero-section"
        className="relative min-h-[70vh] flex items-center justify-between gap-12 py-8 lg:py-16 overflow-hidden"
      >
        
        {/* Particle Canvas behind hero content */}
        <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
          <InteractiveAIBrain />
        </div>

        {/* Dynamic Interactive Cursor Glow */}
        <div 
          className="pointer-events-none absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-indigo-500/15 blur-[120px] will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x - 160}px, ${mousePos.y - 160}px, 0)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
        <div className="absolute right-10 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center w-full relative z-10">
          
          {/* Main Hero Typography and Action items */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Pulsing Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
                AI/ML Engineer & Developer
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6.5xl">
              Hi, I'm <span className="text-shimmer-gradient font-black">{profile.name}</span>.
            </h1>
            
            <p className="font-display text-2xl font-semibold leading-relaxed text-zinc-300">
              Computer Science Graduate specializing in AI & Machine Learning.
            </p>

            <p className="max-w-xl text-base md:text-lg leading-relaxed text-zinc-400">
              {profile.hero}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/projects" 
                className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.55)] hover:brightness-110 active:scale-[0.98]"
              >
                View Case Studies 
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 duration-300" />
              </Link>
              <a 
                href="/Abhiram_R_S_RESUME.pdf" 
                download
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download size={14} className="transition-transform group-hover:-translate-y-0.5 duration-300" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Interactive Role Switcher Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-8 border border-white/5 bg-slate-950/70 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">Recruiter Filter</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                  Open to Work
                </span>
              </div>

              {/* Role Select Buttons */}
              <div className="mt-6 flex flex-col gap-2">
                {roles.map(role => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRoleId(role.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all border ${
                      selectedRoleId === role.id 
                        ? 'bg-indigo-500/10 border-indigo-500/30 text-white font-semibold shadow-inner'
                        : 'bg-transparent border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider font-mono">{role.name}</span>
                    <span className={`h-2 w-2 rounded-full transition-colors ${
                      selectedRoleId === role.id ? 'bg-indigo-400' : 'bg-zinc-700'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Role Summary Display */}
              <div className="mt-8 min-h-[90px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRoleId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <h3 className="text-sm font-semibold text-white">Target Summary:</h3>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {activeRole.summary}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Secondary Details */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>GPA: 7.364/10 (M.Sc)</span>
                <span>Kannur, Kerala</span>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </section>

      {/* Focus Areas (Bento Grid Style) */}
      <section className="relative">
        <SectionTitle 
          eyebrow="Capabilities" 
          title="Bridging academic research with production software." 
          text="I design ML algorithms and full-stack solutions built around speed, test integrity, and hardware efficiency."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text, color, borderColor }, idx) => (
            <motion.div 
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/20 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 hover:bg-slate-900/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br -z-10 transition-opacity ${color}`} />
              <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4 text-white border border-white/10 group-hover:scale-105 group-hover:border-indigo-500/20 group-hover:text-indigo-400 transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-white">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle 
            eyebrow="Case Studies" 
            title="Production builds and applied AI." 
            text="Take a detailed look at my architecture, databases, and testing workflows."
            className="mb-0"
          />
          <Link 
            to="/projects" 
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-white transition-colors duration-300 shrink-0 self-start sm:self-end"
          >
            All Case Studies 
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-950/40 p-8 md:p-14 backdrop-blur-md">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px]" />
        
        <SectionTitle 
          eyebrow="Stack & Frameworks" 
          title="Tools I command across lifecycle." 
          text="From machine learning research and modeling to APIs, cache layers, relational data structures, and unit testing."
        />

        <SkillTabs />
      </section>
    </motion.div>
  );
}