'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function Counter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString() + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 text-center">
      <motion.div className="mb-2 text-4xl font-black text-accent md:text-5xl font-heading">
        <motion.span>{display}</motion.span>
      </motion.div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">{label}</div>
    </div>
  );
}

export function StatsBar() {
  const [productCount, setProductCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const products = Array.isArray(data?.products) ? data.products : [];
        setProductCount(products.length);
        setBrandCount(new Set(products.map((product: { brand?: string }) => product.brand).filter(Boolean)).size);
      } catch (error) {
        console.error('Failed to fetch product stats:', error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    { value: productCount || 59, label: 'Products tracked', suffix: '+' },
    { value: brandCount || 10, label: 'Brands', suffix: '' },
    { value: 4, label: 'Core types', suffix: '' },
    { value: 1, label: 'Live price feed', suffix: '' },
  ];

  return (
    <section className="border-y border-border bg-surface/80">
      <div className="mx-auto max-w-7xl px-4 py-2 md:px-6">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-border bg-background/80">
              <Counter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
