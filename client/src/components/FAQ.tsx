/**
 * FAQ Component
 * Design: Calm Fintech Utility
 * Accordion-style, with FAQ schema markup injected via script tag.
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Should I always decline the ATM\'s currency conversion offer in Thailand?',
    a: 'In almost all cases, yes. When a Thai ATM offers to convert your withdrawal to your home currency, it uses its own exchange rate, which can be several percentage points worse than the mid-market rate. Choosing Thai Baht lets your card network handle the conversion instead. The calculator estimates both scenarios, including your selected card’s fees.',
  },
  {
    q: 'What is Dynamic Currency Conversion (DCC)?',
    a: 'Dynamic Currency Conversion (DCC) is a service offered by some ATMs and merchants that lets you pay in your home currency instead of the local currency. While it sounds convenient, the exchange rate used by the ATM is set by the ATM operator — not your bank — and is almost always significantly worse than the rate your bank would apply. The ATM operator earns a margin on the conversion.',
  },
  {
    q: 'How accurate are these estimates?',
    a: 'The calculator uses live mid-market exchange rates, refreshed in your browser at least every 12 hours, and researched card fee schedules. The FX-rate multipliers are calibrated from real transaction data. Results are estimates: actual charges depend on your card terms, the ATM used, the displayed ATM fee, and the rate at the exact moment of the withdrawal. Always check your bank’s current fee schedule and the ATM screen before confirming.',
  },
  {
    q: 'Why does my bank charge a fee even when I decline conversion?',
    a: 'Most banks charge a foreign transaction fee (also called an overseas transaction fee or currency conversion fee) on international ATM withdrawals, regardless of whether you accept DCC. This is separate from the ATM\'s DCC offer. Some banks also charge a fixed overseas ATM withdrawal fee. Travel cards and digital banks like Wise, Revolut, and Charles Schwab often waive these fees entirely.',
  },
  {
    q: 'Which Thai banks charge the highest ATM fees for foreign cards?',
    a: 'At many major Thai bank ATMs, the displayed foreign-card fee is 250 THB for Visa and 350 THB for Mastercard. This ATM access fee is separate from DCC and applies whether you accept or decline conversion. Fees can change or vary by ATM, so check the screen before confirming and use the calculator’s fee override when needed.',
  },
  {
    q: 'What is the best card to use at Thai ATMs?',
    a: 'Cards with no foreign transaction fees and no overseas ATM fees are ideal. Examples include: Charles Schwab Investor Checking (USA, reimburses all ATM fees worldwide), Wise debit card (most currencies), Revolut (within monthly limits), Starling Bank (UK), and various travel-focused cards. The calculator includes these in its card database — select your card to see the full cost breakdown.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground mb-8">
          Everything you need to know about ATM fees and currency conversion in Thailand.
        </p>

        <div className="space-y-1">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-4 py-4 flex items-start justify-between gap-3 hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-sm text-foreground leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
