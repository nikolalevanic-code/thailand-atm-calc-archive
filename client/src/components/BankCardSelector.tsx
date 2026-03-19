/**
 * BankCardSelector — Searchable grouped dropdown for bank/card selection
 * Design: Calm Fintech Utility
 * Shows cards grouped by bank, with card type badges.
 * Includes "Don't see your bank?" hyperlink at the bottom.
 */

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { CardProfile, CARD_TYPE_LABELS, getCardsByBank } from '@/lib/cardData';

interface BankCardSelectorProps {
  currency: string;
  selectedCard: CardProfile | null;
  onSelect: (card: CardProfile | null) => void;
  onRequestBank: () => void;
}

export default function BankCardSelector({
  currency,
  selectedCard,
  onSelect,
  onRequestBank,
}: BankCardSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const grouped = getCardsByBank(currency);
  const banks = Object.keys(grouped).sort();

  // Filter by search
  const filteredBanks = banks.filter(bank => {
    if (!search) return true;
    const q = search.toLowerCase();
    if (bank.toLowerCase().includes(q)) return true;
    return grouped[bank].some(c => c.product_name.toLowerCase().includes(q));
  });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset selected card when currency changes
  useEffect(() => {
    onSelect(null);
  }, [currency]);

  const cardTypeColor: Record<string, string> = {
    consumer_debit: 'bg-slate-100 text-slate-600',
    premium_debit: 'bg-purple-50 text-purple-700',
    travel_card: 'bg-teal-50 text-teal-700',
    digital_bank: 'bg-blue-50 text-blue-700',
    credit: 'bg-orange-50 text-orange-700',
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-foreground/80">
        Your bank / card <span className="text-muted-foreground font-normal">(optional)</span>
      </label>

      <div ref={dropdownRef} className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-md border border-border bg-white text-sm text-left hover:border-ring/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/30"
        >
          <span className={selectedCard ? 'text-foreground' : 'text-muted-foreground'}>
            {selectedCard
              ? `${selectedCard.bank_name} — ${selectedCard.product_name}`
              : 'Select your bank & card (or use country average)'}
          </span>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            {selectedCard && (
              <span
                role="button"
                tabIndex={0}
                onClick={e => { e.stopPropagation(); onSelect(null); }}
                onKeyDown={e => e.key === 'Enter' && (e.stopPropagation(), onSelect(null))}
                className="p-0.5 rounded hover:bg-muted transition-colors"
                aria-label="Clear selection"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </span>
            )}
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-border rounded-md shadow-lg max-h-80 flex flex-col">
            {/* Search */}
            <div className="p-2 border-b border-border">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-muted/50">
                <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search bank or card..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="text-muted-foreground hover:text-foreground">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="overflow-y-auto flex-1">
              {filteredBanks.length === 0 ? (
                <div className="px-3 py-4 text-sm text-muted-foreground text-center">
                  No cards found for "{search}"
                </div>
              ) : (
                filteredBanks.map(bank => {
                  const cards = grouped[bank].filter(c => {
                    if (!search) return true;
                    const q = search.toLowerCase();
                    return bank.toLowerCase().includes(q) || c.product_name.toLowerCase().includes(q);
                  });
                  if (cards.length === 0) return null;
                  return (
                    <div key={bank}>
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30 sticky top-0">
                        {bank}
                      </div>
                      {cards.map(card => (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => { onSelect(card); setOpen(false); setSearch(''); }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors flex items-center justify-between gap-2 ${
                            selectedCard?.id === card.id ? 'bg-accent' : ''
                          }`}
                        >
                          <span className="text-foreground">{card.product_name}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded shrink-0 ${cardTypeColor[card.card_type] ?? 'bg-slate-100 text-slate-600'}`}>
                            {CARD_TYPE_LABELS[card.card_type] ?? card.card_type}
                          </span>
                        </button>
                      ))}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-border">
              <button
                type="button"
                onClick={() => { setOpen(false); onRequestBank(); }}
                className="w-full text-xs text-center text-brand underline underline-offset-2 hover:text-brand/80 transition-colors py-1"
              >
                Don't see your bank? Request it here →
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedCard && (
        <p className="text-xs text-muted-foreground">
          {selectedCard.network} · Verified {selectedCard.last_verified_date} ·{' '}
          <a href={selectedCard.source_url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
            Source
          </a>
          {selectedCard.confidence_level === 'medium' && (
            <span className="ml-1 text-worse">(medium confidence)</span>
          )}
        </p>
      )}
    </div>
  );
}
