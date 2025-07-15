import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
  color: string;
}

export function SkillsSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('all');

  const skills: Skill[] = [
    { name: 'Java', icon: '☕', proficiency: 90, category: 'backend', color: 'text-orange-400' },
    { name: 'Spring Boot', icon: '🍃', proficiency: 85, category: 'backend', color: 'text-green-400' },
    { name: 'React.js', icon: '⚛️', proficiency: 80, category: 'frontend', color: 'text-cyan-400' },
    { name: 'JavaScript', icon: '🟨', proficiency: 85, category: 'frontend', color: 'text-yellow-400' },
    { name: 'PostgreSQL', icon: '🐘', proficiency: 75, category: 'database', color: 'text-blue-400' },
    { name: 'MongoDB', icon: '🍃', proficiency: 70, category: 'database', color: 'text-green-600' },
    { name: 'Git', icon: '📋', proficiency: 85, category: 'tools', color: 'text-red-400' },
    { name: 'Docker', icon: '🐳', proficiency: 65, category: 'tools', color: 'text-blue-500' },
    { name: 'Hibernate', icon: '⚙️', proficiency: 80, category: 'backend', color: 'text-purple-400' },
    { name: 'Azure', icon: '☁️', proficiency: 70, category: 'tools', color: 'text-indigo-400' },
    { name: 'Bootstrap', icon: '🎨', proficiency: 75, category: 'frontend', color: 'text-purple-500' },
    { name: 'Jenkins', icon: '🔧', proficiency: 65, category: 'tools', color: 'text-orange-500' },
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto rounded"></div>
        </div>
        
        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`glassmorphism px-6 py-3 transition-all ${
                activeFilter === category.id 
                  ? 'bg-indigo-600 hover:bg-indigo-700 border-none' 
                  : 'border-slate-600 hover:bg-slate-700'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" ref={targetRef}>
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name}
              className={`glassmorphism border-slate-700 text-center hover:backdrop-blur-xl transition-all transform hover:scale-105 scroll-animate ${isIntersecting ? 'animated' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: activeFilter === 'all' || skill.category === activeFilter ? 1 : 0.3,
                transform: activeFilter === 'all' || skill.category === activeFilter ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <CardContent className="p-4">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-slate-200 mb-2">{skill.name}</h4>
                <div className="mt-2 bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      skill.color.includes('orange') ? 'bg-orange-400' :
                      skill.color.includes('green') ? 'bg-green-400' :
                      skill.color.includes('cyan') ? 'bg-cyan-400' :
                      skill.color.includes('yellow') ? 'bg-yellow-400' :
                      skill.color.includes('blue') ? 'bg-blue-400' :
                      skill.color.includes('red') ? 'bg-red-400' :
                      skill.color.includes('purple') ? 'bg-purple-400' :
                      skill.color.includes('indigo') ? 'bg-indigo-400' :
                      'bg-slate-400'
                    }`}
                    style={{ 
                      width: isIntersecting ? `${skill.proficiency}%` : '0%'
                    }}
                  />
                </div>
                <span className="text-xs text-slate-400 mt-1 block">{skill.proficiency}%</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
