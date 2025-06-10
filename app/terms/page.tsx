'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const highlights = [
  {
    icon: FileText,
    title: 'Terms Overview',
    description: 'Clear guidelines for using our website and services',
  },
  {
    icon: Scale,
    title: 'Legal Framework',
    description: 'Comprehensive legal protection for both parties',
  },
  {
    icon: Shield,
    title: 'User Rights',
    description: 'Your rights and responsibilities as a user',
  },
  {
    icon: AlertTriangle,
    title: 'Important Notes',
    description: 'Key points you should be aware of',
  },
];

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These terms constitute a legally binding agreement between you and Portfolio. Your continued use of our website indicates your acceptance of these terms and any modifications we may make to them.`,
  },
  {
    title: '2. Use License',
    content: `Permission is granted to temporarily download one copy of the materials on Portfolio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials

This license shall automatically terminate if you violate any of these restrictions and may be terminated by Portfolio at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
  },
  {
    title: '3. Disclaimer',
    content: `The materials on Portfolio's website are provided on an 'as is' basis. Portfolio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, Portfolio does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`,
  },
  {
    title: '4. Limitations',
    content: `In no event shall Portfolio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Portfolio's website, even if Portfolio or a Portfolio authorized representative has been notified orally or in writing of the possibility of such damage. 

Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
  },
  {
    title: '5. Accuracy of Materials',
    content: `The materials appearing on Portfolio's website could include technical, typographical, or photographic errors. Portfolio does not warrant that any of the materials on its website are accurate, complete, or current. Portfolio may make changes to the materials contained on its website at any time without notice. However, Portfolio does not make any commitment to update the materials.`,
  },
  {
    title: '6. Links',
    content: `Portfolio has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Portfolio of the site. Use of any such linked website is at the user's own risk.`,
  },
  {
    title: '7. Modifications',
    content: `Portfolio may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.

We will make reasonable efforts to notify users of significant changes to these terms through our website or other communication channels.`,
  },
  {
    title: '8. Governing Law',
    content: `These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.

Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
  },
  {
    title: '9. Privacy Policy',
    content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our website, you also agree to our Privacy Policy.

Please review our Privacy Policy, which also governs your use of the website, to understand our practices.`,
  },
  {
    title: '10. Contact Information',
    content: `If you have any questions about these Terms & Conditions, please contact us at:

Email: legal@portfolio.com
Phone: +1 (555) 123-4567
Address: 123 Business Street, San Francisco, CA 94105

We will respond to all inquiries within 48 hours during business days.`,
  },
];

export default function TermsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.terms-header', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Highlights animations
      gsap.from('.highlight-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: 'top 80%',
        },
      });

      // Content animations
      gsap.from('.terms-card', {
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
          <div className="terms-header space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services. 
              By using our website, you agree to these terms.
            </p>
            <div className="text-muted-foreground">
              <p className="font-medium">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section ref={highlightsRef} className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Key <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Important aspects of our terms and conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="highlight-card text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
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
            <Card className="terms-card border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-semibold mb-6 text-gradient">
                  Agreement Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, 
                  Portfolio accessible at portfolio.com. These Terms will be applied fully and affect your use of this Website. 
                  By using this Website, you agreed to accept all terms and conditions written in here. You must not use this 
                  Website if you disagree with any of these Website Standard Terms and Conditions.
                </p>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <Card key={index} className="terms-card border-0 bg-card/50 backdrop-blur-sm">
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

            <Card className="terms-card border-0 bg-primary/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  Questions About Our Terms?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-semibold text-lg"
                >
                  Get in touch →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}