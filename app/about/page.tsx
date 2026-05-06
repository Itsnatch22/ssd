import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SSDEXPERTZONE",
  description:
    "Learn about SSDEXPERTZONE and how we help you find storage device deals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                About <span className="text-accent">SSDEXPERTZONE</span>
              </h1>
              <p className="text-text-secondary leading-relaxed">
                SSDEXPERTZONE is a site dedicated to helping people compare storage device options and
                discover helpful deals.
              </p>
            </header>

            <section className="space-y-8">
              <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3">Our mission</h2>
                <p className="text-text-secondary leading-relaxed">
                  We aim to make it easier to find good value for storage devices by presenting clear,
                  easy-to-scan information and helping you decide what to buy.
                </p>
              </div>

              <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3">What you can do on the site</h2>
                <ul className="text-text-secondary space-y-3 list-disc pl-5">
                  <li>Browse storage device options and compare them in one place.</li>
                  <li>Look for deal-oriented listings intended to help you identify strong offers.</li>
                  <li>Use links provided to learn more about specific products and offers.</li>
                </ul>
              </div>

              <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3">Deal and link information</h2>
                <p className="text-text-secondary leading-relaxed">
                  The content on SSDEXPERTZONE is provided to help you evaluate options. If you choose to
                  follow a link to learn more or make a purchase, you&apos;ll be directed to the relevant
                  seller or offer page.
                </p>
              </div>

              <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3">Contact</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have questions about the site, a listing, or suggestions to improve the experience,
                  you can reach out through our Contact page.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold transition-all shadow-lg shadow-accent/20"
                >
                  Contact SSDEXPERTZONE
                </a>
              </div>
            </section>

            <div className="mt-10 text-sm text-text-secondary text-center">
              Last updated, May 2026.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

