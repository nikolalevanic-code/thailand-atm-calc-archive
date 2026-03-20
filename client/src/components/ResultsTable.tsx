/**
 * ResultsTable — Side-by-side comparison table
 * Design: Calm Fintech Utility
 * Matches the layout from the reference CommBank screenshot.
 * "Without conversion" column highlighted in teal when it's the better choice.
 */

import { CalculationResult } from '@/lib/calculator';
import { formatCurrency, getCurrencySymbol } from '@/lib/cardData';

interface ResultsTableProps {
  result: CalculationResult;
  withdrawalAmountTHB: number;
  thaiAtmFeeTHB: number;
}

function Row({
  label,
  withoutVal,
  withVal,
  isWithoutBetter,
  bold = false,
  highlight = false,
  subtext,
}: {
  label: string;
  withoutVal: string;
  withVal: string;
  isWithoutBetter: boolean;
  bold?: boolean;
  highlight?: boolean;
  subtext?: string;
}) {
  return (
    <tr className={`border-b border-border last:border-0 ${highlight ? 'bg-muted/30 border-t-2 border-t-border' : ''}`}>
      <td className={`pr-4 text-foreground/80 align-top w-[40%] ${highlight ? 'py-4 text-base' : 'py-3 text-sm'}`}>
        <span className={bold ? 'font-bold text-foreground' : ''}>{label}</span>
        {subtext && <div className="text-xs text-muted-foreground mt-0.5">{subtext}</div>}
      </td>
      <td className={`px-3 text-right align-top w-[30%] ${
        highlight
          ? (isWithoutBetter ? 'py-4 text-base text-better font-bold' : 'py-4 text-base font-bold')
          : bold ? 'py-3 text-sm font-semibold' : 'py-3 text-sm'
      }`}>
        {withoutVal}
      </td>
      <td className={`pl-3 text-right align-top w-[30%] ${
        highlight
          ? (!isWithoutBetter ? 'py-4 text-base text-better font-bold' : 'py-4 text-base font-bold')
          : bold ? 'py-3 text-sm font-semibold' : 'py-3 text-sm'
      }`}>
        {withVal}
      </td>
    </tr>
  );
}

export default function ResultsTable({ result, withdrawalAmountTHB, thaiAtmFeeTHB }: ResultsTableProps) {
  const { withoutConversion: wo, withConversion: wc, currency, isWithoutBetter } = result;
  const sym = getCurrencySymbol(currency);

  function fmt(n: number, decimals = 2) {
    return formatCurrency(n, currency, decimals);
  }

  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full min-w-[420px]">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="pb-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide w-[40%]">
              Item
            </th>
            <th className={`pb-2 text-right text-xs font-semibold uppercase tracking-wide w-[30%] px-3 ${
              isWithoutBetter ? 'text-better' : 'text-muted-foreground'
            }`}>
              <div>Without conversion</div>
              {isWithoutBetter && (
                <div className="text-[10px] normal-case font-normal mt-0.5 text-better">
                  ✓ Recommended
                </div>
              )}
            </th>
            <th className={`pb-2 text-right text-xs font-semibold uppercase tracking-wide w-[30%] pl-3 ${
              !isWithoutBetter ? 'text-better' : 'text-muted-foreground'
            }`}>
              <div>With conversion</div>
              {!isWithoutBetter && (
                <div className="text-[10px] normal-case font-normal mt-0.5 text-better">
                  ✓ Recommended
                </div>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          <Row
            label="Cash requested"
            withoutVal={`${withdrawalAmountTHB.toLocaleString()} THB`}
            withVal={`${withdrawalAmountTHB.toLocaleString()} THB`}
            isWithoutBetter={isWithoutBetter}
          />
          <Row
            label="Thai ATM access fee"
            withoutVal={`${thaiAtmFeeTHB.toLocaleString()} THB`}
            withVal={`${thaiAtmFeeTHB.toLocaleString()} THB`}
            isWithoutBetter={isWithoutBetter}
          />
          <Row
            label="Total ATM amount"
            withoutVal={`${result.totalTHB.toLocaleString()} THB`}
            withVal={`${result.totalTHB.toLocaleString()} THB`}
            isWithoutBetter={isWithoutBetter}
          />
          <Row
            label="FX method"
            withoutVal={`Card network converts THB to ${currency}`}
            withVal={`ATM converts to ${currency} (DCC)`}
            isWithoutBetter={isWithoutBetter}
          />
          <Row
            label="FX rate used"
            withoutVal={`1 ${currency} = ${wo.fxRate.toFixed(4)} THB`}
            withVal={`1 ${currency} = ${wc.fxRate.toFixed(4)} THB`}
            isWithoutBetter={isWithoutBetter}
            subtext="Estimated"
          />
          <Row
            label={`Base amount before card fees`}
            withoutVal={fmt(wo.baseAmountHome)}
            withVal={fmt(wc.baseAmountHome)}
            isWithoutBetter={isWithoutBetter}
          />
          {(wo.fixedFeeHome > 0 || wc.fixedFeeHome > 0) && (
            <Row
              label={`Fixed ATM fee`}
              withoutVal={fmt(wo.fixedFeeHome)}
              withVal={fmt(wc.fixedFeeHome)}
              isWithoutBetter={isWithoutBetter}
            />
          )}
          {(wo.percentageFeeHome > 0 || wc.percentageFeeHome > 0) && (
            <Row
              label={`% ATM withdrawal fee`}
              withoutVal={fmt(wo.percentageFeeHome)}
              withVal={fmt(wc.percentageFeeHome)}
              isWithoutBetter={isWithoutBetter}
            />
          )}
          {(wo.fxFeeHome > 0 || wc.fxFeeHome > 0) && (
            <Row
              label={`Foreign transaction / FX fee`}
              withoutVal={fmt(wo.fxFeeHome)}
              withVal={fmt(wc.fxFeeHome)}
              isWithoutBetter={isWithoutBetter}
            />
          )}
          <Row
            label={`Total card fees`}
            withoutVal={fmt(wo.totalCardFeeHome)}
            withVal={fmt(wc.totalCardFeeHome)}
            isWithoutBetter={isWithoutBetter}
          />
          <Row
            label="Total estimated cost to you"
            withoutVal={`${fmt(wo.totalHome)} ${currency}`}
            withVal={`${fmt(wc.totalHome)} ${currency}`}
            isWithoutBetter={isWithoutBetter}
            bold
            highlight
          />
        </tbody>
      </table>
    </div>
  );
}
