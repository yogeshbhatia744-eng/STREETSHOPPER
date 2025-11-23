export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Shop {
  id: string;
  name: string;
  category: string;
  distance: number;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  imageUrl: string;
}

export enum SearchType {
  PRODUCTS = "Search Products",
  LOCAL_SHOPS = "Search Local Shops"
}