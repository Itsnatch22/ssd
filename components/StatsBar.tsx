'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

function Counter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="text-center p-6 flex flex-col items-center">
      <motion.div className="text-4xl md:text-5xl font-heading font-extrabold text-accent mb-2">
        <motion.span>{display}</motion.span>
      </motion.div>
      <div className="text-text-secondary font-medium uppercase tracking-wider text-xs">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const [dailyUsers, setDailyUsers] = useState(1000); // Fallback value
  const [productCount, setProductCount] = useState(500); // Fallback value

  useEffect(() => {
    const fetchDailyUsers = async () => {
      try {
        const response = await fetch('/api/analytics/daily-users');
        if (response.ok) {
          const data = await response.json();
          setDailyUsers(data.dailyUsers);
        }
      } catch (error) {
        console.error('Failed to fetch daily users:', error);
        // Keep fallback value on error
      }
    };

    const fetchProductCount = async () => {
      try {
        const response = await fetch('/api/analytics/product-count');
        if (response.ok) {
          const data = await response.json();
          setProductCount(data.productCount);
        }
      } catch (error) {
        console.error('Failed to fetch product count:', error);
        // Keep fallback value on error
      }
    };

    // Fetch both metrics
    fetchDailyUsers();
    fetchProductCount();
    
    // Refresh every hour
    const interval = setInterval(() => {
      fetchDailyUsers();
      fetchProductCount();
    }, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: productCount, label: "Products", suffix: "+" },
    { value: 12, label: "Top Brands", suffix: "" },
    { value: 24, label: "Hours Updated", suffix: "h" },
    { value: dailyUsers, label: "Daily Users", suffix: "+" },
  ];

  return (
    <section className="bg-surface border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
