import { useEffect, useRef } from 'react';

export default function InteractiveAIBrain({ className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 9000), 75);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          originalRadius: Math.random() * 2 + 1
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      createParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    createParticles();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        // Attraction to mouse
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseRef.current.radius && distance > 0) {
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            p.vx += (dx / distance) * force * 0.03;
            p.vy += (dy / distance) * force * 0.03;
          }
        }

        // Limit speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 1.2;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Clamp positions to stay inside
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.45)'; // Subtle indigo particle
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 110;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Set dynamic gradient for lines near mouse
            let strokeColor = `rgba(99, 102, 241, ${alpha})`;
            if (mouseRef.current.x !== null) {
              const mDx = mouseRef.current.x - (p1.x + p2.x) / 2;
              const mDy = mouseRef.current.y - (p1.y + p2.y) / 2;
              const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
              if (mDist < 150) {
                strokeColor = `rgba(6, 182, 212, ${alpha * 1.5})`; // Turns cyan close to cursor
              }
            }
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
    />
  );
}
