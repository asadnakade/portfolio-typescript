import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function EducationSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto" ref={targetRef}>
          {/* Education */}
          <Card className={`glassmorphism border-slate-700 hover:backdrop-blur-xl transition-all transform hover:scale-105 scroll-animate ${isIntersecting ? 'animated' : ''}`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-4xl text-purple-400 mr-4 h-10 w-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">Education</h3>
                  <p className="text-slate-300">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-slate-200">Bachelor of Technology</h4>
                  <p className="text-purple-300">Computer Science and Engineering</p>
                  <p className="text-slate-400">Sanjay Ghodawat University, Kolhapur</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-slate-500">Graduated: June 2022</span>
                    <Badge className="bg-purple-600 hover:bg-purple-700">GPA: 8.2/10</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className={`glassmorphism border-slate-700 hover:backdrop-blur-xl transition-all transform hover:scale-105 scroll-animate ${isIntersecting ? 'animated' : ''}`} style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="text-4xl text-cyan-400 mr-4 h-10 w-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400">Certifications</h3>
                  <p className="text-slate-300">Professional Credentials</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="text-lg font-semibold text-slate-200 flex items-center">
                    <span className="text-cyan-400 mr-2">🏆</span>
                    Azure Developer Associate AZ-204
                  </h4>
                  <p className="text-slate-400">Microsoft Certified</p>
                </div>
                
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="text-lg font-semibold text-slate-200 flex items-center">
                    <span className="text-cyan-400 mr-2">🏆</span>
                    Azure Fundamentals AZ-900
                  </h4>
                  <p className="text-slate-400">Microsoft Certified</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
