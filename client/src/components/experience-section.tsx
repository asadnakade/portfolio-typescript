import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
  color: string;
}

export function ExperienceSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const experiences: Experience[] = [
    {
      title: "Software Engineer",
      company: "Capgemini Technology Service India Limited",
      period: "Dec 2022 – March 2025",
      achievements: [
        "Developed robust APIs using Java Spring Boot and Hibernate with TDD principles",
        "Implemented microservices architecture using Spring Cloud for enhanced modularity",
        "Achieved 10% reduction in code duplication and 15% increase in maintainability",
        "Leveraged Jenkins for automated testing and CI/CD pipeline optimization"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "Jenkins"],
      color: "indigo"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Capgemini Technology Service India Limited", 
      period: "July 2022 – Dec 2022",
      achievements: [
        "Built web applications using React.js, Java, Spring Boot, and MySQL",
        "Developed reusable React components and integrated APIs using Axios",
        "Designed RESTful APIs using Spring Boot and Spring Data JPA"
      ],
      technologies: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      color: "purple"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={targetRef}>
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item relative pl-20 pb-12 scroll-animate ${isIntersecting ? 'animated' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="glassmorphism border-slate-700 hover:backdrop-blur-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className={`text-2xl font-semibold text-${exp.color}-400`}>
                        {exp.title}
                      </h3>
                      <Badge className={`bg-${exp.color}-600 hover:bg-${exp.color}-700`}>
                        {exp.period}
                      </Badge>
                    </div>
                    <h4 className={`text-xl text-${exp.color === 'indigo' ? 'purple' : 'cyan'}-400 mb-4`}>
                      {exp.company}
                    </h4>
                    
                    <div className="space-y-3 text-slate-300 mb-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <CheckCircle className="text-emerald-400 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-slate-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
