import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cpu, Database, Network, Eye, ArrowRight } from 'lucide-react';
import { projects } from '../data/siteData';
import SpotlightCard from '../components/SpotlightCard';

// Sample mock code blocks for the case studies
const projectCodeSnippets = {
  'zero-day-intrusion-detection-system': `// Attention-Based LSTM Autoencoder Anomaly Scoring
import torch
import torch.nn as nn

class LSTMAutoencoder(nn.Module):
    def __init__(self, seq_len, no_features, embedding_dim=64):
        super().__init__()
        self.seq_len = seq_len
        self.no_features = no_features
        self.encoder = nn.LSTM(no_features, embedding_dim, batch_first=True)
        self.decoder = nn.LSTM(embedding_dim, no_features, batch_first=True)
        
    def forward(self, x):
        _, (hidden, _) = self.encoder(x)
        # Reconstruct sequential flow packet
        x_decoded, _ = self.decoder(hidden.repeat(1, self.seq_len, 1))
        reconstruction_error = torch.mean((x - x_decoded) ** 2, dim=-1)
        return reconstruction_error`,
        
  'foreign-object-intrusion-detection': `// OpenCV Image Stabilization and YOLO Object Tracker
import cv2
import numpy as np

def process_railway_frame(frame, model):
    # Apply CLAHE to resolve poor environmental light
    lab = cv2.cvtColor(frame, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
    cl = clahe.apply(l)
    processed_img = cv2.merge((cl, a, b))
    frame_rgb = cv2.cvtColor(processed_img, cv2.COLOR_LAB2BGR)
    
    # Run Inference
    results = model(frame_rgb)
    return results.xyxy[0] # Bounding boxes`,

  'credit-card-approval-prediction': `# Preprocessing and SMOTE class balancing pipeline
from imblearn.over_sampling import SMOTE
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('smote', SMOTE(random_state=42)),
    ('classifier', RandomForestClassifier(n_estimators=100))
])
# Accuracy achieved: 93.43%`,

  'hostel-management-system': `# Room Allocation transaction logic
from django.db import transaction
from django.shortcuts import get_object_or_404
from .models import Room, Application

@transaction.atomic
def allocate_room(application_id):
    app = get_object_or_404(Application, id=application_id)
    room = Room.objects.filter(is_available=True, type=app.room_type).first()
    if room:
        app.allocated_room = room
        app.status = 'Allocated'
        room.occupied_count += 1
        room.save()
        app.save()
        return True
    return False`
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="font-display text-2xl font-bold text-white">Project not found</h2>
        <Link to="/projects" className="mt-4 text-indigo-400 hover:underline">
          Return to projects
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="space-y-16"
    >
      
      {/* Navigation Header */}
      <div className="space-y-6">
        <Link 
          to="/projects" 
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to projects
        </Link>

        <div className="relative">
          <div className="absolute -left-10 top-0 -z-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Technical Case Study
          </div>
          
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
            {project.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-300">
            {project.short}
          </p>
        </div>
      </div>

      {/* Main Grid Layout: Content (Left) & Sidebar (Right) */}
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        
        {/* Case Study Core Content (Left) */}
        <div className="space-y-12">
          
          {/* Key Metrics Panels */}
          {project.metrics && (
            <section className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/5 bg-slate-900/10 p-5 backdrop-blur-sm">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{metric.label}</p>
                  <p className="mt-2 text-xl font-bold text-white font-display">{metric.value}</p>
                </div>
              ))}
            </section>
          )}

          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              The Problem
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Pipeline Systems Diagram (Visual representation) */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              System Architecture Flow
            </h2>
            
            <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 md:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
                {slug === 'zero-day-intrusion-detection-system' ? (
                  <>
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Network size={16} className="text-indigo-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Source</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Network Packet</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-indigo-500/45 bg-indigo-500/5 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Database size={16} className="text-indigo-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-indigo-400">Queue</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Redis Ingestion</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-indigo-400 animate-pulse shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Cpu size={16} className="text-indigo-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Core Model</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">LSTM Attention</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Eye size={16} className="text-indigo-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Evaluator</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Error Threshold</p>
                      </div>
                    </div>
                  </>
                ) : slug === 'foreign-object-intrusion-detection' ? (
                  <>
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Network size={16} className="text-cyan-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Feed</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Railway Video</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Database size={16} className="text-cyan-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">CV Filter</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">OpenCV CLAHE</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-cyan-400 animate-pulse shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-cyan-500/45 bg-cyan-500/5 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Cpu size={16} className="text-cyan-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-cyan-400">Detector</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">YOLO Backbone</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Eye size={16} className="text-cyan-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Output</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Track Alerts</p>
                      </div>
                    </div>
                  </>
                ) : slug === 'credit-card-approval-prediction' ? (
                  <>
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Network size={16} className="text-violet-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Dataset</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Financial Profiles</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Database size={16} className="text-violet-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Balancing</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">SMOTE Resample</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-violet-400 animate-pulse shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-violet-500/45 bg-violet-500/5 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Cpu size={16} className="text-violet-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-violet-400">Classifier</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Random Forest</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Eye size={16} className="text-violet-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Artifact</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Model PKL</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Network size={16} className="text-emerald-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Request</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Student Booking</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Database size={16} className="text-emerald-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Route</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Django MVC</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-emerald-400 animate-pulse shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-emerald-500/45 bg-emerald-500/5 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Cpu size={16} className="text-emerald-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">Database</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">SQLite Storage</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-zinc-500 shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-900/60 p-4 w-full max-w-[240px] lg:w-32 text-center">
                      <Eye size={16} className="text-emerald-400" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">UI</p>
                        <p className="text-[10px] font-bold text-white mt-0.5">Tailwind Portal</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Approach & Steps */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Approach & Implementation
            </h2>
            <ul className="space-y-4">
              {project.approach.map((step, idx) => (
                <li 
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/10 p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-xs font-bold text-indigo-400 border border-indigo-500/20">
                    {idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300">{step}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Code Snippet Window */}
          {projectCodeSnippets[slug] && (
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Pipeline Implementation Code
              </h2>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/80 shadow-lg">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between bg-slate-900/80 px-4 py-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wide text-zinc-500 uppercase">python script</span>
                </div>
                
                {/* Code Window Pre */}
                <pre className="overflow-x-auto p-5 font-mono text-xs text-zinc-300 leading-relaxed max-h-[350px]">
                  <code>{projectCodeSnippets[slug]}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Outcome & Impact */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Outcome & Impact
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.impact}
            </p>
          </section>

        </div>

        {/* Sidebar Info Panel (Right, Sticky) */}
        <aside className="space-y-6 lg:sticky lg:top-28">
          
          {/* Metadata Card */}
          <SpotlightCard className="p-6 border border-white/5 bg-slate-900/20">
            <h3 className="font-display text-base font-bold text-white mb-4 pb-2 border-b border-white/5">
              Project Details
            </h3>

            <dl className="space-y-4">
              <div>
                <dt className="font-mono text-[10px] uppercase text-zinc-500">Category</dt>
                <dd className="mt-1 text-sm font-medium text-white">{project.category}</dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase text-zinc-500">Technologies</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-300 border border-white/[0.02]"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase text-zinc-500">Open Source</dt>
                <dd className="mt-2">
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 font-mono text-xs font-bold text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-all w-full justify-center"
                    >
                      <Github size={14} />
                      Source Code
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="font-mono text-xs italic text-zinc-600 block text-center">Proprietary / Closed Source</span>
                  )}
                </dd>
              </div>
            </dl>
          </SpotlightCard>

        </aside>

      </div>

    </motion.article>
  );
}