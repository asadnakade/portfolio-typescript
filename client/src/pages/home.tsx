import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { EducationSection } from '@/components/education-section';
import { ContactSection } from '@/components/contact-section';
import { FloatingNav } from '@/components/floating-nav';
import { ParticlesBackground } from '@/components/particles-background';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

  return (
    <div className="min-h-screen text-slate-50 overflow-x-hidden">
      {/* Particle Background */}
      <ParticlesBackground />
      
      {/* Floating Navigation */}
      <FloatingNav sections={sections} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Asad Nakade. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:asadnakade1@gmail.com" 
              className="text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="Send email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/asadnakade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/asadnakade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300 transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
