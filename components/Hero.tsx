import React, { useState } from 'react';
import { SearchType } from '../types';

interface HeroProps {
  onSearch: (term: string, type: SearchType) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<SearchType>(SearchType.PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm, activeTab);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="@container mb-8">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 transition-all" 
          data-alt="A vibrant overhead view of a bustling city market with colorful stalls and people shopping" 
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxOT9ilHSyeQLKMCydcFPnJzc49MnhQAa-RqVdPrjqhoHciQo7Py9X4nYn5tX2Ax5WwFzFo-nr0TRgrdv8RaDrKXID4tRzZWB1YxZ3kEW5I_jNX_CHu5qdfSvQZNti6Bt1uDSzEbJyYMT_DQ8a_3GK3ii3VakYtK3pyl6ERqoEneoiYaY__PQqWxstfLgilUmD6k34_vnPuaOq92w-rJQMAlduoxEOMvi6-SqWk9ZTYl60eUXD1IqA7CDWAFHm3RG90XGCQscaNnxO")' }}
        >
          <div className="flex flex-col gap-2 text-center animate-fade-in-up">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Shop Online, Discover Local
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-xl mx-auto">
              Your Community Marketplace. Find everything you need from local stores and online vendors, right at your fingertips.
            </h2>
          </div>
          
          <div className="flex flex-col gap-3 w-full max-w-2xl">
            <div className="flex px-4">
              <div className="flex h-10 w-full items-center justify-center rounded-lg bg-black/20 p-1 max-w-md mx-auto backdrop-blur-sm">
                <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all duration-200 ${activeTab === SearchType.PRODUCTS ? 'bg-background-light/90 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-text-dark' : 'text-white hover:bg-white/10'}`}>
                  <span className="truncate">Search Products</span>
                  <input 
                    type="radio" 
                    name="search-type" 
                    className="invisible w-0" 
                    checked={activeTab === SearchType.PRODUCTS}
                    onChange={() => setActiveTab(SearchType.PRODUCTS)}
                  />
                </label>
                <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all duration-200 ${activeTab === SearchType.LOCAL_SHOPS ? 'bg-background-light/90 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-text-dark' : 'text-white hover:bg-white/10'}`}>
                  <span className="truncate">Search Local Shops</span>
                  <input 
                    type="radio" 
                    name="search-type" 
                    className="invisible w-0" 
                    checked={activeTab === SearchType.LOCAL_SHOPS}
                    onChange={() => setActiveTab(SearchType.LOCAL_SHOPS)}
                  />
                </label>
              </div>
            </div>

            <label className="flex flex-col min-w-40 h-14 w-full @[480px]:h-16 group">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-lg transition-transform group-focus-within:scale-[1.01]">
                <div className="text-text-dark/70 flex border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/80 items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-text-dark dark:text-text-light focus:outline-0 focus:ring-0 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/80 focus:border-action-primary h-full placeholder:text-text-dark/50 dark:placeholder:text-text-light/50 border-r-0 border-l-0 px-4 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal" 
                  placeholder={activeTab === SearchType.PRODUCTS ? "Search for laptops, shoes..." : "Search for cafes, boutiques..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/80 pr-[7px]">
                  <button 
                    onClick={handleSearch}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-action-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-action-primary/90 transition-colors"
                  >
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;