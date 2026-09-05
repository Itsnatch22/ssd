'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Product } from '@/types/product';

function formatCapacity(capacityGb: number) {
  if (!Number.isFinite(capacityGb) || capacityGb <= 0) return 'Storage';
  return capacityGb >= 1000 ? `${(capacityGb / 1000).toFixed(capacityGb % 1000 === 0 ? 0 : 1)}TB` : `${capacityGb}GB`;
}

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value || 0);
}

export function DealCard({ device, index }: { device: Product; index: number }) {
  const pricePerGb = device.price && device.capacity_gb ? device.price / device.capacity_gb : 0;
  const badge = device.featured ? 'Featured' : 'Best value';

  const handleTrackClick = async () => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: device.id, source: 'dealcard' }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative overflow-hidden border-b border-border bg-surface-elevated">
        <div className="relative h-52 w-full">
          <Image
            src={device.image_url}
            alt={device.image_alt || device.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">
          <span>{device.brand}</span>
          <span>{device.form_factor}</span>
        </div>

        <Link href={`/products/${device.slug}`} className="group-hover:text-accent">
          <h3 className="min-h-[3.5rem] text-xl font-black tracking-[-0.04em] text-text-primary">{device.name}</h3>
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
          <span>{formatCapacity(device.capacity_gb)}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{device.technology}</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <p className="text-2xl font-black text-text-primary font-heading">{formatPrice(device.price)}</p>
            <p className="mt-1 text-xs text-text-secondary">
              {pricePerGb > 0 ? `${(pricePerGb * 1000).toFixed(2)}/TB` : 'Price available'}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-2 text-xs font-semibold text-text-primary">
            <ShieldCheck size={14} className="text-accent" />
            Verified
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={`${device.amazon_url}${device.amazon_url.includes('?') ? '&' : '?'}tag=${process.env.NEXT_PUBLIC_AFFILIATE_TAG || 'aff-20'}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTrackClick}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            View Deal
            <ArrowUpRight size={16} />
          </a>

          <Link
            href={`/products/${device.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-3 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-accent/40 hover:text-accent"
            aria-label={`View specifications for ${device.name}`}
          >
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}