import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { getProducts } from '@/lib/service/products';
import type { Metadata } from 'next';

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value || 0);
}

async function findProduct(slug: string) {
  const products = await getProducts({ limit: 100 });
  return products.find((entry) => entry.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await findProduct(slug);

  if (!product) {
    return { title: 'Product not found | SSDEXPERTZONE' };
  }

  return {
    title: `${product.name} | SSDEXPERTZONE`,
    description: `Compare the ${product.name} by capacity, technology, interface, condition, warranty, and current listed price.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProducts({ limit: 100 });
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((entry) => entry.id !== product.id && entry.brand === product.brand)
    .slice(0, 3);

  const specifications = [
    ['Brand', product.brand],
    ['Capacity', product.capacity_gb >= 1000 ? `${product.capacity_gb / 1000}TB` : `${product.capacity_gb}GB`],
    ['Type', product.technology],
    ['Interface', product.form_factor],
    ['Condition', product.condition],
    ['Warranty', product.warranty],
  ];

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-12">
        <div className="mb-8 rounded-[2rem] border border-border bg-surface p-5 shadow-sm md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Product details</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">{product.name}</h1>
              <p className="mt-3 text-base text-text-secondary">{product.brand} · {product.technology}</p>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-surface-elevated p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">Price</p>
              <div className="mt-2 text-3xl font-black text-text-primary font-heading">{formatPrice(product.price)}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-sm">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-border bg-surface-elevated">
              <Image
                src={product.image_url}
                alt={product.image_alt || product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-5"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent"><ShieldCheck size={16} /> Transparent affiliate link</div>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{product.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${product.amazon_url}${product.amazon_url.includes('?') ? '&' : '?'}tag=${process.env.NEXT_PUBLIC_AFFILIATE_TAG || 'aff-20'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover"
                >
                  View deal at retailer
                  <ArrowRight size={16} />
                </a>
                <Link href="/deals" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-text-primary hover:border-accent/40 hover:text-accent">
                  Back to deals
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Specifications</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {specifications.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-border bg-background p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary">{label}</div>
                    <div className="mt-2 text-sm font-medium text-text-primary">{String(value)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">What these specifications mean</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              This {product.form_factor} {product.technology} drive offers {product.capacity_gb >= 1000 ? `${product.capacity_gb / 1000}TB` : `${product.capacity_gb}GB`} of storage. The technology and interface determine whether it fits your computer and what kind of connection it expects, so check your device manual or motherboard specifications before ordering.
            </p>
            <p className="mt-4 leading-7 text-text-secondary">
              The listed price is useful for comparison at the time of cataloging, but it can change. Compare the price with drives of the same capacity and interface rather than comparing unlike products.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Before you buy</h2>
            <ul className="mt-4 space-y-3 leading-7 text-text-secondary">
              <li>Confirm that your system supports the listed {product.technology} technology and {product.form_factor} form factor.</li>
              <li>Check whether your workload needs this capacity, especially if you plan to store games, media, or large project files.</li>
              <li>Review the retailer listing for current price, stock, shipping, warranty terms, and returns.</li>
            </ul>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-black tracking-[-0.05em] text-text-primary">You may also like</h2>
              <Link href="/deals" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Browse all deals <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} href={`/products/${item.slug}`} className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      {item.brand.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-black text-text-primary">{item.name}</div>
                      <div className="text-sm text-text-secondary">{item.capacity_gb >= 1000 ? `${item.capacity_gb / 1000}TB` : `${item.capacity_gb}GB`}</div>
                    </div>
                  </div>
                  <div className="mt-5 text-lg font-black text-text-primary font-heading">{formatPrice(item.price)}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
