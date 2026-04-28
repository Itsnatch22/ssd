'use client';

import { motion } from 'framer-motion';

export function TableSkeleton() {
  return (
    <div className="w-full space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-16 w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl"
        />
      ))}
    </div>
  );
}
