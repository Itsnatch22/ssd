'use client';

import Link from 'next/link';
import { Shield, FileText, Lock, User, Calendar, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Shield className="h-5 w-5" />
                <span className="font-bold uppercase tracking-wide text-sm">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-linear-to-r from-text-primary to-accent bg-clip-text text-transparent">
                Privacy <span className="text-accent">Policy</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Your privacy matters. We&apos;re committed to protecting your data and being transparent about how we use it.
              </p>
              <div className="flex items-center justify-center gap-1 mt-8 text-sm text-text-secondary">
                <Calendar className="h-4 w-4" />
                <span>Last updated: December 1, 2024</span>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {/* 1. Introduction */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent/10 text-accent p-3 rounded-2xl mt-1 shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">1. Introduction</h2>
                    <p className="text-text-secondary leading-relaxed">
                      Welcome to SSDEXPERT (&amp;quot;we,&amp;quot; &amp;quot;our,&amp;quot; or &amp;quot;us&amp;quot;). We&amp;#39;re committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                      <Link href="/" className="text-accent hover:underline font-medium">ssdexpert.com</Link>, use our services, 
                      or interact with us in any other way.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-500/10 text-blue-500 p-3 rounded-2xl mt-1 shrink-0">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">2. Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-text-primary mb-2">Information You Provide:</h3>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary pl-4">
                          <li>Contact form submissions (name, email, message)</li>
                          <li>Newsletter signup email (if implemented)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary mb-2">Automatically Collected:</h3>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary pl-4">
                          <li>IP address, browser type, device info, pages visited</li>
                          <li>Cookies for theme preference and analytics</li>
                          <li>Usage data (time spent, clicks on deals)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="
                      mt-4 text-sm text-text-secondary italic">
                      We do <strong>not</strong> collect payment information, passwords, or sensitive personal data.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Your Information */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-green-500/10 text-green-500 p-3 rounded-2xl mt-1 shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">3. How We Use Your Information</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
                      <li>Respond to contact form inquiries</li>
                      <li>Send newsletters (with opt-out)</li>
                      <li>Improve site performance and user experience</li>
                      <li>Analytics to understand popular deals</li>
                      <li>Affiliate tracking (when you click deals)</li>
                      <li>Compliance with legal requirements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Cookies & Tracking */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">4. Cookies &amp; Tracking Technologies</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Essential Cookies</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li><strong>theme</strong>: Dark/light mode preference (localStorage)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Analytics Cookies (Optional)</h3>
                    <p className="text-text-secondary mb-4">We use Google Analytics (or similar) to understand site usage. You can opt-out via browser settings.</p>
                  </div>
                </div>
              </section>

              {/* 5. Third Parties */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">5. Third Party Links &amp; Services</h2>
                <p className="text-text-secondary mb-6">We link to affiliate partners (Amazon, Newegg). Their privacy policies apply once you leave our site.</p>
                <ul className="space-y-3 text-text-secondary">
                  <li>• Supabase (data storage) - <Link href="https://supabase.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener">Privacy Policy</Link></li>
                  <li>• Resend (email delivery) - <Link href="https://resend.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener">Privacy Policy</Link></li>
                  <li>• Amazon Associates (affiliate links)</li>
                </ul>
              </section>

              {/* 6. Data Security & Retention */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">6. Security &amp; Retention</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary">
                  <div>
                    <p className="mb-4">We use industry-standard security (Supabase encryption, HTTPS everywhere).</p>
                    <p>Contact data retained 90 days or until response sent.</p>
                  </div>
                  <div>
                    <p className="mb-4"><strong>Your Rights:</strong> Access, delete, or export your data. Email support@ssdexpert.com</p>
                    <p>EU/UK: GDPR compliant. California: CCPA &amp;quot;sale&amp;quot; opt-out available.</p>
                  </div>
                </div>
              </section>

              {/* 7. Changes & Contact */}
              <section className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-sm text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 mx-auto max-w-2xl">7. Changes to This Policy &amp; Contact</h2>
                <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                  We may update this policy. Check back periodically. Effective Dec 1, 2024.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                  <Link 
                    href="/contact" 
                    className="flex-1 flex items-center justify-center gap-2 h-12 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/" 
                    className="flex items-center justify-center gap-2 px-6 h-12 bg-surface border border-border hover:bg-accent-hover text-text-primary rounded-xl font-medium transition-all"
                  >
                    Back to Home
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
