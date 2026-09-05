import Link from 'next/link';
import { ArrowRight, HardDrive } from 'lucide-react';

const guides = [
  {
    title: 'SSD vs HDD: which should you buy?',
    summary: 'Learn the differences that matter most for price, speed, and capacity.',
    href: '/guides/ssd-vs-hdd',
  },
  {
    title: 'NVMe vs SATA: what changes in real use?',
    summary: 'Understand when PCIe SSDs provide meaningful gains over SATA drives.',
    href: '/guides/nvme-vs-sata',
  },
  {
    title: 'How much storage do you actually need?',
    summary: 'A practical framework for choosing the right capacity for gaming, work, and backups.',
    href: '/guides/storage-planning',
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <div className="mb-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Guides</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Buying guidance for modern storage.</h1>
          <p className="mt-3 max-w-2xl text-base text-text-secondary">Straightforward help for choosing SSDs, HDDs, and NVMe drives without the jargon.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <HardDrive size={18} />
              </div>
              <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{guide.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Read guide <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
