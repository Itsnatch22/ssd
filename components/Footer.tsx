import Link from 'next/link';
import { HardDrive } from 'lucide-react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-1.5 rounded-lg text-white">
                <HardDrive size={22} />
              </div>
              <span className="text-xl font-heading font-bold tracking-tight">
                SSD<span className="text-accent">EXPERT</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-6">
              Your ultimate destination for comparing storage device prices. We help you find the best value for your digital storage needs.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#deals" className="text-text-secondary hover:text-accent transition-colors">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Disclosure</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              As an Amazon Associate, we earn from qualifying purchases. This means we may receive a small commission if you buy through our links, at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} SSDEXPERT. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            A Premium Tech Hub
          </p>
        </div>
      </div>
    </footer>
  );
}
