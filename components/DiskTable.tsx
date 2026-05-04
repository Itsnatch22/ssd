'use client';

import { useState, useEffect, useMemo } from 'react';
import { Product } from '@/types/product';
import { SortKey, SortOrder } from '@/types/product';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowUpDown, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
} from 'lucide-react';
import { TableSkeleton } from './SkeletonLoader';

const ITEMS_PER_PAGE = 20;

export function DiskTable() {
  const [devices, setDevices] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [formFactor, setFormFactor] = useState('All');
  const [technology, setTechnology] = useState('All');
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 32000]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const [sortKey, setSortKey] = useState<SortKey>('price');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setDevices(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, formFactor, technology, capacityRange, priceRange]);

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch = 
        device.name.toLowerCase().includes(search.toLowerCase()) ||
        device.brand.toLowerCase().includes(search.toLowerCase());
      
      const matchesFormFactor = formFactor === 'All' || device.form_factor === formFactor;
      const matchesTechnology = technology === 'All' || device.technology === technology;
      
      const matchesCapacity = 
        device.capacity_gb >= capacityRange[0] && 
        device.capacity_gb <= capacityRange[1];
      
      const matchesPrice = 
        device.price >= priceRange[0] && 
        device.price <= priceRange[1];

      return matchesSearch && matchesFormFactor && matchesTechnology && matchesCapacity && matchesPrice;
    });
  }, [devices, search, formFactor, technology, capacityRange, priceRange]);

  const sortedDevices = useMemo(() => {
    return [...filteredDevices].sort((a, b) => {
      let aVal: number | string, bVal: number | string;
      
      if (sortKey === 'price_per_tb') {
        aVal = (a.price / a.capacity_gb) * 1000;
        bVal = (b.price / b.capacity_gb) * 1000;
      } else {
        aVal = a[sortKey as keyof typeof a] as number | string;
        bVal = b[sortKey as keyof typeof b] as number | string;
      }

      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }, [filteredDevices, sortKey, sortOrder]);

  const paginatedDevices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedDevices.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedDevices, currentPage]);

  const totalPages = Math.ceil(sortedDevices.length / ITEMS_PER_PAGE);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const uniqueValues = (key: keyof Product) => {
    const values = devices.map(d => d[key]);
    return ['All', ...Array.from(new Set(values))].map(String);
  };

  const getRedirectUrl = (productId: string) => `/api/redirect?id=${productId}`;

  const trackBuyClick = async (productId: string) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          source: 'disktable',
        }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  if (loading) return <div id="deals" className="container mx-auto px-4 py-20"><TableSkeleton /></div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <section id="deals" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold mb-6">Compare <span className="text-accent">Storage</span></h2>
          
          {/* Filters Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-surface/50 p-6 rounded-3xl border border-border">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="text"
                placeholder="Search models, brands..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Selects */}
            <div className="flex gap-4">
              <select
                className="flex-1 px-3 py-2 rounded-xl bg-background border border-border text-sm"
                value={formFactor}
                onChange={(e) => setFormFactor(e.target.value)}
              >
                {uniqueValues('form_factor').map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <select
                className="flex-1 px-3 py-2 rounded-xl bg-background border border-border text-sm"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
              >
                {uniqueValues('technology').map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            {/* Ranges */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Min Capacity (GB)</label>
              <input
                type="range"
                min="0"
                max="16000"
                step="1000"
                className="w-full accent-accent"
                value={capacityRange[0]}
                onChange={(e) => setCapacityRange([parseInt(e.target.value), capacityRange[1]])}
              />
              <div className="flex justify-between text-[10px] text-text-secondary">
                <span>{capacityRange[0]}GB</span>
                <span>{capacityRange[1]}GB</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Max Price ($)</label>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                className="w-full accent-accent"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
              <div className="flex justify-between text-[10px] text-text-secondary">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-border shadow-sm">
          <table className="w-full text-left border-collapse bg-surface">
            <thead>
              <tr className="bg-surface/50 border-b border-border">
                <th className="p-4 font-heading font-bold text-sm">Product Name</th>
                <th className="p-4 font-heading font-bold text-sm cursor-pointer hover:text-accent transition-colors" onClick={() => handleSort('brand')}>
                  <div className="flex items-center gap-1">Brand <ArrowUpDown size={14} /></div>
                </th>
                <th className="p-4 font-heading font-bold text-sm cursor-pointer hover:text-accent transition-colors" onClick={() => handleSort('capacity_gb')}>
                  <div className="flex items-center gap-1">Capacity <ArrowUpDown size={14} /></div>
                </th>
                <th className="p-4 font-heading font-bold text-sm cursor-pointer hover:text-accent transition-colors" onClick={() => handleSort('price')}>
                  <div className="flex items-center gap-1">Price <ArrowUpDown size={14} /></div>
                </th>
                <th className="p-4 font-heading font-bold text-sm cursor-pointer hover:text-accent transition-colors" onClick={() => handleSort('price_per_tb')}>
                  <div className="flex items-center gap-1">$/TB <ArrowUpDown size={14} /></div>
                </th>
                <th className="p-4 font-heading font-bold text-sm">Tech</th>
                <th className="p-4 font-heading font-bold text-sm text-center">Buy</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {paginatedDevices.map((device) => {
                  const pPerTb = (device.price / device.capacity_gb) * 1000;
                  return (
                    <motion.tr
                      key={device.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-border hover:bg-surface/50 transition-colors group"
                    >
                      <td className="p-4 min-w-50">
                        <div className="font-bold text-text-primary line-clamp-1">{device.name}</div>
                        <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">{device.form_factor}</div>
                      </td>
                      <td className="p-4 text-sm text-text-secondary">{device.brand}</td>
                      <td className="p-4 text-sm font-bold">
                        {device.capacity_gb >= 1000 ? `${device.capacity_gb / 1000}TB` : `${device.capacity_gb}GB`}
                      </td>
                      <td className="p-4 text-sm font-black text-text-primary">${device.price.toFixed(2)}</td>
                      <td className="p-4">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-accent/10 text-accent">
                          ${pPerTb.toFixed(2)}
                        </span>
                      </td>
                      <td className="p-4 text-xs font-medium text-text-secondary">{device.technology}</td>
                      <td className="p-4 text-center">
                        <a
                          href={getRedirectUrl(device.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all hover:scale-110"
                          onClick={() => trackBuyClick(device.id)}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
          
          {paginatedDevices.length === 0 && (
            <div className="py-20 text-center">
              <div className="bg-surface w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-text-secondary">
                <Search size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">No results found</h3>
              <p className="text-text-secondary">Try adjusting your filters to find what you&apos;re looking for.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 rounded-xl border border-border disabled:opacity-30 transition-colors hover:bg-surface"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 rounded-xl border border-border disabled:opacity-30 transition-colors hover:bg-surface"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}