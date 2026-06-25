import { useState } from 'react';

export default function SpotlightCard({ children, className = '', ...props }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        '--mouse-x': `${coords.x}px`,
        '--mouse-y': `${coords.y}px`
      }}
      {...props}
    >
      {/* Spotlight Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />
      
      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(150px at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.45), transparent 80%)`,
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          WebkitMaskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskComposite: 'exclude',
          WebkitMaskComposite: 'destination-out',
          padding: '1px'
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
