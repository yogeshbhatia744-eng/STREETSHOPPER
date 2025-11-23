import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ShopCard from './components/ShopCard';
import Footer from './components/Footer';
import { PRODUCTS, SHOPS } from './mockData';
import { Product, SearchType } from './types';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
    // In a real app, this would add to a global context or Redux store
    console.log(`Added ${product.name} to cart`);
  };

  const handleSearch = (term: string, type: SearchType) => {
    console.log(`Searching for "${term}" in ${type}`);
    // In a real app, this would filter the lists or redirect to a search page
    if (term) {
      alert(`Search feature: Looking for "${term}" in ${type}`);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-6xl px-4">
            
            <Header cartCount={cartCount} />
            
            <Hero onSearch={handleSearch} />
            
            {/* Today's Top Deals Section */}
            <section className="animate-fade-in delay-100">
              <div className="flex items-center justify-between px-4 pb-3 pt-5">
                <h2 className="text-text-dark dark:text-text-light text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Today's Top Deals
                </h2>
                <a href="#" className="text-sm font-medium text-action-primary hover:underline">View All</a>
              </div>
              <div className="flex overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 scroll-smooth snap-x snap-mandatory">
                <div className="flex items-stretch gap-4 snap-start">
                  {PRODUCTS.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart} 
                    />
                  ))}
                </div>
              </div>
            </section>
            
            {/* Local Shops Section */}
            <section className="animate-fade-in delay-200">
              <div className="flex items-center justify-between px-4 pb-3 pt-5">
                <h2 className="text-text-dark dark:text-text-light text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Explore Shops Near You
                </h2>
                <a href="#" className="text-sm font-medium text-action-secondary hover:underline">View All</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {SHOPS.map(shop => (
                  <ShopCard key={shop.id} shop={shop} />
                ))}
              </div>
            </section>
            
            <Footer />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;