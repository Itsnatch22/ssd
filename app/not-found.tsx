import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pb-24 pt-32">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="rounded-[2rem] border border-border bg-surface p-10 shadow-soft">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-accent-soft text-accent">
              <SearchX size={42} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">That drive couldn&apos;t be found.</h1>
            <p className="mt-4 text-base leading-7 text-text-secondary">Looks like this product has left the building or the page has moved.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/deals" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
                <ArrowLeft size={16} /> Back to deals
              </Link>
              <Link href="/" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-text-primary hover:border-accent/40 hover:text-accent">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

