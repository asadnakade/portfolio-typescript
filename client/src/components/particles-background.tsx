import { useEffect, useRef } from 'react';

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = particle.style.height = Math.random() * 6 + 2 + 'px';
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 25000);
    };

    const interval = setInterval(createParticle, 1000);
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, Math.random() * 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
