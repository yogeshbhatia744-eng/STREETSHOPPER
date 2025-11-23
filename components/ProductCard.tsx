import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark border border-primary/20 dark:border-primary/10 shadow-sm min-w-60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div 
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl flex flex-col" 
        aria-label={product.name}
        style={{ backgroundImage: `url("${product.imageUrl}")` }}
      ></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="font-medium leading-normal text-base text-text-dark dark:text-text-light">{product.name}</p>
          <p className="text-sm font-normal leading-normal text-text-dark/70 dark:text-text-light/70">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button 
          onClick={() => onAddToCart(product)}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-action-primary/10 text-action-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-action-primary/20 active:scale-95 transition-all"
        >
          <span className="truncate">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;