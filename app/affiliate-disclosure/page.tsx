import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SSDEXPERTZONE',
  description: 'Learn how affiliate links support SSDEXPERTZONE and how they affect product recommendations.',
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-3xl px-4 pt-12 md:px-6 md:pt-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Transparency</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Affiliate disclosure</h1>
          <p className="mt-4 text-lg leading-8 text-text-secondary">Some product links on SSDEXPERTZONE are affiliate links.</p>
        </header>

        <div className="space-y-5 text-base leading-7 text-text-secondary">
          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">What that means</h2>
            <p className="mt-4">As an Amazon Associate, we earn from qualifying purchases. If you follow an affiliate link and buy from the retailer, we may receive a commission at no extra cost to you.</p>
            <p className="mt-4">SSDEXPERTZONE does not set the retailer&apos;s price, process your payment, ship products, or handle returns. The retailer&apos;s terms apply to purchases made on its site.</p>
          </section>

          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Our editorial approach</h2>
            <p className="mt-4">Affiliate relationships do not change the specifications shown in our catalog or guarantee that a product is the right choice for you. Compare capacity, compatibility, performance, warranty, price, and intended use before buying.</p>
            <p className="mt-4">For more detail about our product data and comparison labels, read our <a href="/methodology" className="font-semibold text-accent hover:text-accent-hover">methodology</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
