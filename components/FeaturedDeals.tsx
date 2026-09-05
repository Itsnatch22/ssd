'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, Tag } from 'lucide-react';
import { getProducts } from '@/lib/service/products';
import { DealCard } from './DealCard';

export function FeaturedDeals() {
  const [devices, setDevices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await getProducts({ featuredOnly: true, search: searchTerm || undefined, limit: 6 });
        if (active) setDevices(products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        if (active) setDevices([]);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      active = false;
    };
  }, [searchTerm]);

  const heading = useMemo(() => {
    if (!devices.length && !searchTerm) return 'Featured deals';
    if (!devices.length) return 'No matching deals';
    return 'Featured deals';
  }, [devices, searchTerm]);

  return (
    <section className="py-20 md:py-24" id="deals">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Tag size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Curated picks</p>
              <h2 className="mt-1 text-3xl font-black tracking-[-0.04em] text-text-primary md:text-4xl">{heading}</h2>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input
              aria-label="Search featured deals"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by brand, model, or technology"
              className="w-full rounded-full border border-border bg-surface px-12 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-[22rem] animate-pulse rounded-[1.75rem] border border-border bg-surface" />
            ))}
          </div>
        ) : devices.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {devices.map((device, index) => (
              <DealCard key={device.id} device={device} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-border bg-surface px-8 py-16 text-center">
            <p className="text-lg font-medium text-text-primary">No drives match that search.</p>
            <p className="mt-2 text-text-secondary">Try a different brand, capacity, or technology.</p>
          </div>
        )}
      </div>
    </section>
  );
}
