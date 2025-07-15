import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface Counter {
  label: string;
  value: number;
  color: string;
}

export function AboutSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [counters, setCounters] = useState<Counter[]>([
    { label: "Years Experience", value: 0, color: "text-indigo-400" },
    { label: "Projects Completed", value: 0, color: "text-purple-400" },
    { label: "Certifications", value: 0, color: "text-cyan-400" },
  ]);

  const skills: Skill[] = [
    { name: "Java & Spring Boot", percentage: 90, color: "from-indigo-500 to-purple-500" },
    { name: "React.js & Frontend", percentage: 85, color: "from-purple-500 to-pink-500" },
    { name: "Database Management", percentage: 80, color: "from-cyan-500 to-blue-500" },
    { name: "Microservices & Cloud", percentage: 75, color: "from-emerald-500 to-teal-500" },
  ];

  useEffect(() => {
    if (isIntersecting) {
      const targetValues = [2, 15, 2];
      const duration = 2000;
      const steps = 30;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => prev.map((counter, index) => ({
          ...counter,
          value: Math.floor((targetValues[index] * currentStep) / steps)
        })));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(prev => prev.map((counter, index) => ({
            ...counter,
            value: targetValues[index]
          })));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isIntersecting]);

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={targetRef}>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Software Engineer with expertise in full-stack development, specializing in Java, Spring Boot, and React.js. 
              With a strong focus on Test-Driven Development and microservices architecture, I deliver high-quality, scalable solutions.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently working at Capgemini Technology Services, I've successfully reduced code duplication by 10% and increased 
              system maintainability by 15% through comprehensive analysis and refactoring.
            </p>
            
            {/* Achievement counters */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {counters.map((counter, index) => (
                <div key={index} className="text-center glassmorphism rounded-lg p-4">
                  <div className={`text-3xl font-bold ${counter.color}`}>
                    {counter.value}
                  </div>
                  <div className="text-sm text-slate-300">{counter.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Skills with animated bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`skill-bar bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isIntersecting ? `${skill.percentage}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
