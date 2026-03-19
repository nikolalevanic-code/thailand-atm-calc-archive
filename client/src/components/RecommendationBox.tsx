/**
 * RecommendationBox — Savings summary with Pad Kra Pao count
 * Design: Calm Fintech Utility
 * Prominent savings pill + clear recommendation + fun Pad Kra Pao metric.
 */

import { CalculationResult } from '@/lib/calculator';
import { formatCurrency } from '@/lib/cardData';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface RecommendationBoxProps {
  result: CalculationResult;
}

export default function RecommendationBox({ result }: RecommendationBoxProps) {
  const { isWithoutBetter, savingsHome, savingsTHB, padKraPao, currency, usingDefaultProfile, defaultProfileBasis } = result;

  const savingsAbs = Math.abs(savingsHome);
  const savingsTHBAbs = Math.abs(savingsTHB);
  const isMeaningful = savingsAbs >= 0.01;

  const betterChoice = isWithoutBetter ? "Decline the ATM\u2019s conversion offer" : "Accept the ATM\u2019s conversion offer";
  const betterLabel = isWithoutBetter ? 'Without conversion' : 'With conversion';

  return (
    <div className={`rounded-lg border-2 p-5 space-y-4 animate-scale-in ${
      isWithoutBetter
        ? 'border-better bg-better-surface'
        : 'border-worse bg-worse-surface'
    }`}>
      {/* Header */}
      <div className="flex items-start gap-3">
        <CheckCircle className={`w-6 h-6 mt-0.5 shrink-0 ${isWithoutBetter ? 'text-better' : 'text-worse'}`} />
        <div>
          <p className="font-semibold text-foreground text-base leading-snug">
            {betterChoice}
          </p>
          <p className="text-sm text-foreground/70 mt-0.5">
            <span className={`font-semibold ${isWithoutBetter ? 'text-better' : 'text-worse'}`}>{betterLabel}</span>{' '}
            is the cheaper option for this withdrawal.
          </p>
        </div>
      </div>

      {/* Savings pill */}
      {isMeaningful && (
        <div className="flex flex-wrap items-center gap-3">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white text-sm ${
            isWithoutBetter ? 'bg-better' : 'bg-worse'
          }`}>
            Save {formatCurrency(savingsAbs, currency)} {currency}
          </div>
          <div className="text-sm text-foreground/70">
            ≈ {Math.round(savingsTHBAbs).toLocaleString()} THB
          </div>
        </div>
      )}

      {/* Pad Kra Pao metric */}
      {padKraPao >= 1 && (
        <div className="flex items-center gap-2 text-sm text-foreground/80 bg-white/60 rounded-md px-3 py-2">
          <span className="text-lg">🍳</span>
          <span>
            That's roughly <strong>{padKraPao} plate{padKraPao > 1 ? 's' : ''} of Pad Kra Pao</strong> saved
            <span className="text-muted-foreground"> (at ~70 THB each)</span>
          </span>
        </div>
      )}

      {/* Default profile notice */}
      {usingDefaultProfile && (
        <div className="flex items-start gap-2 text-xs text-foreground/60 bg-white/50 rounded px-3 py-2">
          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-worse" />
          <span>
            Using estimated fees based on <em>{defaultProfileBasis}</em>. Select your specific card above for a more accurate result.
          </span>
        </div>
      )}
    </div>
  );
}
