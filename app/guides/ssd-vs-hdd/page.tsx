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
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">SSD vs HDD: which should you buy?</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
            <p>SSDs win on speed and responsiveness, making them the better choice for the operating system, applications, and everyday multitasking.</p>
            <p>HDDs still make sense when raw capacity matters more than speed, especially for backup drives, media libraries, and archive storage.</p>
            <p>For most modern laptops and desktops, a smaller SSD paired with a larger HDD is a balanced setup. If you are shopping for a single drive, an SSD typically gives the best overall experience.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
