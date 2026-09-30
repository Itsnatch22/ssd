import { DealsBrowser } from '@/components/DealsBrowser';
import { getProducts } from '@/lib/service/products';
import type { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const params = await searchParams;
  const hasFilters = Object.values(params).some((value) => value !== undefined && value !== '');

  return {
    title: 'Storage Deals | SSDEXPERTZONE',
    description: 'Compare SSD, HDD, and NVMe storage products by price, capacity, technology, and value.',
    ...(hasFilters ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function DealsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <DealsBrowser initialProducts={products} />
      </div>
    </main>
  );
}
