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
    a: 'In almost all cases, yes. When a Thai ATM offers to convert your withdrawal to your home currency, it uses its own exchange rate — which is typically 4–6% worse than the mid-market rate. Your card network (Visa, Mastercard, etc.) will apply a much more competitive rate. The only exception might be if your home bank charges a very high foreign transaction fee that outweighs the FX rate difference, which this calculator accounts for.',
  },
  {
    q: 'What is Dynamic Currency Conversion (DCC)?',
    a: 'Dynamic Currency Conversion (DCC) is a service offered by some ATMs and merchants that lets you pay in your home currency instead of the local currency. While it sounds convenient, the exchange rate used by the ATM is set by the ATM operator — not your bank — and is almost always significantly worse than the rate your bank would apply. The ATM operator earns a margin on the conversion.',
  },
  {
    q: 'How accurate are these estimates?',
    a: 'The calculator uses live mid-market exchange rates (refreshed daily) and published fee schedules from official bank websites, verified in March 2026. The FX rate multipliers (card network and DCC) are calibrated from real transaction data. Results are estimates — actual charges depend on your specific card terms, the ATM used, and the exchange rate at the exact moment of your transaction. Always check your bank\'s current fee schedule before travelling.',
  },
  {
    q: 'Why does my bank charge a fee even when I decline conversion?',
    a: 'Most banks charge a foreign transaction fee (also called an overseas transaction fee or currency conversion fee) on international ATM withdrawals, regardless of whether you accept DCC. This is separate from the ATM\'s DCC offer. Some banks also charge a fixed overseas ATM withdrawal fee. Travel cards and digital banks like Wise, Revolut, and Charles Schwab often waive these fees entirely.',
  },
  {
    q: 'Which Thai banks charge the highest ATM fees for foreign cards?',
    a: 'Most major Thai banks charge a flat fee of 220–250 THB per withdrawal for foreign cards. This is the "Thai ATM access fee" in the calculator (default: 250 THB). The fee is the same regardless of whether you accept or decline DCC. Some smaller ATM networks may charge differently. Bangkok Bank, SCB, Kasikorn, Krungthai, and Krungsri all charge in this range.',
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
