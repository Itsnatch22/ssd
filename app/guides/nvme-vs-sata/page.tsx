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
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">NVMe vs SATA: what changes in real use?</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
            <p>NVMe drives connect through PCIe lanes and deliver substantially higher throughput than SATA SSDs, which makes them the preferred choice for demanding tasks.</p>
            <p>SATA SSDs remain excellent value for general computing, gaming, and system upgrades where performance needs are moderate and cost matters more.</p>
            <p>If you are upgrading an older machine, a SATA SSD can still be a smart move. If you want the absolute fastest boot and file transfer speeds, NVMe is the better fit.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
