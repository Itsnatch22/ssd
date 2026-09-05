import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProducts } from '@/lib/service/products';

export default async function BrandsPage() {
  const products = await getProducts({ limit: 100 });
  const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))].sort();

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <div className="mb-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Brands</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Browse storage brands.</h1>
          <p className="mt-3 max-w-2xl text-base text-text-secondary">Compare products from the manufacturers currently represented in the SSD Expert Zone catalog.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => {
            const count = products.filter((product) => product.brand === brand).length;
            return (
              <Link key={brand} href={`/deals?brand=${encodeURIComponent(brand)}`} className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-lg font-black text-accent font-heading">
                  {brand.slice(0, 2).toUpperCase()}
                </div>
                <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">{brand}</h2>
                <p className="mt-2 text-sm text-text-secondary">{count} drives available</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Browse brand <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
