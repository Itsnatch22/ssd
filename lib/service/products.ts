import 'server-only';

import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { Product } from '@/types/product';

type SanityProductRow = {
  _id: string;
  sourceId?: string | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
  brand?: string | null;
  price?: number | null;
  capacityGb?: number | null;
  formFactor?: string | null;
  technology?: string | null;
  condition?: string | null;
  warranty?: string | null;
  amazonUrl?: string | null;
  affiliateTag?: string | null;
  featured?: boolean | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && ($featuredOnly == false || featured == true)]
    | order(coalesce(sourceCreatedAt, _createdAt) desc, _id asc) {
      _id,
      sourceId,
      name,
      "slug": slug.current,
      description,
      brand,
      price,
      capacityGb,
      formFactor,
      technology,
      condition,
      warranty,
      amazonUrl,
      affiliateTag,
      featured,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }
`);

const FALLBACK_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400&h=400';

export async function getProducts(options?: {
  featuredOnly?: boolean;
  search?: string;
  limit?: number;
}): Promise<Product[]> {
  const { data } = await sanityFetch({
    query: PRODUCTS_QUERY,
    params: { featuredOnly: options?.featuredOnly === true },
    perspective: 'published',
    stega: false,
  });

  let products = (data as SanityProductRow[]).map(mapProductRow);
  const search = options?.search?.trim().toLowerCase();

  if (search) {
    products = products.filter((product) =>
      [product.name, product.brand, product.technology]
        .some((value) => value.toLowerCase().includes(search))
    );
  }

  if (options?.limit && options.limit > 0) {
    products = products.slice(0, options.limit);
  }

  return products;
}

function mapProductRow(row: SanityProductRow): Product {
  const price = Number(row.price);
  const capacityGb = Number(row.capacityGb);
  const name = row.name?.trim() || '';
  const brand = row.brand?.trim() || '';
  const technology = row.technology?.trim() || '';
  const formFactor = row.formFactor?.trim() || inferFormFactor(technology);

  return {
    id: row.sourceId?.trim() || row._id,
    slug: row.slug?.trim() || slugify(name) || row._id,
    name,
    description:
      row.description?.trim() || `${brand} ${formatCapacity(capacityGb)} ${technology} SSD`,
    price: Number.isFinite(price) ? price : 0,
    capacity_gb: Number.isFinite(capacityGb) ? capacityGb : 0,
    form_factor: formFactor,
    technology,
    condition: row.condition?.trim() || '',
    brand,
    warranty: row.warranty?.trim() || 'Warranty not specified',
    amazon_url: row.amazonUrl?.trim() || '',
    affiliate_tag: row.affiliateTag?.trim() || '',
    featured: Boolean(row.featured),
    image_url: row.imageUrl?.trim() || FALLBACK_PRODUCT_IMAGE,
    image_alt: row.imageAlt?.trim() || `${brand} ${name}`,
  };
}

function inferFormFactor(technology: string): string {
  const normalizedTechnology = technology.toUpperCase();

  if (
    normalizedTechnology.includes('NVME') ||
    normalizedTechnology.includes('PCIE') ||
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
