import React from 'react';
import { Shop } from '../types';

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  return (
    <div className="flex flex-col rounded-xl bg-background-light dark:bg-background-dark border border-primary/20 dark:border-primary/10 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div 
        className="w-full h-40 bg-center bg-no-repeat bg-cover" 
        aria-label={shop.name}
        style={{ backgroundImage: `url("${shop.imageUrl}")` }}
      ></div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg text-text-dark dark:text-text-light">{shop.name}</h3>
        <p className="text-sm text-action-secondary">{shop.category}</p>
        <div className="flex items-center gap-2 text-sm text-text-dark/70 dark:text-text-light/70">
          <span className="material-symbols-outlined text-base">location_on</span>
          <span>{shop.distance} miles away</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-500 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="font-bold text-text-dark dark:text-text-light">{shop.rating}</span>
          <span className="text-xs text-text-dark/70 dark:text-text-light/70">({shop.reviewCount} reviews)</span>
        </div>
        <p className={`text-sm font-medium ${shop.isOpen ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {shop.isOpen ? 'Open Now' : 'Closed'}
        </p>
      </div>
    </div>
  );
};

export default ShopCard;