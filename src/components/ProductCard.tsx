import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  code?: string; // Code secret pour les fonctionnalités d'urgence
}

export default function ProductCard({ image, title, price, code }: ProductCardProps) {
  const handleQuickAction = () => {
    if (code) {
      // Activation des fonctionnalités d'urgence selon le code
      console.log(`Emergency action: ${code}`);
    }
  };

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            onClick={handleQuickAction}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
          >
            <Heart className="h-5 w-5 text-gray-800" />
          </button>
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors">
            <ShoppingBag className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-800">
            <a href="#" className="hover:text-purple-600">
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{price}</p>
        </div>
      </div>
    </div>
  );
}