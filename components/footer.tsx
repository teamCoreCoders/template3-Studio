import Link from 'next/link';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-muted/30 to-transparent border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with precision, passion, and purpose.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navigation</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About & Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Legal</h4>
            <div className="space-y-3">
              <Link
                href="/terms"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 Portfolio. All rights reserved.
            </p>
            <p className="text-muted-foreground flex items-center gap-2 mt-2 sm:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}