'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent-hover/20 blur-[100px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Find the Best <br />
            <span className="text-accent">SSD Deals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl"
          >
            Compare prices on SSDs, HDDs, and NVMe drives from top brands. Updated daily with the latest affiliate deals and price drops.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#deals"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-hover transition-all hover:scale-105"
            >
              Browse Deals
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/50 backdrop-blur-sm px-8 text-sm font-semibold text-text-primary hover:bg-surface transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
