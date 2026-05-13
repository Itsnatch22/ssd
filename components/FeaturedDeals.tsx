'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '@/lib/service/products';
import { DealCard } from './DealCard';
import { Tag, Search } from 'lucide-react';

export function FeaturedDeals() {
  const [devices, setDevices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts({ 
          featuredOnly: true, 
          search: searchTerm || undefined,
          limit: 6 
        });
        setDevices(products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  if (loading) {
    return (
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!devices.length) {
    return (
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-accent/10 text-accent p-2 rounded-xl">
              <Tag size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight">
                Featured <span className="text-accent">Deals</span>
              </h2>
              <p className="text-text-secondary">Hand-picked storage values for you.</p>
            </div>
          </div>
          <div className="text-center py-12">
            <p className="text-text-secondary">No featured deals found matching your search.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-accent/10 text-accent p-2 rounded-xl">
            <Tag size={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold tracking-tight">
              Featured <span className="text-accent">Deals</span>
            </h2>
            <p className="text-text-secondary">Hand-picked storage values for you.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search by brand, name, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        {/* Single row (horizontal scroll on small screens) */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-6">
            {devices.slice(0, 6).map((device, i) => (
              <div key={device.id} className="w-[320px] shrink-0">
                <DealCard device={device} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
