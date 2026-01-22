import React from 'react';
import { Product, FeaturedProduct } from '../types';

interface FeaturedProductCardProps {
  product: FeaturedProduct;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  return (
    <div className={`${product.bgColor} text-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row h-64`}>
      <div className="w-1/3 h-full relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col justify-center space-y-2">
        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
        <p className="text-green-100 text-base">{product.description}</p>
        <div className="pt-2">
          <span className={`${product.badgeColor} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
            {product.badge}
          </span>
        </div>
      </div>
    </div>
  );
};

interface StandardProductCardProps {
  product: Product;
}

export const StandardProductCard: React.FC<StandardProductCardProps> = ({ product }) => {
  return (
    <div className="product-card shadow-sm border-gray-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-img" 
      />
      <h3 className="font-bold text-lg text-green-800">{product.name}</h3>
      <p className="text-sm text-gray-600 leading-snug">{product.description}</p>
    </div>
  );
};
