import { useEffect, useState } from 'react';

interface FloatingNavProps {
  sections: string[];
}

export function FloatingNav({ sections }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="floating-nav glassmorphism rounded-full p-2">
      <div className="flex flex-col space-y-4">
        {sections.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`w-3 h-3 rounded-full transition-colors hover:scale-110 transform ${
              activeSection === sectionId 
                ? 'bg-indigo-400' 
                : 'bg-slate-400 hover:bg-indigo-300'
            }`}
            aria-label={`Navigate to ${sectionId} section`}
          />
        ))}
      </div>
    </nav>
  );
}
