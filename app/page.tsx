import Link from 'next/link';
import { ArrowRight, Database, HardDrive, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { FeaturedDeals } from '@/components/FeaturedDeals';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { getProducts } from '@/lib/service/products';

export default async function HomePage() {
  const products = await getProducts({ limit: 60 });
  const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))].slice(0, 8);

  const categories = [
    {
      title: 'NVMe SSDs',
      description: 'Fast PCIe storage for gaming rigs, creator workstations, and everyday performance upgrades.',
      count: products.filter((product) => /nvme|pcie/i.test(product.technology)).length,
      href: '/deals?type=nvme',
      icon: Zap,
    },
    {
      title: 'SATA SSDs',
      description: 'Reliable SSDs that balance cost, capacity, and broad compatibility for laptops and desktops.',
      count: products.filter((product) => /sata/i.test(product.technology)).length,
      href: '/deals?type=ssd',
      icon: Database,
    },
    {
      title: 'HDDs',
      description: 'High-capacity bulk storage for backups, archives, and large media libraries.',
      count: products.filter((product) => /hdd|sas|7\.2k/i.test(product.technology)).length,
      href: '/deals?type=hdd',
      icon: HardDrive,
    },
    {
      title: 'External SSDs',
      description: 'Portable, travel-ready storage for creators, editors, and on-the-go backups.',
      count: products.filter((product) => /usb|external/i.test(product.technology)).length,
      href: '/deals?type=external',
      icon: ShieldCheck,
    },
  ];

  const capacities = [250, 500, 1000, 2000, 4000, 8000].map((capacity) => ({
    value: capacity,
    label: capacity >= 1000 ? `${capacity / 1000}TB` : `${capacity}GB`,
    href: `/deals?capacity=${capacity}`,
  }));

  const guides = [
    { title: 'SSD vs HDD: which should you buy?', href: '/guides/ssd-vs-hdd', summary: 'A quick breakdown of performance, capacity, and cost trade-offs.' },
    { title: 'NVMe vs SATA: what changes in real use?', href: '/guides/nvme-vs-sata', summary: 'Understand when PCIe drives are worth the premium.' },
    { title: 'How much storage do you actually need?', href: '/guides/storage-planning', summary: 'Use your workload to choose the right capacity without overspending.' },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <StatsBar />

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Compare',
              description: 'Evaluate capacity, interface, and price side-by-side.',
              icon: Database,
            },
            {
              title: 'Discover',
              description: 'Browse current drives from leading storage brands.',
              icon: Sparkles,
            },
            {
              title: 'Save',
              description: 'Spot the value options without wasting time on guesswork.',
              icon: ShieldCheck,
            },
            {
              title: 'Decide',
              description: 'Choose a storage setup that fits your workload and budget.',
              icon: ArrowRight,
            },
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-sm">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon size={18} />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-[-0.04em] text-text-primary">{title}</h3>
              <p className="text-sm leading-6 text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedDeals />

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Explore storage</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-text-primary md:text-4xl">Storage categories</h2>
          </div>
          <Link href="/deals" className="hidden items-center gap-2 text-sm font-semibold text-accent md:inline-flex">
            Browse all deals <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map(({ title, description, count, href, icon: Icon }) => (
            <Link key={title} href={href} className="group rounded-[1.75rem] border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon size={20} />
              </div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-black tracking-[-0.04em] text-text-primary">{title}</h3>
                <span className="rounded-full bg-surface-elevated px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  {count} items
                </span>
              </div>
              <p className="mb-4 text-sm leading-6 text-text-secondary">{description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Explore <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Browse by capacity</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-text-primary md:text-4xl">Find the right fit</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {capacities.map(({ label, value, href }) => (
            <Link key={value} href={href} className="rounded-[1.5rem] border border-border bg-surface p-4 text-left transition-all hover:border-accent/40 hover:bg-accent-soft">
              <div className="text-xl font-black tracking-[-0.04em] text-text-primary font-heading">{label}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-text-secondary">Capacity</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Top brands</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-text-primary md:text-4xl">Shop by manufacturer</h2>
          </div>
          <Link href="/brands" className="hidden items-center gap-2 text-sm font-semibold text-accent md:inline-flex">
            View all brands <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <Link key={brand} href={`/deals?brand=${encodeURIComponent(brand)}`} className="rounded-[1.5rem] border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-elevated font-black text-text-primary font-heading">
                {brand.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-xl font-black tracking-[-0.04em] text-text-primary">{brand}</h3>
              <p className="mt-2 text-sm text-text-secondary">{products.filter((product) => product.brand === brand).length} drives available</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Buying guidance</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-text-primary md:text-4xl">Guides and buying advice</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Database size={18} />
              </div>
              <h3 className="text-xl font-black tracking-[-0.04em] text-text-primary">{guide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{guide.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Read guide <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-6 md:pb-24">
        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-soft md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ready to upgrade?</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Compare storage options without the guesswork.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/deals" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover">
                Browse deals
                <ArrowRight size={16} />
              </Link>
              <Link href="/compare" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-text-primary hover:border-accent/40 hover:text-accent">
                Compare drives
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
