'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Clock,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@portfolio.com',
    href: 'mailto:hello@portfolio.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    href: '#',
  },
];

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Full-stack developer with 8+ years of experience in modern web technologies and scalable solutions.',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Creative designer passionate about creating beautiful and functional user experiences that delight.',
  },
  {
    name: 'Mike Rodriguez',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Experienced project manager ensuring smooth delivery and exceptional client satisfaction.',
  },
];

const stats = [
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Award, label: 'Projects Completed', value: '300+' },
  { icon: Target, label: 'Years Experience', value: '8+' },
  { icon: CheckCircle, label: 'Success Rate', value: '98%' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every detail matters. We craft solutions with meticulous attention to quality and performance.',
  },
  {
    icon: CheckCircle,
    title: 'Passion',
    description: 'We love what we do and it shows in every project we deliver to our clients.',
  },
  {
    icon: Globe,
    title: 'Purpose',
    description: 'Creating meaningful digital experiences that make a real difference for businesses.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Consistent delivery, clear communication, and dependable results you can count on.',
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.contact-header', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Stats animations
      gsap.from('.stat-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      });

      // Values animations
      gsap.from('.value-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 60%',
        },
      });

      // Team animations
      gsap.from('.team-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
        },
      });

      // Contact form animations
      gsap.from('.contact-form', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.contact-info', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section ref={headerRef} className="py-24 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="contact-header space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              About <span className="text-gradient">Us</span> &{' '}
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get to know our team and discover how we can help bring your vision to life. 
              We're here to answer your questions and discuss your next project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technical expertise, and dedication to deliver exceptional results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="value-card text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our mission is to create digital experiences that not only look beautiful but also perform exceptionally. 
                  We believe in the power of good design and clean code to transform businesses and engage audiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in web development, UI/UX design, and digital strategy, we bring a unique 
                  blend of creativity and technical expertise to every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card group hover-lift border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="contact-form border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register('name', { required: 'Name is required' })}
                        className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-2">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className={`h-12 ${errors.subject ? 'border-destructive' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-2">{errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2">{errors.message.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full group h-12 text-lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                  {isSubmitted && (
                    <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="contact-info space-y-8">
              <div>
                <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300 group"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-8">Office Hours</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-8">Response Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}