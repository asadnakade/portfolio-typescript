import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectModal } from './project-modal';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
}

export function ProjectsSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Product Review Analysis System',
      description: 'Scalable monolithic platform with AOP for logging, role-based authorization, and Spring transaction management.',
      longDescription: 'A comprehensive product analysis platform built with a scalable monolithic architecture that enables seamless user and booking management. The system utilizes Aspect-Oriented Programming (AOP) through Spring AOP for efficient logging, error tracking, and role-based authorization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Spring AOP', 'Mockito', 'JUnit', 'Maven'],
      features: [
        'Robust CRUD operations with Spring Boot and Hibernate',
        'Role-based authorization with Spring Security',
        'Comprehensive logging and error tracking with AOP',
        'Transactional integrity with Spring\'s transaction management',
        'Unit testing with Mockito and JUnit'
      ],
      featured: true,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'project2',
      title: 'Microservices E-commerce Platform',
      description: 'Distributed e-commerce system with Spring Cloud, service discovery, and API gateway implementation.',
      longDescription: 'A distributed e-commerce platform built using microservices architecture with Spring Cloud for service discovery, API gateway, and inter-service communication.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Spring Cloud', 'Docker', 'MongoDB', 'Redis', 'Eureka', 'Zuul'],
      features: [
        'Service discovery with Eureka',
        'API Gateway with Zuul',
        'Distributed configuration management',
        'Circuit breaker pattern with Hystrix',
        'Containerized deployment with Docker'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'project3',
      title: 'React Task Management App',
      description: 'Full-stack task management application with real-time updates, drag-and-drop functionality, and team collaboration.',
      longDescription: 'A full-stack task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with React.js and Node.js.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Express.js', 'Material-UI'],
      features: [
        'Real-time collaboration with Socket.IO',
        'Drag-and-drop task management',
        'User authentication and authorization',
        'Project and team management',
        'Responsive design with modern UI'
      ],
      gradient: 'from-cyan-500 to-emerald-600'
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8" ref={targetRef}>
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`project-card glassmorphism border-slate-700 cursor-pointer scroll-animate ${isIntersecting ? 'animated' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600">Featured</Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">{project.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-indigo-400 hover:text-indigo-300 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}
