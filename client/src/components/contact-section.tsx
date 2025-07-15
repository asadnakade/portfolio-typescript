import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      const result = await response.json();

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'asadnakade1@gmail.com',
      href: 'mailto:asadnakade1@gmail.com',
      color: 'text-pink-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7057275760',
      href: 'tel:+917057275760',
      color: 'text-purple-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/asadnakade',
      href: 'https://linkedin.com/in/asadnakade',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/asadnakade',
      href: 'https://github.com/asadnakade',
      color: 'text-slate-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded"></div>
          <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
            Let's discuss opportunities and build something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto" ref={targetRef}>
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index}
                  className={`glassmorphism border-slate-700 hover:backdrop-blur-xl transition-all transform hover:scale-105 scroll-animate ${isIntersecting ? 'animated' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center hover:opacity-80 transition-opacity"
                    >
                      <IconComponent className={`text-3xl ${info.color} mr-4 h-8 w-8`} />
                      <div>
                        <h4 className="text-xl font-semibold text-slate-200">{info.title}</h4>
                        <p className="text-slate-300">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <Card className={`glassmorphism border-slate-700 scroll-animate ${isIntersecting ? 'animated' : ''}`} style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
