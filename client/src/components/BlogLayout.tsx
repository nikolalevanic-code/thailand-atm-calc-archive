/*
 * BlogLayout — Thailand ATM Calculator
 * Design: Calm Fintech Utility / Swiss Modernism
 * Shared layout wrapper for all blog/article pages
 */

import { Link } from 'wouter';

interface BlogLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function BlogLayout({ title, description, lastUpdated, children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Top nav ── */}
      <nav className="sticky top-0 z-40 bg-brand border-b border-white/10">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 no-underline">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/calc-icon-baht-user_2cd03a0a.png"
              alt="Thailand ATM Calculator"
              className="w-7 h-7 object-contain"
            />
            <span className="font-display text-base text-white font-medium hidden sm:block">
              Thailand ATM Calculator
            </span>
            <span className="font-display text-base text-white font-medium sm:hidden">
              ATM Calculator
            </span>
          </a>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
            <Link href="/blog" className="hover:text-white transition-colors hidden sm:block">Guides</Link>
            <a href="/" className="hover:text-white transition-colors text-white/90 font-medium">← Calculator</a>
          </div>
        </div>
      </nav>

      {/* ── Article hero ── */}
      <div className="bg-brand">
        <div className="container py-10 sm:py-14">
          <div className="max-w-2xl">
            <Link href="/blog" className="text-white/60 text-sm hover:text-white/90 transition-colors no-underline">
              ← All guides
            </Link>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold mt-3 leading-tight">
              {title}
            </h1>
            <p className="text-white/75 mt-3 text-base leading-relaxed max-w-xl">
              {description}
            </p>
            <p className="text-white/45 text-xs mt-4">Updated {lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="container py-10 sm:py-14">
        <div className="max-w-2xl">
          <div className="prose-article">
            {children}
          </div>

          {/* ── CTA ── */}
          <div className="mt-12 rounded-xl bg-brand-purple-surface border border-brand-purple/20 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Calculate your exact ATM cost
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Enter your withdrawal amount and home currency to see the true cost — including your bank's fees and the exchange rate spread.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity no-underline"
            >
              Use the free calculator →
            </a>
          </div>

          {/* ── Back to blog ── */}
          <div className="mt-8 pt-8 border-t border-border">
            <Link href="/blog" className="text-muted-foreground text-sm hover:text-foreground transition-colors no-underline">
              ← Back to all guides
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container">
          <p className="text-xs text-muted-foreground max-w-2xl">
            Thailand ATM Calculator is a free tool for informational purposes. Fee data is researched and updated regularly but may not reflect the most recent changes by banks or card networks. Always verify fees with your bank before travelling.
          </p>
        </div>
      </footer>

    </div>
  );
}
