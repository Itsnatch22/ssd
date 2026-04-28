"use client"
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-4 rounded-2xl mb-8 animate-pulse">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
          <div className="space-y-4">
            <div className="h-12 bg-surface rounded-2xl animate-pulse mx-auto w-64" />
            <div className="h-6 bg-surface/50 rounded-xl animate-pulse mx-auto w-48" />
          </div>
        </div>
      </div>
    </main>
  );
}

