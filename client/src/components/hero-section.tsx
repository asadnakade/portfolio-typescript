import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Code, MessageCircle, ChevronDown } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/use-typing-animation';

export function HeroSection() {
  const typingTexts = [
    "Software Engineer",
    "Full Stack Developer", 
    "Java Spring Expert",
    "React.js Developer",
    "Microservices Architect"
  ];
  
  const displayText = useTypingAnimation(typingTexts);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-3 border-slate-300 shadow-xl animate-float">
            <img 
              src="/attached_assets/WhatsApp Image 2025-07-09 at 12.38.33_1752552854492.JPG" 
              alt="Asad Nakade - Professional Photo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-300 bg-clip-text text-transparent">
            Asad Nakade
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12 text-slate-300">
            <span className="typing-animation">{displayText}</span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Experienced Software Engineer with 2+ years of expertise in designing, developing, and maintaining robust software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 border-none"
            >
              <Code className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-slate-400 text-slate-300 px-8 py-4 text-lg font-medium hover:bg-slate-700 hover:text-slate-200 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating contact buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <Button
          asChild
          size="icon"
          className="glassmorphism w-14 h-14 rounded-full hover:scale-110 transition-transform border-none"
        >
          <a href="mailto:asadnakade1@gmail.com" aria-label="Send email">
            <Mail className="h-6 w-6" />
          </a>
        </Button>
        <Button
          asChild
          size="icon"
          className="glassmorphism w-14 h-14 rounded-full hover:scale-110 transition-transform border-none"
        >
          <a href="tel:+917057275760" aria-label="Call phone">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
        <Button
          asChild
          size="icon"
          className="glassmorphism w-14 h-14 rounded-full hover:scale-110 transition-transform border-none"
        >
          <a href="https://linkedin.com/in/asadnakade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
        <Button
          asChild
          size="icon"
          className="glassmorphism w-14 h-14 rounded-full hover:scale-110 transition-transform border-none"
        >
          <a href="https://github.com/asadnakade" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github className="h-6 w-6" />
          </a>
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </div>
    </section>
  );
}
