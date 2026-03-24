/**
 * Calculator — Main interactive widget
 * Design: Calm Fintech Utility
 * Live calculation (no submit button), purple-tinted card background.
 * Shows results inline below inputs on mobile, side-by-side on desktop.
 */

import { useState, useEffect, useCallback } from 'react';
import { CardProfile, CURRENCIES, formatCurrency } from '@/lib/cardData';
import { calculate, CalculationResult, DEFAULT_THAI_ATM_FEE, DEFAULT_ATM_LIMIT_THB } from '@/lib/calculator';
import { fetchThbRates, FALLBACK_RATES, isFallbackRate, formatFetchedAt } from '@/lib/fxRate';
import BankCardSelector from './BankCardSelector';
import ResultsTable from './ResultsTable';
import RecommendationBox from './RecommendationBox';
import { Loader2, RefreshCw, AlertCircle, Share2, Check } from 'lucide-react';

const CURRENCY_OPTIONS = Object.entries(CURRENCIES).map(([code, info]) => ({
  code,
  label: `${info.symbol} ${code} — ${info.label}`,
}));

export default function Calculator() {
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>('10000');
  const [currency, setCurrency] = useState<string>('AUD');
  const [selectedCard, setSelectedCard] = useState<CardProfile | null>(null);
  const [thaiAtmFee, setThaiAtmFee] = useState<string>(String(DEFAULT_THAI_ATM_FEE));
  const [atmLimit, setAtmLimit] = useState<string>(String(DEFAULT_ATM_LIMIT_THB));
  const [showAtmFeeOverride, setShowAtmFeeOverride] = useState(false);
  const [copied, setCopied] = useState(false);

  // Read URL params on mount to support shared links
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get('amount');
    const cur = params.get('currency');
    if (amount) setWithdrawalAmount(amount);
    if (cur && CURRENCIES[cur]) setCurrency(cur);
    // card param is handled after fxRates load — see card selector
  }, []);

  const handleShare = useCallback(() => {
    const params = new URLSearchParams();
    params.set('amount', withdrawalAmount);
    params.set('currency', currency);
    if (selectedCard) params.set('card', selectedCard.id);
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [withdrawalAmount, currency, selectedCard]);

  const [fxRates, setFxRates] = useState<Record<string, number> | null>(null);
  const [fxLoading, setFxLoading] = useState(true);
  const [fxError, setFxError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const [fxLastUpdated, setFxLastUpdated] = useState<string>(''); // formatted timestamp string

  const [result, setResult] = useState<CalculationResult | null>(null);

  // Fetch FX rates on mount
  const loadRates = useCallback(async () => {
    setFxLoading(true);
    setFxError(false);
    try {
      const result = await fetchThbRates();
      setFxRates(result.rates);
      setUsingFallback(isFallbackRate(result.rates));
      setFxLastUpdated(result.fetchedAt ? formatFetchedAt(result.fetchedAt) : '');
    } catch {
      setFxError(true);
      setFxRates(FALLBACK_RATES);
      setUsingFallback(true);
      setFxLastUpdated('');
    } finally {
      setFxLoading(false);
    }
  }, []);

  useEffect(() => { loadRates(); }, [loadRates]);

  // Recalculate whenever inputs change
  useEffect(() => {
    if (!fxRates) return;
    const spotRate = fxRates[currency];
    if (!spotRate) return;

    const calc = calculate({
      withdrawalAmountTHB: parseFloat(withdrawalAmount) || 0,
      thaiAtmFeeTHB: parseFloat(thaiAtmFee) || 0,
      atmLimitTHB: parseFloat(atmLimit) || DEFAULT_ATM_LIMIT_THB,
      currency,
      spotRateTHBperUnit: spotRate,
      card: selectedCard,
      allRates: fxRates,
    });
    setResult(calc);
  }, [withdrawalAmount, currency, selectedCard, thaiAtmFee, atmLimit, fxRates]);

  const spotRate = fxRates?.[currency];
  const hasResult = result !== null;

  // Russia warning
  const showRussiaWarning = currency === 'RUB';
  const showChinaNote = currency === 'CNY';
  const showTurkeyNote = currency === 'TRY';

  return (
    <div className="bg-brand-surface rounded-xl border border-border/60 shadow-sm overflow-hidden">
      {/* Calculator inputs */}
      <div className="p-5 sm:p-6 space-y-5">

        {/* FX rate status bar — timestamp when live, error/fallback notice otherwise */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            {fxLoading ? (
              <><Loader2 className="w-3 h-3 animate-spin" /> Loading rates...</>
            ) : fxError ? (
              <><AlertCircle className="w-3 h-3 text-worse" /> Using approximate rates (live fetch failed)</>
            ) : usingFallback ? (
              <><AlertCircle className="w-3 h-3 text-worse" /> Using approximate rates</>
            ) : fxLastUpdated ? (
              <span className="text-muted-foreground/70">Rates updated: {fxLastUpdated}</span>
            ) : null}
          </div>
          {!fxLoading && (
            <button
              onClick={loadRates}
              className="flex items-center gap-1 hover:text-foreground transition-colors ml-auto"
              aria-label="Refresh rates"
            >
              <RefreshCw className="w-3 h-3" /> Refresh
            </button>
          )}
        </div>

        {/* Row 1: Withdrawal amount + Currency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-foreground/80">
              Cash to withdraw (THB)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-mono">฿</span>
              <input
                type="number"
                min="0"
                step="100"
                value={withdrawalAmount}
                onChange={e => setWithdrawalAmount(e.target.value)}
                placeholder="3500"
                className="w-full pl-7 pr-3 py-2.5 rounded-md border border-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <p className="text-xs text-muted-foreground">Thai ATMs typically dispense in multiples of 100 THB</p>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-foreground/80">
              Your home currency
            </label>
            <select
              value={currency}
              onChange={e => { setCurrency(e.target.value); setSelectedCard(null); }}
              className="w-full px-3 py-2.5 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
            >
              {CURRENCY_OPTIONS.map(opt => (
                <option key={opt.code} value={opt.code}>{opt.label}</option>
              ))}
            </select>
            {spotRate && !fxLoading && (
              <p className="text-xs text-muted-foreground font-mono">
                Spot: 1 {currency} ≈ {spotRate.toFixed(4)} THB
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Bank/card selector */}
        <BankCardSelector
          currency={currency}
          selectedCard={selectedCard}
          onSelect={setSelectedCard}
          onRequestBank={() => {}}
        />

        {/* ATM fee override */}
        <div>
          <button
            type="button"
            onClick={() => setShowAtmFeeOverride(o => !o)}
            className="text-xs text-brand underline underline-offset-2 hover:text-brand/80 transition-colors"
          >
            {showAtmFeeOverride ? 'Hide' : 'Change'} Thai ATM settings (fee: 250 THB, limit: 20,000 THB)
          </button>
          {showAtmFeeOverride && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-mono">฿</span>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={thaiAtmFee}
                    onChange={e => setThaiAtmFee(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 rounded-md border border-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <span className="text-xs text-muted-foreground">per-transaction fee (most Thai ATMs: 220–250 THB; AEON: 150 THB)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-mono">฿</span>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    value={atmLimit}
                    onChange={e => setAtmLimit(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 rounded-md border border-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <span className="text-xs text-muted-foreground">per-transaction limit (most Thai ATMs: 20,000–30,000 THB)</span>
              </div>
            </div>
          )}
        </div>

        {/* Warnings */}
        {showRussiaWarning && (
          <div className="flex items-start gap-2 text-xs bg-worse-surface border border-worse/20 rounded-md px-3 py-2.5 text-foreground/80">
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-worse" />
            <span>
              <strong>Russia:</strong> Visa and Mastercard suspended operations in Russia in 2022. Russian Mir cards have very limited acceptance at Thai ATMs. Check with your bank before travelling.
            </span>
          </div>
        )}
        {showChinaNote && (
          <div className="flex items-start gap-2 text-xs bg-muted/40 border border-border rounded-md px-3 py-2.5 text-foreground/70">
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" />
            <span>
              <strong>China UnionPay:</strong> UnionPay typically does not offer DCC at Thai ATMs — the "with conversion" scenario may not apply. The "without conversion" result is the most relevant.
            </span>
          </div>
        )}
        {showTurkeyNote && (
          <div className="flex items-start gap-2 text-xs bg-muted/40 border border-border rounded-md px-3 py-2.5 text-foreground/70">
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" />
            <span>
              <strong>Turkey (TRY):</strong> Turkish bank fees shown include the flat overseas ATM fee. Note that Turkish banks also charge BSMV tax (~5%) on banking fees, which may add a small amount to your actual cost.
            </span>
          </div>
        )}
      </div>

      {/* Results section */}
      {hasResult && result && (
        <div className="border-t border-border/60 bg-white p-5 sm:p-6 space-y-5">
          {/* Results table — primary highlight */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
              Full breakdown
            </h3>
            <ResultsTable
              result={result}
              withdrawalAmountTHB={parseFloat(withdrawalAmount) || 0}
              thaiAtmFeeTHB={parseFloat(thaiAtmFee) || 0}
            />
          </div>

          {/* Recommendation box — below the table */}
          <RecommendationBox result={result} />

          {/* Share button */}
          <div className="flex justify-end">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-brand hover:text-brand/80 transition-colors font-medium"
            >
              {copied ? (
                <><Check className="w-3.5 h-3.5" /> Link copied!</>
              ) : (
                <><Share2 className="w-3.5 h-3.5" /> Share this result</>
              )}
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground border-t border-border pt-3">
            Results are estimates based on published fee schedules and live mid-market exchange rates.
            Actual charges may vary. FX rates are estimated using card network and DCC multipliers derived
            from real transaction data. Last fee verification: {result.withoutConversion ? 'March 2026' : ''}.{' '}
            {result.usingDefaultProfile && `Using ${result.defaultProfileBasis}.`}
          </p>
        </div>
      )}

      {/* Loading state */}
      {fxLoading && (
        <div className="border-t border-border/60 bg-white p-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Loader2 className="w-4 h-4 animate-spin" />
          Fetching live exchange rates...
        </div>
      )}

    </div>
  );
}
