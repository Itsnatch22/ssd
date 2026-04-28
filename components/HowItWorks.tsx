'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Browse Products",
    description: "Search through our extensive database of storage devices from SSDs to high-capacity HDDs.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Compare Value",
    description: "Use our unique Price per TB metric to identify the best value for your budget.",
    color: "bg-accent-hover/10 text-accent-hover"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Buy & Save",
    description: "Click the affiliate links to purchase directly from trusted retailers at the lowest price.",
    color: "bg-background/20 text-text-primary"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            How it <span className="text-accent">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            Finding the right storage shouldn&apos;t be complicated. We simplify the process into three easy steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center p-8 bg-surface rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className={`mb-6 p-4 rounded-2xl ${step.color} group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 translate-y-[-50%] z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
