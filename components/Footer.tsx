import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-primary/20 dark:border-primary/10 pt-8 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-text-dark dark:text-text-light">Marketplace</h3>
          <p className="text-sm text-text-dark/70 dark:text-text-light/70">Your one-stop shop for everything online and local.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-text-dark dark:text-text-light">Shop</h4>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">Products</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">Categories</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">Deals</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">New Arrivals</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-text-dark dark:text-text-light">Discover</h4>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-secondary transition-colors" href="#">Local Stores</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-secondary transition-colors" href="#">Restaurants</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-secondary transition-colors" href="#">Services</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-secondary transition-colors" href="#">Neighborhoods</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-text-dark dark:text-text-light">About</h4>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">About Us</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">Contact</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">FAQ</a>
          <a className="text-sm text-text-dark/80 dark:text-text-light/80 hover:text-action-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary/20 dark:border-primary/10 text-center text-sm text-text-dark/60 dark:text-text-light/60">
        <p>© 2024 Marketplace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;