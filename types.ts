export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface FeaturedProduct extends Product {
  badge: string;
  badgeColor: string; // Tailwind color class suffix, e.g., 'green-700'
  bgColor: string; // Tailwind color class suffix, e.g., 'green-900'
}
