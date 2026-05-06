import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SSDEXPERT collects, uses, and protects information from visitors.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-text-secondary leading-relaxed">
                This Privacy Policy explains how SSDEXPERTZONE handles information when you use the site.
                It is designed to describe our practices in a clear, plain-language way.
              </p>
            </header>

            <div className="space-y-8 text-text-secondary">
              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Information we collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as when you contact us through
                  the site&apos;s Contact page. Depending on what you submit, this may include your name,
                  email address, and message.
                </p>
                <p className="mt-4 leading-relaxed">
                  We may also collect general usage information (for example, how you use the site),
                  which helps us maintain and improve the experience.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">How we use information</h2>
                <ul className="space-y-3 list-disc pl-5">
                  <li>To respond to inquiries and communicate with you.</li>
                  <li>To understand how visitors interact with the site so we can improve content and features.</li>
                  <li>To help ensure the site operates safely and reliably.</li>
                </ul>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Sharing of information</h2>
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share information in limited circumstances,
                  such as:
                </p>
                <ul className="space-y-3 list-disc pl-5 mt-4">
                  <li>When needed to respond to your request.</li>
                  <li>With service providers who support site operations under appropriate safeguards.</li>
                  <li>When required by law or to protect the rights and safety of the site and its users.</li>
                </ul>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Cookies and similar technologies</h2>
                <p className="leading-relaxed">
                  SSDEXPERTZONE may use cookies or similar technologies to help the site work properly and to
                  understand site usage. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Affiliate links</h2>
                <p className="leading-relaxed">
                  Some links on the site may lead to third-party sellers or offers. If you choose to purchase
                  through certain links, we may receive a commission. This does not change the price you pay.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Data retention</h2>
                <p className="leading-relaxed">
                  We retain information only as long as necessary to fulfill the purposes described in this policy,
                  including to provide support, comply with legal obligations, resolve disputes, and enforce agreements.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Your choices</h2>
                <p className="leading-relaxed">
                  Depending on where you live, you may have rights regarding your personal information. These
                  rights may include access, correction, or deletion. To request options available to you,
                  contact us using the information in the "Contact us" section below.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Security</h2>
                <p className="leading-relaxed">
                  We take reasonable steps to help protect information from unauthorized access, use, or disclosure.
                  No method of transmission or storage is 100% secure.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Third-party sites</h2>
                <p className="leading-relaxed">
                  SSDEXPERT may link to third-party websites. Once you leave our site, the privacy policies of
                  those third parties apply. We are not responsible for the content or practices of those sites.
                </p>
              </section>

              <section className="bg-surface p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-3 text-text-primary">Contact us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our practices, please reach out through our
                  Contact page.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold transition-all shadow-lg shadow-accent/20"
                >
                  Contact SSDEXPERTZONE
                </a>
              </section>
            </div>

            <div className="mt-10 text-sm text-text-secondary text-center">
              Last updated, May 2026.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

