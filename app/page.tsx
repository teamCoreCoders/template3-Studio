'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Search,
  ExternalLink,
  Star,
  Quote,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web', 'E-Commerce', 'React'],
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive banking application with advanced financial features.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'FinTech', 'UI/UX'],
    link: '#',
  },
  {
    title: 'Brand Identity System',
    description: 'Complete visual identity including logo, guidelines, and marketing materials.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'Design', 'Identity'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and reporting tools.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web', 'SaaS', 'Analytics'],
    link: '#',
  },
];

const services = [
  {
    icon: Code,
    title: 'Web & App Development',
    description: 'Custom web applications and mobile apps built with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create meaningful and delightful experiences.',
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description: 'Comprehensive branding solutions from logo design to complete visual identity systems.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Optimization strategies to improve search rankings and website performance.',
  },
];

const testimonials = [
  {
    quote: "Working with this team transformed our digital presence completely. The attention to detail and creative vision exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "The project was delivered on time and the quality was outstanding. Their expertise in modern web technologies is impressive.",
    author: "Michael Chen",
    role: "CTO, InnovateLab",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "Professional, creative, and reliable. They understood our vision and brought it to life beautifully.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const clientLogos = [
  { name: 'TechStart', logo: 'TS' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'GrowthCo', logo: 'GC' },
  { name: 'DesignHub', logo: 'DH' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'CloudSync', logo: 'CS' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.hero-cta', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      });

      // Projects animations
      gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        },
      });

      // Services animations
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
      });

      // Testimonials animations
      gsap.from('.testimonial-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        },
      });

      // CTA animations
      gsap.from('.cta-content', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
      });

      // Floating elements
      gsap.to('.hero-float-1', {
        y: -30,
        duration: 3,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.hero-float-2', {
        y: -20,
        duration: 4,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Welcome to{' '}
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="hero-subtitle text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing exceptional digital work — crafted with precision, passion, and purpose.
            </p>
            <div className="hero-cta">
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-8 py-6">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating elements */}
          <div className="hero-float-1 absolute top-20 right-20 hidden lg:block">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
          <div className="hero-float-2 absolute bottom-40 left-20 hidden lg:block">
            <div className="w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent work and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="project-card group hover-lift border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="glass">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Services <span className="text-gradient">Offered</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="service-card group hover-lift text-center border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="testimonial-card hover-lift border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
              Trusted by leading companies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Let's Build Something{' '}
              <span className="text-gradient">Incredible Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether it's a bold idea or a simple redesign, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-8 py-6">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}