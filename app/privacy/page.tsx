'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Lock, Users, Database, Settings, Bell, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-standard security measures to protect your personal information.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We are clear about what data we collect and how we use it.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Your data is encrypted and stored securely using best practices.',
  },
  {
    icon: Users,
    title: 'User Control',
    description: 'You have control over your data and can request its deletion at any time.',
  },
  {
    icon: Database,
    title: 'Data Minimization',
    description: 'We only collect data that is necessary for our services.',
  },
  {
    icon: Settings,
    title: 'Privacy by Design',
    description: 'Privacy considerations are built into our systems from the ground up.',
  },
  {
    icon: Bell,
    title: 'Notification',
    description: 'We will notify you of any significant changes to our privacy practices.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'We comply with international privacy regulations and standards.',
  },
];

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you:
    
• Create an account or fill out a form
• Subscribe to our newsletter
• Contact us for support
• Participate in surveys or promotions
• Use our interactive features

This may include your name, email address, phone number, company information, and any other information you choose to provide.

We also automatically collect certain information when you use our website, including:
• Your IP address and browser type
• Pages you visit and time spent on our site
• Referring website and search terms
• Device information and operating system
• Location data (with your permission)
• Cookies and similar tracking technologies`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
    
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments and questions
• Communicate with you about products, services, and events
• Monitor and analyze trends and usage
• Detect, investigate, and prevent fraudulent transactions
• Comply with legal obligations
• Personalize your experience on our website
• Send marketing communications (with your consent)

We will not sell, rent, or share your personal information with third parties without your explicit consent, except as described in this policy.`,
  },
  {
    title: '3. Information Sharing and Disclosure',
    content: `We may share your information in the following situations:
    
• With service providers who help us operate our business
• With your consent or at your direction
• To comply with legal obligations or protect rights
• In connection with a business transfer or acquisition
• To protect the safety and security of our users
• With analytics and advertising partners (in aggregated form)

All third-party service providers are required to maintain the confidentiality and security of your information and are prohibited from using it for any other purpose.

We may also share anonymized or aggregated data that cannot be used to identify you personally.`,
  },
  {
    title: '4. Data Security',
    content: `We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. These measures include:
    
• Encryption of sensitive data in transit and at rest
• Regular security assessments and updates
• Limited access to personal information on a need-to-know basis
• Secure data centers with physical and digital safeguards
• Multi-factor authentication for administrative access
• Regular security training for our employees
• Incident response procedures

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. We encourage you to take steps to protect your personal information as well.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to:
    
• Provide you with our services
• Comply with legal obligations
• Resolve disputes and enforce agreements
• Support business operations
• Maintain security and prevent fraud

When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies. You may request deletion of your personal information at any time, subject to certain legal and operational requirements.`,
  },
  {
    title: '6. Your Rights and Choices',
    content: `You have certain rights regarding your personal information:
    
• Access: Request a copy of the personal information we have about you
• Correction: Request correction of inaccurate information
• Deletion: Request deletion of your personal information
• Portability: Request a copy of your data in a portable format
• Opt-out: Unsubscribe from marketing communications
• Object: Object to certain processing of your information
• Restrict: Request restriction of processing in certain circumstances

To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.`,
  },
  {
    title: '7. Cookies and Tracking Technologies',
    content: `We use cookies and similar technologies to:
    
• Remember your preferences and settings
• Understand how you use our website
• Improve our services and user experience
• Provide personalized content and advertisements
• Analyze website traffic and performance
• Enable social media features

You can control cookies through your browser settings, but disabling them may affect your experience on our website. We also use web beacons, pixel tags, and other tracking technologies for similar purposes.`,
  },
  {
    title: '8. Third-Party Links and Services',
    content: `Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.

We may also integrate with third-party services such as social media platforms, analytics providers, and payment processors. These integrations are governed by the respective privacy policies of those services.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.

If we learn that we have collected personal information from a child under 13, we will take steps to delete such information from our files as quickly as possible.`,
  },
  {
    title: '10. International Data Transfers',
    content: `Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your information receives adequate protection.

We use appropriate safeguards such as standard contractual clauses and adequacy decisions to protect your information during international transfers.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also send you an email notification.

Your continued use of our services after any changes constitutes acceptance of the updated policy. We encourage you to review this policy periodically.`,
  },
];

export default function PrivacyPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.privacy-header', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Principles animations
      gsap.from('.principle-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: principlesRef.current,
          start: 'top 80%',
        },
      });

      // Content animations
      gsap.from('.privacy-section', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
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
          <div className="privacy-header space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>
            <div className="text-muted-foreground">
              <p className="font-medium">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section ref={principlesRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Privacy <span className="text-gradient">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are committed to protecting your privacy through these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="principle-card text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="privacy-section border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-semibold mb-6 text-gradient">
                  Policy Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This Privacy Policy describes how Portfolio ("we," "us," or "our") collects, uses, and shares 
                  information about you when you use our website, services, or interact with us. We are committed 
                  to protecting your privacy and ensuring you understand how your information is used.
                </p>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <Card key={index} className="privacy-section border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-12">
                  <h2 className="text-2xl font-semibold mb-6 text-primary">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Separator className="my-16" />

            <Card className="privacy-section border-0 bg-primary/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  Contact Us About Privacy
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-3 text-muted-foreground mb-8">
                  <p><strong className="text-foreground">Email:</strong> privacy@portfolio.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-foreground">Address:</strong> 123 Business Street, San Francisco, CA 94105</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-semibold text-lg"
                >
                  Contact us directly →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}