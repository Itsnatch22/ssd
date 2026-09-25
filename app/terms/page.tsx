import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SSDEXPERTZONE',
  description: 'Terms for using the SSDEXPERTZONE storage comparison platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-3xl px-4 pt-12 md:px-6 md:pt-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Site terms</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Terms of use</h1>
          <p className="mt-4 text-lg leading-8 text-text-secondary">Please read these terms before relying on information or links provided by SSDEXPERTZONE.</p>
        </header>

        <div className="space-y-5 text-base leading-7 text-text-secondary">
          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Informational service</h2>
            <p className="mt-4">SSDEXPERTZONE provides product information, comparisons, buying guidance, and links to third-party retailers for general informational purposes. We do not sell or fulfill the products listed on this site.</p>
          </section>
          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Accuracy and third-party links</h2>
            <p className="mt-4">We work to keep catalog information useful, but product specifications, prices, availability, shipping, and retailer policies can change. Confirm details with the retailer before purchasing. Third-party sites are governed by their own terms and policies.</p>
          </section>
          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Acceptable use</h2>
            <p className="mt-4">Use the site lawfully and do not interfere with its operation, attempt unauthorized access, scrape it in a way that harms the service, or misuse contact forms and external links.</p>
          </section>
          <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">Related policies</h2>
            <p className="mt-4">Our <a href="/privacy" className="font-semibold text-accent hover:text-accent-hover">Privacy Policy</a> explains how information is handled, and our <a href="/affiliate-disclosure" className="font-semibold text-accent hover:text-accent-hover">Affiliate Disclosure</a> explains how qualifying purchases may support the site.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
