import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology | SSDEXPERTZONE',
  description: 'How SSDEXPERTZONE sources, normalizes, and presents storage product and pricing information.',
};

const sections = [
  {
    title: 'Product data',
    paragraphs: [
      'Our catalog is built from structured product records for SSDs, HDDs, NVMe drives, and related storage products. We identify products by their listed name and manufacturer, then normalize fields such as capacity, technology, condition, warranty, and image information for consistent comparison.',
      'Catalog availability can change. A product page describes the information available to us when the record was last updated and is not a substitute for the retailer\'s current listing.',
    ],
  },
  {
    title: 'Prices and availability',
    paragraphs: [
      'Prices and retailer links are provided for comparison and discovery. Prices, stock, shipping, taxes, promotions, and terms may change after a page is published or after you follow a link.',
      'SSDEXPERTZONE does not sell, ship, or fulfill the products shown. Always confirm the final price, availability, compatibility, and return policy on the retailer\'s page before purchasing.',
    ],
  },
  {
    title: 'How comparisons work',
    paragraphs: [
      'We compare the attributes available in our catalog, including capacity, technology, form factor, condition, warranty, price, and price-to-capacity context. A lower price does not automatically make a product the best choice; workload, compatibility, endurance, thermals, and warranty also matter.',
      'Our labels such as featured or curated describe how a product is presented in the catalog. They are not claims that we independently tested the product or that it is universally the best option.',
    ],
  },
  {
    title: 'Verification and corrections',
    paragraphs: [
      'A product record is considered verified only in the limited sense that required catalog fields have been reviewed for completeness before publication. It does not mean that SSDEXPERTZONE performed laboratory testing or guarantees a retailer listing.',
      'If you find an incorrect specification, broken link, or outdated price, please contact us with the product name and the relevant details so we can review the record.',
    ],
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-12 md:px-6 md:pt-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">How it works</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">Our methodology</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-text-secondary">
            SSDEXPERTZONE is a research and comparison platform. This page explains what our catalog means, where uncertainty remains, and how to use the information responsibly.
          </p>
        </header>

        <div className="space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-border bg-surface p-6 md:p-8">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-text-primary">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-text-secondary">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
