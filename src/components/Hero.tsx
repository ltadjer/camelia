import React, { useEffect, useRef } from 'react';
import AppStoreBadge from './AppStoreBadge';
import PlayStoreBadge from './PlayStoreBadge';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.05;
        imageRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-shadow">
              <span className="block mb-2 text-gray-900">Votre sécurité</span>
              <span className="gradient-text">Notre priorité</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Camelia est une application innovante conçue pour votre protection et votre tranquillité d'esprit. 
              Simple, discrète et efficace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="button-primary">
                Découvrir Camelia
              </button>
              <button className="button-secondary">
                En savoir plus
              </button>
            </div>
          </div>
          
          <div className="relative flex-1 w-full max-w-md animate-fade-in">
            
              <img
                src="/mockup-hero.png"
                alt="Application Camelia"
                className="w-full h-full object-cover transform rotate-3 hover:scale-105 duration-300"
                loading="eager"
              />

            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
          </div>
        </div>
      </div>

      {/* Fixed Store Badges */}
      <div className="fixed z-50 right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <AppStoreBadge />
        <PlayStoreBadge />
      </div>
    </div>
  );
}