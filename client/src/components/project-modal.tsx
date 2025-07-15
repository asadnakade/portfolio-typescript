import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, X } from 'lucide-react';

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
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism border-slate-700">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-3xl font-bold text-indigo-400">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-lg"
          />
          
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
          
          <div>
            <h4 className="text-xl font-semibold text-indigo-400 mb-3">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-700">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
