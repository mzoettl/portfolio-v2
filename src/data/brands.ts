export interface Brand {
  name: string;
  logo: string; // path to SVG or PNG in /public/brands/
  url?: string;
}

// Add your client/brand logos to /public/brands/
// Use SVG where possible for crisp rendering at any size
export const brands: Brand[] = [
  { name: 'Brand 1', logo: '/brands/brand1.svg' },
  { name: 'Brand 2', logo: '/brands/brand2.svg' },
  { name: 'Brand 3', logo: '/brands/brand3.svg' },
  { name: 'Brand 4', logo: '/brands/brand4.svg' },
  { name: 'Brand 5', logo: '/brands/brand5.svg' },
  { name: 'Brand 6', logo: '/brands/brand6.svg' },
];
