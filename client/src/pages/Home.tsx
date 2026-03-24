/**
 * Home Page — Thailand ATM Calculator
 * Design: Calm Fintech Utility / Swiss Modernism meets Southeast Asian Calm
 * Palette: SCB purple (#4A1E8C), teal-green "better", amber "worse"
 * Fonts: Manrope (headings), DM Sans (body), DM Mono (numbers)
 * Layout: Mobile-first, calculator-dominant, live calculation
 */

import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import TipsSection from '@/components/TipsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Top nav ── */}
      <nav className="sticky top-0 z-40 bg-brand border-b border-white/10">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 no-underline">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/calc-icon-baht-user_2cd03a0a.png" alt="Thailand ATM Calculator" className="w-7 h-7 object-contain" />
            <span className="font-display text-base text-white font-medium hidden sm:block">
              Thailand ATM Calculator
            </span>
            <span className="font-display text-base text-white font-medium sm:hidden">
              ATM Calculator
            </span>
          </a>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#how-it-works" className="hover:text-white transition-colors hidden sm:block">ATM conversion?</a>
            <a href="#tips" className="hover:text-white transition-colors hidden sm:block">Tips</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#methodology" className="hover:text-white transition-colors hidden sm:block">Methodology</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand">
        <div className="container py-10 sm:py-14 lg:py-16">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-4">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-extrabold">
                How much will your ATM withdrawal cost in Thailand?
              </h1>
              <p className="text-white/80 text-base leading-relaxed max-w-xl">
                Thai ATMs are notoriously expensive for tourists, with lots of confusing fees baked in.
                This site was built to give you a better idea of how much a withdrawal will cost you.
                Enter your withdrawal amount and home currency to get your estimated cost, including
                bank and exchange rate-related fees. We'll also suggest whether to accept or decline
                the ATM's conversion offer.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Free · 101 cards across 17 countries
              </div>
            </div>

            {/* Calculator */}
            <Calculator />
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <TipsSection />

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-muted/30 border-y border-border py-12 sm:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2 font-bold">
              With or without conversion?
            </h2>
            <p className="text-muted-foreground mb-10">
              Understanding the two options every Thai ATM presents to foreign cardholders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Option 1 */}
              <div className="bg-white rounded-xl border-2 border-better p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-better text-white text-xs font-bold flex items-center justify-center">✓</span>
                  <h3 className="font-semibold text-foreground">Without conversion</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  You <strong>decline</strong> the ATM's offer. The ATM dispenses Thai Baht, and your card network (Visa or Mastercard) converts the amount to your home currency at their rate — typically within 2–3% of the mid-market rate.
                </p>
                <div className="text-xs text-better font-medium bg-better-surface rounded px-2 py-1">
                  Usually the cheaper option
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-white rounded-xl border border-border p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">✗</span>
                  <h3 className="font-semibold text-foreground">With conversion (DCC)</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  You <strong>accept</strong> the ATM's offer. The Thai bank converts the Baht to your home currency at their own rate — which is typically ~7% worse than the mid-market rate. The ATM operator earns a margin on this.
                </p>
                <div className="text-xs text-worse font-medium bg-worse-surface rounded px-2 py-1">
                  Usually the more expensive option
                </div>
              </div>
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { stat: '~7%', label: 'Typical DCC rate penalty vs mid-market', color: 'text-worse' },
                { stat: '250 THB', label: 'Standard Thai ATM access fee (all major banks)', color: 'text-foreground' },
                { stat: '101 cards', label: 'Researched across 17 tourist-origin countries', color: 'text-brand' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center border border-border">
                  <div className={`font-display text-2xl font-bold ${item.color}`}>{item.stat}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Travel card recommendations ── */}
      <section className="py-12 sm:py-14 bg-white border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2 font-bold">
                Cards with lower international ATM fees
              </h2>
              <p className="text-muted-foreground text-sm">
                If you travel frequently, these cards can significantly reduce your total ATM costs — regardless of whether you accept DCC.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: 'Wise Debit Card',
                  type: 'Digital / Multi-currency',
                  benefit: 'Low FX markup (~0.35–1.75%), free up to 350 AUD/month',
                  markets: 'AUD, GBP, EUR, SGD, USD + more',
                  tag: 'Popular choice',
                },
                {
                  name: 'Charles Schwab Investor Checking',
                  type: 'US bank account',
                  benefit: 'No foreign transaction fees, reimburses all ATM fees worldwide — including the 250 THB Thai ATM fee',
                  markets: 'USD',
                  tag: 'Best for USD travellers',
                },
                {
                  name: 'Wise — Pre-convert to THB',
                  type: 'Wise Debit Card tip',
                  benefit: 'If you have a Wise account, convert your home currency to THB inside the Wise app before withdrawing. You get the mid-market rate with a small transparent fee, rather than the card network rate applied at the ATM.',
                  markets: 'All Wise-supported currencies',
                  tag: 'Wise card tip',
                },
                {
                  name: 'Starling Bank',
                  type: 'UK digital bank',
                  benefit: 'No foreign transaction fees, no ATM fees abroad',
                  markets: 'GBP',
                  tag: 'Best for GBP travellers',
                },
                {
                  name: 'Revolut (Premium/Metal)',
                  type: 'Digital / Multi-currency',
                  benefit: 'No ATM fees up to monthly limit, interbank FX rate',
                  markets: 'AUD, GBP, EUR, SGD, USD + more',
                  tag: 'Good for frequent travellers',
                },
              ].map((card, i) => (
                <div key={i} className="bg-muted/20 rounded-xl border border-border p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{card.name}</div>
                      <div className="text-xs text-muted-foreground">{card.type}</div>
                    </div>
                    <span className="text-xs bg-brand-surface text-brand px-2 py-0.5 rounded-full shrink-0">{card.tag}</span>
                  </div>
                  <p className="text-xs text-foreground/80">{card.benefit}</p>
                  <p className="text-xs text-muted-foreground">Available for: {card.markets}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Card details are for general information only. Always verify current terms with the card issuer before applying.
              Some links may be affiliate links — this does not affect our recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-muted/20">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* ── Methodology ── */}
      <section id="methodology" className="py-12 sm:py-14 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-2xl text-foreground font-bold">Methodology</h2>
            <div className="prose prose-sm max-w-none text-foreground/80 space-y-3">
              <p>
                <strong>Exchange rate calibration:</strong> We use these calibrated multipliers: card network = spot × 0.978, ATM DCC = spot × 0.930, based on average data of real ATM transactions in Thailand. Please note the rates can vary depending on many factors. This tool is meant to be used as a rough guide.
              </p>
              <p>
                <strong>Live exchange rates:</strong> Mid-market spot rates are fetched twice daily from the Open Exchange Rates API and cached in your browser for 12 hours. If the live fetch fails, approximate rates from March 2026 are used as a fallback.
              </p>
              <p>
                <strong>Card fee database:</strong> 101 card profiles across 17 tourist-origin countries, sourced from official bank fee schedules and product pages. Last verified March 2026. Confidence levels (high/medium) are shown for each card. We do not include low-confidence data.
              </p>
              <p>
                <strong>Thai ATM fees:</strong> The default Thai ATM access fee is 250 THB, which is the standard rate charged by SCB, Bangkok Bank, Kasikorn, Krungthai, and Krungsri to foreign cardholders. Some ATMs charge 220 THB. You can override this in the calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-background/80 py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/calc-icon-baht-user_2cd03a0a.png" alt="" className="w-6 h-6 object-contain opacity-80" />
                  <span className="font-display text-background text-sm font-medium">Thailand ATM Calculator</span>
                </div>
                <p className="text-xs text-background/50 max-w-xs leading-relaxed">
                  An independent tool to help tourists make informed decisions about currency conversion at Thai ATMs.
                  Not affiliated with any bank or ATM operator.
                </p>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-background/50 font-medium uppercase tracking-wide text-[10px] mb-2">Links</div>
                {[
                  { label: 'Methodology', href: '#methodology' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'ATM conversion?', href: '#how-it-works' },
                ].map(link => (
                  <a key={link.label} href={link.href} className="block text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-background/10 text-xs text-background/40 space-y-1">
              <p>© 2026 Thailand ATM Calculator. All results are estimates. Not financial advice.</p>
              <p>
                Exchange rates from{' '}
                <a href="https://open.er-api.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-background/60">
                  Open Exchange Rates API
                </a>
                . Card fee data last verified March 2026.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
