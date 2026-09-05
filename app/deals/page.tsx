'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { DealCard } from '@/components/DealCard';
import type { Product } from '@/types/product';

const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Capacity: High to Low', value: 'capacity-desc' },
  { label: 'Best Value', value: 'value' },
];

export default function DealsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [brand, setBrand] = useState(searchParams.get('brand') ?? 'all');
  const [type, setType] = useState(searchParams.get('type') ?? 'all');
  const [sort, setSort] = useState('recommended');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          setProducts([]);
          return;
        }
        const payload = await response.json();
        setProducts(Array.isArray(payload.products) ? payload.products : []);
      } catch (error) {
        console.error('Failed to fetch products for deals page:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const brands = useMemo(
    () => ['all', ...new Set(products.map((product) => product.brand).filter(Boolean))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const nextProducts = products.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.brand.toLowerCase().includes(normalizedQuery) ||
        product.technology.toLowerCase().includes(normalizedQuery) ||
        String(product.capacity_gb).includes(normalizedQuery);

      const matchesBrand = brand === 'all' || product.brand === brand;
      const matchesType =
        type === 'all' ||
        (type === 'nvme' && /nvme|pcie/i.test(product.technology)) ||
        (type === 'ssd' && /sata|ssd|m\.2/i.test(product.technology)) ||
        (type === 'hdd' && /hdd|sas/i.test(product.technology)) ||
        (type === 'external' && /usb|external/i.test(product.technology));

      return matchesQuery && matchesBrand && matchesType;
    });

    switch (sort) {
      case 'price-asc':
        return [...nextProducts].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...nextProducts].sort((a, b) => b.price - a.price);
      case 'capacity-desc':
        return [...nextProducts].sort((a, b) => b.capacity_gb - a.capacity_gb);
      case 'value':
        return [...nextProducts].sort((a, b) => a.price / a.capacity_gb - b.price / b.capacity_gb);
      default:
        return [...nextProducts].sort((a, b) => Number(b.featured) - Number(a.featured) || a.price - b.price);
    }
  }, [brand, products, query, sort, type]);

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <div className="mb-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Storage deals</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Compare today&apos;s available offers.</h1>
          <p className="mt-3 max-w-2xl text-base text-text-secondary">Search by product, brand, or model, then narrow results by product type, capacity, and price.</p>
        </div>

        <div className="mb-8 rounded-[1.5rem] border border-border bg-surface p-4 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search product, brand, or model"
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15"
              />
            </label>

            <label className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-text-primary">
              <span className="text-text-secondary">Brand</span>
              <select value={brand} onChange={(event) => setBrand(event.target.value)} className="w-full bg-transparent text-sm outline-none">
                {brands.map((brandOption) => (
                  <option key={brandOption} value={brandOption}>{brandOption === 'all' ? 'All brands' : brandOption}</option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-text-primary">
              <span className="text-text-secondary">Type</span>
              <select value={type} onChange={(event) => setType(event.target.value)} className="w-full bg-transparent text-sm outline-none">
                <option value="all">All</option>
                <option value="nvme">NVMe</option>
                <option value="ssd">SSD</option>
                <option value="hdd">HDD</option>
                <option value="external">External</option>
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-text-primary">
              <SlidersHorizontal size={16} className="text-text-secondary" />
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent text-sm outline-none">
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-[22rem] animate-pulse rounded-[1.75rem] border border-border bg-surface" />
            ))}
          </div>
        ) : filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <DealCard key={product.id} device={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-border bg-surface px-8 py-16 text-center">
            <p className="text-xl font-semibold text-text-primary">No drives found for that search.</p>
            <p className="mt-2 text-text-secondary">Try removing a filter or searching for a different brand or model.</p>
          </div>
        )}
      </div>
    </main>
  );
}
