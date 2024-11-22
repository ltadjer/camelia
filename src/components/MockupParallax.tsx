import React, { useEffect, useRef } from 'react';

export default function MockupParallax() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mockupRef.current) {
        const scrolled = window.scrollY;
        mockupRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <div ref={mockupRef} className="relative h-full w-full">
        {/* Mockup principal */}
        <img
          src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Application Camelia"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 rounded-3xl shadow-2xl"
        />
        {/* Mockup flottant 1 */}
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Interface Camelia"
          className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 rounded-2xl shadow-xl animate-float-slow"
        />
        {/* Mockup flottant 2 */}
        <img
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fonctionnalités Camelia"
          className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-48 rounded-2xl shadow-xl animate-float"
        />
      </div>
    </div>
  );
}