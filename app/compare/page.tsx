import Link from 'next/link';
import { ArrowRight, ArrowUpDown } from 'lucide-react';
import { getProducts } from '@/lib/service/products';

export default async function ComparePage() {
  const products = await getProducts({ limit: 4 });

  const rows: Array<{ label: string; render: (product: (typeof products)[number]) => string }> = [
    { label: 'Price', render: (product) => `$${product.price.toFixed(2)}` },
    {
      label: 'Capacity',
      render: (product) => `${product.capacity_gb >= 1000 ? `${product.capacity_gb / 1000}TB` : `${product.capacity_gb}GB`}`,
    },
    { label: 'Technology', render: (product) => product.technology },
    { label: 'Interface', render: (product) => product.form_factor },
    { label: 'Condition', render: (product) => product.condition },
  ];

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <div className="mb-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Compare</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Pick the right drive for your setup.</h1>
          <p className="mt-3 max-w-2xl text-base text-text-secondary">Compare price, capacity, interface, and primary use case before deciding which drive makes the most sense.</p>
        </div>

        <div className="overflow-x-auto rounded-[1.75rem] border border-border bg-surface shadow-sm">
          <table className="min-w-full text-left">
            <thead className="border-b border-border bg-surface-elevated">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">Specification</th>
                {products.map((product) => (
                  <th key={product.id} className="min-w-[210px] px-5 py-4 align-top">
                    <div className="text-lg font-black tracking-[-0.04em] text-text-primary">{product.name}</div>
                    <div className="mt-1 text-sm text-text-secondary">{product.brand}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ label, render }) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <td className="px-5 py-4 align-top font-semibold text-text-primary">{label}</td>
                  {products.map((product) => (
                    <td key={`${product.id}-${label}`} className="px-5 py-4 align-top text-text-secondary">
                      {render(product)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/deals" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover">
            Browse all deals
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
