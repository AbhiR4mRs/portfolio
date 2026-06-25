import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Award, FileText, CheckCircle, ExternalLink, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import { profile, skillsCategorized, timeline } from '../data/siteData';

const certificationDetails = [
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'DeepLearning.AI · Coursera',
    date: 'Jun 2025',
    credentialId: 'COURSERA-TF-DEV-99A1',
    verificationLink: 'https://coursera.org/verify/tensorflow-developer',
    verifiedSkills: ['Neural Networks', 'Computer Vision (CNN)', 'NLP Recurrent Networks', 'Time Series Forecasting']
  },
  {
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan · Coursera',
    date: 'Nov 2021',
    credentialId: 'COURSERA-PY4E-57B2',
    verificationLink: 'https://coursera.org/verify/python-for-everybody',
    verifiedSkills: ['Data Structures', 'REST APIs', 'SQL Database Mapping', 'Web Scraping (BeautifulSoup)']
  }
];

export default function ResumePage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="space-y-16"
    >
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <SectionTitle 
            eyebrow="Resume" 
            title="Interactive technical resume." 
            text="Scan through my academic timelines, skills breakdown, and interactive certification credential verifiers." 
          />
        </div>

        <a 
          href="/Abhiram_RS_Resume.pdf" 
          download
          className="group relative flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.55)] hover:brightness-110 active:scale-[0.98]"
        >
          <Download size={14} className="transition-transform group-hover:-translate-y-0.5 duration-300" />
          Download Resume (PDF)
        </a>
      </div>

      {/* Grid: Left Column (Bio & Experience), Right Column (Skills & Certs) */}
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        
        {/* Left Column */}
        <div className="space-y-12">
          
          {/* Summary */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Professional Summary
            </h2>
            <SpotlightCard className="p-7 border border-white/5 bg-slate-900/10">
              <p className="text-sm leading-relaxed text-zinc-300">
                {profile.summary}
              </p>
            </SpotlightCard>
          </section>

          {/* Education Timeline */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Education Timeline
            </h2>
            <div className="space-y-4">
              {timeline.map((edu, idx) => (
                <div key={edu.title} className="relative rounded-2xl border border-white/5 bg-slate-900/10 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{edu.title}</h3>
                      <p className="text-xs font-semibold text-indigo-400/80 mt-1">{edu.org}</p>
                    </div>
                    <span className="inline-block rounded-full bg-zinc-900 px-2.5 py-1 font-mono text-[9px] font-bold text-zinc-400 border border-zinc-800 self-start shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-400 border-t border-white/5 pt-3">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Engineering Highlights */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Engineering Competence
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 space-y-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 text-xs font-bold font-mono">01</div>
                <h3 className="font-display text-sm font-semibold text-white">Advanced ML Implementations</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Experience designing temporal anomaly trackers (LSTM-based) and convolutional object recognizers (YOLO networks) with low-latency edge bounds.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 space-y-3">
                <div className="h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 text-xs font-bold font-mono">02</div>
                <h3 className="font-display text-sm font-semibold text-white">Full-Stack Application Delivery</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Competency setting up Python web frameworks (FastAPI/Django), managing cache architectures (Redis), SQL databases (PostgreSQL/SQLite), and frontends.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 space-y-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 text-xs font-bold font-mono">03</div>
                <h3 className="font-display text-sm font-semibold text-white">Rigorous Quality Assurance</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Structured backend unit test suites (PyTest), validation of data constraints, class balance checking, and throughput testing of API endpoints.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 space-y-3">
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 text-xs font-bold font-mono">04</div>
                <h3 className="font-display text-sm font-semibold text-white">Container Infrastructure</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Packaging entire multi-service applications using Docker compose setups to ensure reproducible builds across development and testing.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column */}
        <div className="space-y-12 lg:sticky lg:top-28">
          
          {/* Categorized Skills */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Core Competencies
            </h2>
            <div className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/20 p-6 backdrop-blur-sm">
              {skillsCategorized.map((catObj) => (
                <div key={catObj.category} className="space-y-2">
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {catObj.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {catObj.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="rounded-lg bg-white/5 border border-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Credential Verifier */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Credentials Verifier
            </h2>
            
            <div className="space-y-3">
              {certificationDetails.map((cert, idx) => (
                <div key={cert.title} className="rounded-2xl border border-white/5 bg-slate-900/20 overflow-hidden">
                  
                  {/* Summary Bar */}
                  <button
                    onClick={() => setSelectedCert(selectedCert === idx ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition-all hover:bg-white/5"
                  >
                    <div>
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] text-zinc-500 mt-0.5">{cert.issuer}</p>
                    </div>
                    <Award size={16} className={`text-indigo-400 transition-transform ${
                      selectedCert === idx ? 'scale-125' : 'opacity-60'
                    }`} />
                  </button>

                  {/* Verifiable Drawer */}
                  <AnimatePresence>
                    {selectedCert === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-white/5 bg-slate-950/60 p-5 space-y-4"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-zinc-500">ID: {cert.credentialId}</span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle size={10} /> Verified
                          </span>
                        </div>

                        <div className="space-y-2">
                          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Verified Skills</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.verifiedSkills.map((sk) => (
                              <span key={sk} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] text-zinc-400">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-lg bg-indigo-500/10 py-2 font-mono text-[10px] font-bold text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-all w-full"
                        >
                          Verify Credential Link
                          <ExternalLink size={10} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </div>
          </section>

        </div>

      </div>

    </motion.div>
  );
}