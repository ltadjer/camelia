import React, { useEffect, useState } from 'react';
import { MousePointerClick } from 'lucide-react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
      <div className="flex flex-col items-center space-y-2">
        <MousePointerClick className="h-6 w-6 text-camelia-primary transform rotate-180" />
        <span className="text-sm text-camelia-primary font-medium">Scroll</span>
      </div>
    </div>
  );
}