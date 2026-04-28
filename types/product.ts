export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  capacity_gb: number;
  form_factor: string;
  technology: string;
  condition: string;
  brand: string;
  warranty: string;
  amazon_url: string;
  affiliate_tag: string;
  featured: boolean;
  image_url: string;
  image_alt: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

export type SortKey = 'price' | 'capacity_gb' | 'price_per_tb' | 'brand';
export type SortOrder = 'asc' | 'desc';
