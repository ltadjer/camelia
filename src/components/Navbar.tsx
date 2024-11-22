import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CameliaLogo from './CameliaLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CameliaLogo />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-camelia-text hover:text-camelia-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-camelia-text hover:text-camelia-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Sécurité
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-camelia-text hover:text-camelia-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="bg-camelia-primary text-white hover:bg-camelia-secondary px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Télécharger
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-camelia-text hover:bg-camelia-primary/10"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => {
                scrollToSection('features');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-camelia-text hover:text-camelia-primary hover:bg-camelia-primary/10"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => {
                scrollToSection('security');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-camelia-text hover:text-camelia-primary hover:bg-camelia-primary/10"
            >
              Sécurité
            </button>
            <button 
              onClick={() => {
                scrollToSection('support');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-camelia-text hover:text-camelia-primary hover:bg-camelia-primary/10"
            >
              Support
            </button>
            <button
              onClick={() => {
                scrollToSection('download');
                setIsOpen(false);
              }}
              className="block w-full text-center bg-camelia-primary text-white hover:bg-camelia-secondary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Télécharger
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}