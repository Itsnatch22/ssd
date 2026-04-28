import { Product } from '@/types/product';

import { supabase } from './supabaseClient';

type SsdProductRow = {
  id: string;
  name: string;
  brand: string;
  price: number | string;
  capacity_gb: number | string;
  technology: string;
  condition: string;
  warranty: string | null;
  amazon_url: string;
  affiliate_tag: string;
  featured: boolean | null;
  created_at: string | null;
};

const PRODUCT_COLUMNS = [
  'id',
  'name',
  'brand',
  'price',
  'capacity_gb',
  'technology',
  'condition',
  'warranty',
  'amazon_url',
  'affiliate_tag',
  'featured',
  'created_at',
].join(', ');

const FALLBACK_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400&h=400';

export async function getProducts(options?: { featuredOnly?: boolean }): Promise<Product[]> {
  let query = supabase
    .from('ssd_products')
    .select(PRODUCT_COLUMNS)
    .order('created_at', { ascending: false });

  if (options?.featuredOnly) {
    query = query.eq('featured', true);
  }

  const { data, error } = await query.returns<SsdProductRow[]>();

  if (error) {
    throw new Error(`Supabase query failed: ${error.message}`);
  }

  return data?.map(mapProductRow) ?? [];
}

function mapProductRow(row: SsdProductRow): Product {
  const price = Number(row.price);
  const capacityGb = Number(row.capacity_gb);
  const technology = row.technology.trim();
  const name = row.name.trim();
  const brand = row.brand.trim();
  const formFactor = inferFormFactor(technology);

  return {
    id: row.id,
    slug: slugify(name),
    name,
    description: `${brand} ${formatCapacity(capacityGb)} ${technology} SSD`,
    price: Number.isFinite(price) ? price : 0,
    capacity_gb: Number.isFinite(capacityGb) ? capacityGb : 0,
    form_factor: formFactor,
    technology,
    condition: row.condition.trim(),
    brand,
    warranty: row.warranty?.trim() || 'Warranty not specified',
    amazon_url: row.amazon_url.trim(),
    affiliate_tag: row.affiliate_tag.trim(),
    featured: Boolean(row.featured),
    image_url: FALLBACK_PRODUCT_IMAGE,
    image_alt: `${brand} ${name}`,
  };
}

function inferFormFactor(technology: string): string {
  const normalizedTechnology = technology.toUpperCase();

  if (
    normalizedTechnology.includes('NVME') ||
    normalizedTechnology.includes('PCIe'.toUpperCase()) ||
    normalizedTechnology.includes('M.2')
  ) {
    return 'M.2';
  }

  if (normalizedTechnology.includes('SATA') || normalizedTechnology.includes('SAS')) {
    return '2.5"';
  }

  return 'SSD';
}

function formatCapacity(capacityGb: number): string {
  if (!Number.isFinite(capacityGb) || capacityGb <= 0) {
    return 'SSD';
  }

  if (capacityGb >= 1000) {
    return `${capacityGb / 1000}TB`;
  }

  return `${capacityGb}GB`;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
