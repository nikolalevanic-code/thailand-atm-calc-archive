/**
 * Home Page — Thailand ATM Calculator
 * Design: Calm Fintech Utility / Swiss Modernism meets Southeast Asian Calm
 * Palette: SCB purple (#4A1E8C), teal-green "better", amber "worse"
 * Fonts: DM Serif Display (headings), DM Sans (body), DM Mono (numbers)
 * Layout: Mobile-first, calculator-dominant, live calculation
 */

import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import { ExternalLink } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/hero-atm-thailand-duddaiCAwKANMt2Ryyf287.webp';
const ATM_SCREEN_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/atm-screen-decline-PXzjD5Pzncqury5Uv2HEbj.webp';
const TEMPLE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663310737769/Wco5JLMAZnC5jH2ae5jL7D/thai-temple-abstract-ShCWnQd5LkMvnmh3xumnNj.webp';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Top nav ── */}
      <nav className="sticky top-0 z-40 bg-brand border-b border-white/10">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 no-underline">
            <img src={TEMPLE_IMAGE} alt="Thailand ATM Calculator" className="w-7 h-7 object-contain brightness-0 invert" />
            <span className="font-display text-base text-white font-medium hidden sm:block">
              Thailand ATM Calculator
            </span>
            <span className="font-display text-base text-white font-medium sm:hidden">
              ATM Calculator
            </span>
          </a>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#how-it-works" className="hover:text-white transition-colors hidden sm:block">How it works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#methodology" className="hover:text-white transition-colors hidden sm:block">Methodology</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand">
        <div className="container py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: headline + calculator */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-4xl text-white leading-tight">
                  How much will your ATM withdrawal cost in Thailand?
                </h1>
                <p className="text-white/80 text-base leading-relaxed max-w-lg">
                  Thai ATMs are notoriously expensive for tourists, with lots of confusing fees baked in.
                  This site was built to give you a better idea of how much a withdrawal will cost you.
                  Enter your withdrawal amount and home currency to see the exact cost in your money
                  — including all bank fees and exchange rate margins. We’ll also tell you whether to
                  accept or decline the ATM’s conversion offer.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Free · 86 cards across 14 countries
                </div>
              </div>

              {/* Calculator */}
              <Calculator />
            </div>

            {/* Right: hero image (desktop only) */}
            <div className="hidden lg:block">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={HERO_IMAGE}
                  alt="Thai Baht banknotes next to an ATM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                    <span className="font-semibold text-foreground">The rule of thumb:</span>{' '}
                    <span className="text-foreground/80">Always decline the ATM's conversion offer. Let your card network handle the exchange.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-muted/30 border-y border-border py-12 sm:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
              How it works
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
                  You <strong>decline</strong> the ATM's offer. The ATM dispenses Thai Baht, and your card network (Visa or Mastercard) converts the amount to your home currency at their rate — typically close to the mid-market rate.
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
                  You <strong>accept</strong> the ATM's offer. The Thai bank converts the Baht to your home currency at their own rate — which is typically 4–6% worse than the mid-market rate. The ATM operator earns a margin on this.
                </p>
                <div className="text-xs text-worse font-medium bg-worse-surface rounded px-2 py-1">
                  Usually the more expensive option
                </div>
              </div>
            </div>

            {/* ATM screen image */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm">
              <img
                src={ATM_SCREEN_IMAGE}
                alt="ATM screen showing Decline Conversion as the recommended option"
                className="w-full object-cover max-h-56 object-top"
              />
              <div className="bg-white px-4 py-3 text-xs text-muted-foreground border-t border-border">
                When you see this screen at a Thai ATM — choose <strong className="text-better">Decline Conversion</strong> (or equivalent wording). Your bank will apply a better rate.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
                Why the difference matters
              </h2>
              <p className="text-muted-foreground">
                A real example from an Australian traveller in Thailand.
              </p>
            </div>

            {/* Example table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 pr-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Item</th>
                    <th className="text-right py-2 px-3 text-xs font-semibold text-better uppercase tracking-wide">Without conversion</th>
                    <th className="text-right py-2 pl-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">With conversion (DCC)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cash requested', '3,500 THB', '3,500 THB'],
                    ['Thai ATM fee', '250 THB', '250 THB'],
                    ['FX rate used', '1 AUD = 21.73 THB', '1 AUD = 20.66 THB'],
                    ['Base amount', 'A$172.55', 'A$181.50'],
                    ['CommBank overseas fee', 'A$11.04', 'A$11.35'],
                    ['Total cost to you', 'A$183.59', 'A$192.85'],
                  ].map(([label, wo, wc], i) => (
                    <tr key={i} className={`border-b border-border ${i === 5 ? 'font-semibold' : ''}`}>
                      <td className="py-2.5 pr-4 text-foreground/80">{label}</td>
                      <td className={`py-2.5 px-3 text-right font-mono ${i === 5 ? 'text-better' : ''}`}>{wo}</td>
                      <td className="py-2.5 pl-3 text-right font-mono">{wc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              Source: Actual CommBank transaction, February 2026. The "without conversion" option saved A$9.26 — approximately 2.5 plates of Pad Kra Pao.
            </p>

            {/* Key insight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: '~4–6%', label: 'Typical DCC rate penalty vs mid-market', color: 'text-worse' },
                { stat: '250 THB', label: 'Standard Thai ATM access fee (all major banks)', color: 'text-foreground' },
                { stat: '86 cards', label: 'Researched across 14 tourist-origin countries', color: 'text-brand' },
              ].map((item, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4 text-center border border-border">
                  <div className={`font-display text-2xl font-medium ${item.color}`}>{item.stat}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ad slot 1 ── */}
      <div className="container py-4">
        <div className="max-w-3xl mx-auto">
          <div className="border border-dashed border-border rounded-lg p-4 text-center text-xs text-muted-foreground bg-muted/20">
            Advertisement
          </div>
        </div>
      </div>

      {/* ── Travel card recommendations ── */}
      <section className="py-12 sm:py-14 bg-muted/20 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
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
                  benefit: 'No foreign transaction fees, reimburses all ATM fees worldwide',
                  markets: 'USD',
                  tag: 'Best for USD travellers',
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
                <div key={i} className="bg-white rounded-xl border border-border p-4 space-y-2">
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
      <section className="bg-white">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* ── Methodology ── */}
      <section id="methodology" className="py-12 sm:py-14 bg-muted/20 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-2xl text-foreground">Methodology</h2>
            <div className="prose prose-sm max-w-none text-foreground/80 space-y-3">
              <p>
                <strong>Exchange rate calibration:</strong> The FX rate multipliers used in this calculator are derived from a real Australian CommBank transaction made at an SCB ATM in Thailand on February 3, 2026. The card network applied a rate of 1 AUD = 21.7328 THB (approximately 1.1% better than the mid-market spot rate). The ATM's DCC offer was 1 AUD = 20.6613 THB (approximately 4% worse than spot). We use conservative multipliers: card network = spot × 1.011, ATM DCC = spot × 0.960.
              </p>
              <p>
                <strong>Live exchange rates:</strong> Mid-market spot rates are fetched daily from the Open Exchange Rates API and cached in your browser for 24 hours. If the live fetch fails, approximate rates from March 2026 are used as a fallback.
              </p>
              <p>
                <strong>Card fee database:</strong> 86 card profiles across 14 tourist-origin countries, sourced from official bank fee schedules and product pages. Last verified March 2026. Confidence levels (high/medium) are shown for each card. We do not include low-confidence data.
              </p>
              <p>
                <strong>Thai ATM fees:</strong> The default Thai ATM access fee is 250 THB, which is the standard rate charged by SCB, Bangkok Bank, Kasikorn, Krungthai, and Krungsri to foreign cardholders. Some ATMs charge 220 THB. You can override this in the calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ad slot 2 ── */}
      <div className="container py-4">
        <div className="max-w-3xl mx-auto">
          <div className="border border-dashed border-border rounded-lg p-4 text-center text-xs text-muted-foreground bg-muted/20">
            Advertisement
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-background/80 py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src={TEMPLE_IMAGE} alt="" className="w-6 h-6 object-contain opacity-80" />
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
                  { label: 'How it works', href: '#how-it-works' },
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
