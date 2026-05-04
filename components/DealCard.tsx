'use client';

import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export function DealCard({ device, index }: { device: Product; index: number }) {
  const imageUrl = device.image_url;
  
  const pricePerTb = (device.price / device.capacity_gb) * 1000;

  const trackBuyClick = async () => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: device.id,
          source: 'dealcard',
        }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={device.image_alt || device.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Featured
          </span>
          <span className="bg-background/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {device.form_factor}
          </span>
        </div>
      </div>

      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-heading font-bold mb-2 line-clamp-2 min-h-14">{device.name}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-text-secondary">{device.brand}</span>
          <div className="h-1 w-1 rounded-full bg-border" />
          <span className="text-sm font-bold text-accent">{device.capacity_gb >= 1000 ? `${device.capacity_gb / 1000}TB` : `${device.capacity_gb}GB`}</span>
        </div>

        <div className="mt-auto pt-4 border-t border-border flex items-end justify-between">
          <div>
            <div className="text-2xl font-heading font-black text-text-primary">
              ${device.price.toFixed(2)}
            </div>
            <div className="text-[10px] text-text-secondary font-bold uppercase tracking-tighter">
              ${pricePerTb.toFixed(2)} / TB
            </div>
          </div>
          <a
            href={`${device.amazon_url}?tag=${process.env.NEXT_PUBLIC_AFFILIATE_TAG || 'aff-20'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-text-primary hover:bg-accent hover:text-white transition-colors"
            onClick={trackBuyClick}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
