import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { profile } from '../data/siteData';

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/resume', 'Resume'],
];

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-ink text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background Gradients & Grids */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Dynamic mesh glow layers */}
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        {/* Fine grain overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      </div>

      {/* Floating Glassmorphic Nav Bar Dock */}
      <header className="fixed top-6 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2 rounded-full border border-white/5 bg-slate-950/45 px-6 py-3.5 shadow-premium backdrop-blur-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <NavLink 
            to="/" 
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:scale-125 transition-transform duration-300" />
            Abhiram R S
          </NavLink>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map(([path, label]) => {
              const isActive = location.pathname === path;
              return (
                <NavLink 
                  key={path} 
                  to={path} 
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Socials */}
          <div className="hidden items-center gap-2.5 md:flex">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub" 
              className="rounded-full border border-white/5 p-2.5 text-zinc-400 hover:border-indigo-500/30 hover:text-white transition-all hover:scale-105"
            >
              <Github size={16} />
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn" 
              className="rounded-full border border-white/5 p-2.5 text-zinc-400 hover:border-indigo-500/30 hover:text-white transition-all hover:scale-105"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              aria-label="Email" 
              className="rounded-full border border-white/5 p-2.5 text-zinc-400 hover:border-indigo-500/30 hover:text-white transition-all hover:scale-105"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-white/5 p-2 text-zinc-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-2 border-t border-white/5 pt-4">
                {navItems.map(([path, label]) => {
                  const isActive = location.pathname === path;
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive ? 'bg-white/5 text-white border border-white/10' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {label}
                    </NavLink>
                  );
                })}
                
                {/* Mobile Socials */}
                <div className="mt-2 flex items-center justify-center gap-6 border-t border-white/5 py-4">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white"><Github size={20} /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white"><Linkedin size={20} /></a>
                  <a href={`mailto:${profile.email}`} className="text-zinc-400 hover:text-white"><Mail size={20} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Layout */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/20 py-10 text-center text-sm text-zinc-500 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Abhiram R S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
