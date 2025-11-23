import React from 'react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 dark:border-primary/10 px-6 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-xl mb-8">
      <div className="flex items-center gap-4 text-text-dark dark:text-text-light">
        <div className="text-primary size-7">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Marketplace</h2>
      </div>
      <div className="hidden lg:flex flex-1 justify-center gap-8">
        <div className="flex items-center gap-9">
          <a className="text-sm font-medium leading-normal hover:text-action-primary dark:hover:text-action-primary transition-colors" href="#">Shop Products</a>
          <a className="text-sm font-medium leading-normal hover:text-action-secondary dark:hover:text-action-secondary transition-colors" href="#">Discover Stores</a>
          <a className="text-sm font-medium leading-normal hover:text-action-primary dark:hover:text-action-primary transition-colors" href="#">Categories</a>
          <a className="text-sm font-medium leading-normal hover:text-action-primary dark:hover:text-action-primary transition-colors" href="#">Today's Deals</a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary/20 dark:bg-primary/10 text-text-dark dark:text-text-light gap-2 text-sm font-medium leading-normal tracking-[0.015em] px-3 hover:bg-primary/30 dark:hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-action-secondary">location_on</span>
          <span className="truncate hidden md:inline">New York, NY</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/10 text-text-dark dark:text-text-light text-sm font-medium leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/20 transition-colors">
          <span className="truncate">Log In</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-action-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-action-primary/90 transition-colors">
          <span className="truncate">Sign Up</span>
        </button>
        <button className="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary/20 dark:bg-primary/10 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-primary/30 dark:hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
          {cartCount > 0 && (
             <span className="absolute top-1 right-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-action-secondary"></span>
          )}
        </button>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" 
          aria-label="User profile picture" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwo4_BPQlHEyZgOJE9w3M1J4hvjBIIoWQccY7Yv2U2SpuZ6cZDb7O3UfKl-XKu5d0rhP6wiKxCz9fKalUB7USlCNHOBAAWrEJDDGfrdA1rIMYUwukf6YkrkYJNl8Bcplv3WHOCqbeLwQsm-nW8Al3rARA8Oe8WxKh_T5U15FV_t-Sb2dBw0RSS8nv9_JePDmUIV69rmVxbrEGDwKC57qvEqEhnm-Jy4iWCNihiHBKHwBjZ8_d3J1TNL-VZSIjVHvKSisu38NZ15XDc")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;