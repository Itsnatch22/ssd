'use client';

import { useEffect, useRef } from 'react';
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
  const stats = [
    { value: 500, label: "Products", suffix: "+" },
    { value: 12, label: "Top Brands", suffix: "" },
    { value: 24, label: "Hours Updated", suffix: "h" },
    { value: 1000, label: "Daily Users", suffix: "+" },
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
