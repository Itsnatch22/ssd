import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GuidePage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 md:px-6 md:pt-12">
        <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <ArrowLeft size={16} /> Back to guides
        </Link>

        <article className="mt-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">How much storage do you actually need?</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
            <p>For a gaming or general-use system, 1TB remains the sweet spot for most users, while 2TB is a better option if you keep lots of large files.</p>
            <p>Creators and editors often benefit from 2TB to 4TB because projects, media libraries, and software packages add up quickly.</p>
            <p>For backups or bulk storage, the right choice depends on your archive size and whether you need speed or capacity. Most users should choose based on real workloads instead of chasing the largest capacity available.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
