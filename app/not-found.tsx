"use client";
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="bg-surface p-12 rounded-3xl border border-border shadow-xl">
            <div className="w-24 h-24 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-amber-500/20">
              <AlertTriangle className="w-12 h-12 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold bg-linear-to-r from-text-primary to-amber-500 bg-clip-text text-transparent mb-4">
              Page Not Found
            </h1>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="space-y-3">
              <Link 
                href="/privacy"
                className="w-full block h-12 items-center justify-center bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
              >
                Go to Privacy
              </Link>
              <Link 
                href="/"
                className="w-full block h-12 items-center justify-center bg-surface border border-border hover:bg-accent-hover text-text-primary rounded-xl font-medium transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

