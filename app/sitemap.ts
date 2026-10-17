import type { MetadataRoute } from 'next';
import { getProducts } from '@/lib/service/products';

const siteUrl = 'https://www.ssdexpertzone.com';

const staticRoutes = [
  '/',
  '/about',
  '/brands',
  '/compare',
  '/contact',
  '/deals',
  '/methodology',
  '/affiliate-disclosure',
  '/terms',
  '/guides',
  '/guides/nvme-vs-sata',
  '/guides/ssd-vs-hdd',
  '/guides/storage-planning',
  '/privacy',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '/' ? 'daily' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const products = await getProducts();

  return [
    ...staticEntries,
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}