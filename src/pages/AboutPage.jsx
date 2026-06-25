import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Server, Settings, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import { profile, timeline, achievements } from '../data/siteData';

const bentoStats = [
  { label: 'Academic Focus', value: 'AI & ML', icon: Zap },
  { label: 'Master\'s GPA', value: '7.364 / 10', icon: GraduationCap },
  { label: 'Core Projects', value: '4 Key Builds', icon: Server },
  { label: 'Certifications', value: '3 Completed', icon: Award }
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="space-y-24"
    >
      {/* Intro Header */}
      <div>
        <SectionTitle 
          eyebrow="About Me" 
          title="A software builder with an AI/ML core and systems mindset." 
          text={profile.summary} 
        />
      </div>

      {/* Bento Grid layout */}
      <section className="grid gap-6 md:grid-cols-3">
        
        {/* Bio Card (2 columns wide) */}
        <div className="md:col-span-2">
          <SpotlightCard className="h-full p-8 flex flex-col justify-between border border-white/5 bg-slate-900/30">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">My Engineering Approach</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                I enjoy working on problems where models need to do more than score well offline. My projects often sit close to real-world constraints — network traffic anomalies, railway track safety, operational workflows, and deployable APIs.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Alongside ML work, I also build backend services and full-stack applications. Understanding how data routes from a database through a classification model and into a React frontend helps me design systems that are actually usable, not just experimental.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Right now, I am looking for entry-level AI/ML engineering, software developer, QA engineer, or full-stack roles where I can combine analytical training with sound software design.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-indigo-400 border border-indigo-500/20">
                System Architecture
              </span>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
                Applied Predictive Modeling
              </span>
            </div>
          </SpotlightCard>
        </div>

        {/* Core Strengths Card (1 column wide) */}
        <div>
          <SpotlightCard className="h-full p-8 border border-white/5 bg-slate-900/30">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-6">Core Strengths</h3>
            
            <ul className="space-y-5">
              {[
                { title: 'Analytical Mindset', desc: 'Strong analytical and problem-solving mindset.' },
                { title: 'Collaboration', desc: 'Effective communicator and collaborative team member.' },
                { title: 'Detail-Oriented', desc: 'Detail-oriented and self-directed learner.' },
                { title: 'Adaptability', desc: 'Adapts quickly to new tools, frameworks, and environments.' }
              ].map((strength) => (
                <li key={strength.title} className="flex items-start gap-3">
                  <span className="mt-1 text-indigo-400 text-xs">◆</span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">{strength.title}</h4>
                    <p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">{strength.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>

      </section>

      {/* Stats Bento Grid row */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bentoStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/5 bg-slate-900/10 p-6 flex items-center justify-between backdrop-blur-sm"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-white font-display">{stat.value}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-zinc-400 border border-white/5">
                <Icon size={20} />
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Education Timeline */}
      <section className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SectionTitle 
            eyebrow="Timeline" 
            title="Education & Credentials" 
            text="My academic training in Computer Science, combined with targeted certificates to specialize in deep learning implementations."
            className="mb-0"
          />
        </div>

        <div className="lg:col-span-2 space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-1.5 top-1.5 h-5 w-5 rounded-full border-2 border-zinc-800 bg-zinc-950 flex items-center justify-center group-hover:border-indigo-400 transition-colors duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-indigo-400 transition-colors duration-300" />
              </div>

              <SpotlightCard className="p-6 border border-white/5 bg-slate-900/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="inline-block rounded-full bg-zinc-900 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-800 self-start sm:self-center shrink-0">
                    {item.period}
                  </span>
                </div>
                
                <p className="mt-1 text-xs font-medium text-indigo-400/80">{item.org}</p>
                
                {item.detail && (
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {item.detail}
                  </p>
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}