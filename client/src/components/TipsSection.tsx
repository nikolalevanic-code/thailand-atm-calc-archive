/**
 * TipsSection — Practical Thailand travel tips with expandable toggles
 * Design: Calm Fintech Utility — clean, brief, trust-building
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Tip {
  emoji: string;
  title: string;
  summary: string;
  detail: string;
}

const TIPS: Tip[] = [
  {
    emoji: '⚡',
    title: 'Check the ATM fee before you confirm',
    summary: 'The fee can vary by ATM and card network. At many major Thai bank ATMs, Visa is 250 THB and Mastercard is 350 THB.',
    detail: 'Older travel guides may recommend a lower AEON ATM fee, but we cannot verify a current foreign-card AEON ATM network. Use a major bank ATM that accepts your card, check the fee displayed on screen, and adjust the calculator setting if the fee differs from the default.',
  },
  {
    emoji: '💸',
    title: 'Withdraw more, withdraw less often',
    summary: 'The ATM fee is charged per transaction — not per baht. Fewer, larger withdrawals mean less wasted on flat fees.',
    detail: 'Most Thai ATMs dispense up to 20,000–30,000 THB per transaction. Check your home bank\'s per-transaction limit too, as some cap overseas withdrawals at a lower amount.',
  },
  {
    emoji: '💳',
    title: 'Tap works — but carry cash for street food',
    summary: 'Contactless is widely accepted in malls and restaurants. Street food stalls, markets, and tuk-tuks are almost always cash only. Bring smaller notes (20, 50, 100 THB).',
    detail: 'ATMs dispense 100 and 1,000 THB notes. If you withdraw a large amount, ask a 7-Eleven or hotel to break a 1,000 THB note into smaller denominations before heading to a market.',
  },
  {
    emoji: '📱',
    title: 'Use cross-border QR if your bank supports it',
    summary: 'Some banks let you pay Thai vendors directly via QR — no cash, no conversion fee, and it works even at small local shops.',
    detail: 'Cross-border QR with Thailand\'s PromptPay network is currently supported by banks in: Singapore (PayNow), Malaysia (DuitNow), Indonesia (QRIS), Vietnam (VietQR), Cambodia (Bakong), Laos, Myanmar, and Japan (select banks via JCB). If your bank doesn\'t support it, Moreta Pay is a third-party app that facilitates cross-border QR payments in Thailand for travellers from several additional countries.',
  },
  {
    emoji: '🌶️',
    title: 'Say "phet nit noi" if you can\'t handle Thai spicy',
    summary: 'Thai food is genuinely spicy by default. "Phet nit noi" (เผ็ดนิดหน่อย) means "a little spicy." Start small first!',
    detail: 'For no spice at all, say "mai phet" (ไม่เผ็ด). And if you\'re feeling brave, "phet mak" (เผ็ดมาก) means "very spicy" — proceed with confidence.',
  },
  {
    emoji: '😊',
    title: 'Smile!',
    summary: 'Thailand is the "Land of Smiles" — returning a smile is deeply embedded in the culture. It goes a long way.',
    detail: 'The Thai smile is deeply rooted in Buddhist values of kindness and peace. It is used not just to be polite, but to ease social interactions and even diffuse tense situations.',
  },
];

function TipItem({ tip }: { tip: Tip }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg bg-white overflow-hidden">
      <div className="p-4 space-y-1">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">{tip.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground">{tip.title}</p>
            <p className="text-sm text-foreground/70 mt-1 leading-relaxed">{tip.summary}</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1 text-xs text-brand hover:text-brand/80 transition-colors mt-2 ml-8"
          aria-expanded={open}
        >
          {open ? 'Less' : 'More info'}
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="px-4 pb-4 ml-8">
          <p className="text-xs text-foreground/70 leading-relaxed border-t border-border pt-3">
            {tip.detail}
          </p>
        </div>
      )}
    </div>
  );
}

export default function TipsSection() {
  return (
    <section id="tips" className="bg-white border-b border-border py-10 sm:py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold mb-1">
              Tips for your trip
            </h2>
            <p className="text-muted-foreground text-sm">A few things worth knowing before you land.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIPS.map((tip, i) => (
              <TipItem key={i} tip={tip} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
