import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  gender: string | null;
}

const products = {
  femme: [
    {
      id: 1,
      title: "Robe Élégante Bleue",
      price: "89,99 €",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "FEAR"
    },
    {
      id: 2,
      title: "Sac à Main Élégant",
      price: "149,99 €",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "HELP"
    },
    {
      id: 3,
      title: "Bracelet Harmonie",
      price: "39,99 €",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "SOS"
    },
    {
      id: 4,
      title: "Collier Délicat",
      price: "59,99 €",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "ALERT"
    }
  ],
  homme: [
    {
      id: 1,
      title: "Montre Classic Silver",
      price: "129,99 €",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "RECENT"
    },
    {
      id: 2,
      title: "Bracelet Cuir",
      price: "45,99 €",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "HELP"
    },
    {
      id: 3,
      title: "Ceinture Élégante",
      price: "79,99 €",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "SOS"
    },
    {
      id: 4,
      title: "Portefeuille Cuir",
      price: "89,99 €",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      code: "ALERT"
    }
  ]
};

export default function ProductGrid({ gender }: ProductGridProps) {
  const displayProducts = gender ? products[gender as keyof typeof products] : products.femme;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            code={product.code}
          />
        ))}
      </div>
    </div>
  );
}