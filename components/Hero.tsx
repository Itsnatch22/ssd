'use client';

import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            <Sparkles size={14} />
            Smarter storage shopping
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-text-primary md:text-5xl lg:text-7xl"
          >
            Find the right drive at the right price.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-8 text-text-secondary"
          >
            Compare SSDs, NVMe drives, and HDDs by capacity, interface, performance, and value before you buy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/deals"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover"
            >
              Explore Deals
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-accent/40 hover:text-accent"
            >
              Compare Drives
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 rounded-2xl border border-border bg-surface/80 p-3 shadow-soft backdrop-blur"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <Search size={18} className="text-text-secondary" />
              <input
                aria-label="Search SSDs, brands, capacities"
                type="text"
                defaultValue="Samsung 990 Pro"
                className="w-full border-0 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
                placeholder="Search SSDs, NVMe, HDDs, brands..."
              />
              <Link
                href="/deals"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white"
              >
                Search
              </Link>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-accent" /> Transparent affiliate links</div>
            <div className="flex items-center gap-2"><Zap size={16} className="text-accent" /> Real-time deal comparisons</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-teal-300/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-border bg-surface p-5 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-elevated p-4">
                <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-text-secondary">
                  <span>NVMe</span>
                  <span className="rounded-full bg-accent-soft px-2 py-1 text-accent">Fastest</span>
                </div>
                <div className="mb-4 flex h-32 items-end justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-3 text-white">
                  <div className="flex items-end gap-2">
                    <div className="h-12 w-4 rounded-t-xl bg-white/80" />
                    <div className="h-20 w-4 rounded-t-xl bg-white" />
                    <div className="h-16 w-4 rounded-t-xl bg-white/70" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-text-primary">Samsung 990 Pro</div>
                  <div className="mt-1 text-sm text-text-secondary">1TB · PCIe 4.0</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-surface-elevated p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-text-secondary">SATA</div>
                  <div className="mt-4 flex items-end justify-between">
                    <div className="flex h-20 items-end gap-2">
                      <div className="h-10 w-4 rounded-t-xl bg-accent/80" />
                      <div className="h-14 w-4 rounded-t-xl bg-accent" />
                      <div className="h-16 w-4 rounded-t-xl bg-accent/90" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-text-primary">2TB</div>
                      <div className="text-xs text-text-secondary">Value pick</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface-elevated p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-text-secondary">HDD</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex h-16 items-end gap-2">
                      <div className="h-8 w-3 rounded-t-md bg-slate-500" />
                      <div className="h-12 w-3 rounded-t-md bg-slate-400" />
                      <div className="h-16 w-3 rounded-t-md bg-slate-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-text-primary">8TB</div>
                      <div className="text-xs text-text-secondary">Bulk storage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-text-secondary">
              <div className="rounded-xl border border-border bg-background px-3 py-2">
                <div className="font-heading text-lg font-black text-text-primary">1TB</div>
                <div>Budget</div>
              </div>
              <div className="rounded-xl border border-border bg-background px-3 py-2">
                <div className="font-heading text-lg font-black text-text-primary">2TB</div>
                <div>Balanced</div>
              </div>
              <div className="rounded-xl border border-border bg-background px-3 py-2">
                <div className="font-heading text-lg font-black text-text-primary">4TB</div>
                <div>Creator</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
