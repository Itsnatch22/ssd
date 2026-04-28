"use client";
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="bg-surface p-12 rounded-3xl border border-border shadow-xl">
            <div className="w-24 h-24 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-red-500/20">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold bg-linear-to-r from-text-primary to-red-500 bg-clip-text text-transparent mb-4">
              Something went wrong
            </h1>
            <p className="text-text-secondary mb-8 leading-relaxed">
              An unexpected error occurred. Don&apos;t worry, we&apos;re on it.
            </p>
            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full h-12 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
              >
                Try Again
              </button>
              <Link 
                href="/"
                className="w-full block h-12 items-center justify-center bg-surface border border-border hover:bg-accent-hover text-text-primary rounded-xl font-medium transition-all"
              >
                Back to Home
              </Link>
            </div>
            {error.digest && (
              <details className="mt-8 p-4 bg-accent/5 rounded-xl border border-accent/20">
                <summary className="font-bold cursor-pointer text-text-secondary">Error Details</summary>
                <pre className="mt-2 text-xs text-text-secondary/80 overflow-auto">
                  {error.digest}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

