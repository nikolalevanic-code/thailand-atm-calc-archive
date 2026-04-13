/*
 * Blog Index — Thailand ATM Calculator
 * Design: Calm Fintech Utility / Swiss Modernism
 * Lists all guides in the content cluster
 */

import { Link } from 'wouter';

const articles = [
  {
    slug: '/blog/thailand-atm-fees',
    title: 'Thailand ATM Fees Explained (2026)',
    description: 'A clear breakdown of every fee you\'ll encounter at a Thai ATM — and how to avoid the ones that aren\'t worth paying.',
    tags: ['ATM fees', 'DCC'],
  },
  {
    slug: '/blog/thailand-atm-withdrawal-limit',
    title: 'Thailand ATM Withdrawal Limits (2026)',
    description: 'How much can you withdraw from a Thai ATM in one transaction? Per day? Limits by bank and how to work around them efficiently.',
    tags: ['Withdrawal limits'],
  },
  {
    slug: '/blog/thailand-atm-no-fee',
    title: 'How to Withdraw Money in Thailand Without Fees',
    description: 'Can you avoid ATM fees in Thailand entirely? Here\'s what\'s actually possible — and the best strategies to get as close to zero as you can.',
    tags: ['Fee-free', 'Travel cards'],
  },
  {
    slug: '/blog/best-atm-thailand-foreigners',
    title: 'Best ATM to Use in Thailand for Foreigners (2026)',
    description: 'Not all Thai ATMs charge the same fee. Here\'s which ATMs are cheapest for foreign cards — and where to find them.',
    tags: ['AEON ATM', 'ATM comparison'],
  },
  {
    slug: '/blog/wise-revolut-thailand',
    title: 'Wise vs Revolut for Thailand: Which is Better in 2026?',
    description: 'A direct comparison of fees, exchange rates, ATM limits, and practical usability in Thailand.',
    tags: ['Wise', 'Revolut'],
  },
  {
    slug: '/blog/how-much-cash-thailand',
    title: 'How Much Cash to Bring to Thailand (2026 Guide)',
    description: 'How much Thai Baht do you actually need? A practical breakdown by trip length, travel style, and where cards are and aren\'t accepted.',
    tags: ['Cash planning'],
  },
];

export default function BlogIndex() {
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
            <a href="/" className="hover:text-white transition-colors text-white/90 font-medium">← Calculator</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="bg-brand">
        <div className="container py-10 sm:py-14">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-tight">
              Thailand ATM & Money Guides
            </h1>
            <p className="text-white/75 mt-3 text-base leading-relaxed max-w-xl">
              Practical, up-to-date guides on ATM fees, withdrawal limits, travel cards, and how to get the most out of your money in Thailand.
            </p>
          </div>
        </div>
      </div>

      {/* ── Article list ── */}
      <div className="container py-10 sm:py-14">
        <div className="max-w-2xl space-y-4">
          {articles.map((article) => (
            <Link key={article.slug} href={article.slug} className="no-underline block group">
              <div className="border border-border rounded-xl p-5 sm:p-6 hover:border-brand-purple/40 hover:bg-brand-purple-surface/50 transition-all duration-150">
                <h2 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-brand-purple transition-colors leading-snug mb-2">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-brand-purple bg-brand-purple-surface px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-auto">Read guide →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA back to calculator */}
        <div className="max-w-2xl mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Ready to calculate your exact ATM cost?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity no-underline"
          >
            Use the free calculator →
          </a>
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
