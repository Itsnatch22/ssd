import Link from 'next/link';
import { HardDrive } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
                <HardDrive size={18} />
              </div>
              <span className="text-xl font-black tracking-tight text-text-primary font-heading">
                SSD<span className="text-accent">EXPERTZONE</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary">
              Compare storage. Buy smarter.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-text-primary">Explore</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="/deals" className="transition-colors hover:text-accent">Deals</Link></li>
              <li><Link href="/deals?type=nvme" className="transition-colors hover:text-accent">NVMe</Link></li>
              <li><Link href="/deals?type=ssd" className="transition-colors hover:text-accent">SSDs</Link></li>
              <li><Link href="/deals?type=hdd" className="transition-colors hover:text-accent">HDDs</Link></li>
              <li><Link href="/brands" className="transition-colors hover:text-accent">Brands</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-text-primary">Company</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="/about" className="transition-colors hover:text-accent">About</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-accent">Contact</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/guides" className="transition-colors hover:text-accent">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-text-primary">Disclosure</h3>
            <p className="text-sm leading-7 text-text-secondary">
              As an Amazon Associate, we earn from qualifying purchases. This means we may receive a small commission if you buy through our links, at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-text-secondary">© {new Date().getFullYear()} SSDEXPERTZONE. All rights reserved.</p>
          <p className="text-sm text-text-secondary">Compare storage. Buy smarter.</p>
        </div>
      </div>
    </footer>
  );
}
