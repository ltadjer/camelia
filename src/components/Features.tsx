import React from 'react';
import { Shield, Bell, Phone, Lock } from 'lucide-react';

const features = [
  {
    name: 'Protection Avancée',
    description: 'Un système de sécurité complet et discret',
    icon: Shield,
  },
  {
    name: 'Alerte Rapide',
    description: "Activation instantanée en cas d'urgence",
    icon: Bell,
  },
  {
    name: 'Assistance 24/7',
    description: 'Une équipe disponible à tout moment',
    icon: Phone,
  },
  {
    name: 'Confidentialité',
    description: 'Vos données sont protégées et chiffrées',
    icon: Lock,
  },
];

export default function Features() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir <span className="gradient-text">Camelia</span> ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 mx-auto">
            Une application conçue pour votre sécurité et votre tranquillité
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group hover-trigger"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideUp 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="glass-card p-6 h-full transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative flex items-center justify-center w-12 h-12 mx-auto bg-white rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    <p className="mt-3 text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}