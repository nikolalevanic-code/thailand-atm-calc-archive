/**
 * Calculator Logic — Pure Functions
 * Design: Calm Fintech Utility
 *
 * Calibration (from actual CommBank transaction, Feb 3 2026):
 *   Spot AUD/THB on Feb 3 2026: 22.2197
 *   Without conversion effective rate: 21.7328 THB/AUD → 21.7328/22.2197 = 0.9781 of spot (~2.19% worse)
 *   With conversion (DCC) quoted rate: 20.6613 THB/AUD → 20.6613/22.2197 = 0.9298 of spot (~7.02% worse)
 *
 *   card_network_rate = spot_rate × 0.978  (~2.2% worse than spot — card network margin)
 *   atm_dcc_rate      = spot_rate × 0.930  (~7.0% worse than spot — DCC margin)
 *
 * Formula:
 *   total_thb = withdrawal_amount + thai_atm_fee
 *   base_amount = total_thb / fx_rate
 *   card_fee = fixed_fee + (base_amount × pct_fee) + (base_amount × fx_fee)
 *   total = base_amount + card_fee
 */

import { CardProfile, DEFAULT_PROFILES } from './cardData';

export const CARD_NETWORK_MULTIPLIER = 0.978; // card network takes ~2.2% margin vs spot
export const ATM_DCC_MULTIPLIER = 0.930;       // DCC takes ~7.0% margin vs spot
export const DEFAULT_THAI_ATM_FEE = 250; // THB

export const DEFAULT_ATM_LIMIT_THB = 20000; // conservative default — most Thai ATMs: 20,000–30,000 THB

export interface CalculatorInputs {
  withdrawalAmountTHB: number;
  thaiAtmFeeTHB: number;
  atmLimitTHB: number; // per-transaction limit of the Thai ATM
  currency: string;
  spotRateTHBperUnit: number; // how many THB per 1 unit of home currency
  card: CardProfile | null;
  allRates?: Record<string, number>; // all THB rates, used to convert cross-currency fixed fees
}

export interface ScenarioResult {
  fxRate: number;             // THB per 1 unit of home currency
  baseAmountHome: number;     // total_thb / fx_rate (before card fees)
  fixedFeeHome: number;       // fixed ATM fee in home currency
  percentageFeeHome: number;  // % ATM fee applied to base amount
  fxFeeHome: number;          // FX/foreign transaction fee
  totalCardFeeHome: number;   // sum of all card fees
  totalHome: number;          // base + all fees
  fxRateLabel: string;
}

export interface CalculationResult {
  withoutConversion: ScenarioResult;
  withConversion: ScenarioResult;
  savingsHome: number;        // positive = without conversion is cheaper
  savingsTHB: number;
  padKraPao: number;          // savings / 70 THB
  currency: string;
  totalTHB: number;
  isWithoutBetter: boolean;
  usingDefaultProfile: boolean;
  defaultProfileBasis?: string;
  numTransactions: number;    // number of ATM transactions required
  totalAtmFeeTHB: number;     // total ATM fee across all transactions
}

function getCardFees(card: CardProfile | null, currency: string): {
  fixedFee: number;
  fixedFeeCurrency: string;
  pctFee: number;
  fxFee: number;
} {
  if (card) {
    return {
      fixedFee: card.fixed_foreign_atm_fee ?? 0,
      fixedFeeCurrency: card.fixed_foreign_atm_fee_currency || currency,
      pctFee: card.percentage_foreign_atm_fee ?? 0,
      fxFee: (card.foreign_transaction_fee_pct ?? 0) + (card.extra_fx_markup_pct ?? 0),
    };
  }
  const def = DEFAULT_PROFILES[currency];
  if (!def) return { fixedFee: 0, fixedFeeCurrency: currency, pctFee: 0, fxFee: 0 };
  return {
    fixedFee: def.fixed_fee,
    fixedFeeCurrency: def.fixed_fee_currency,
    pctFee: def.pct_fee,
    fxFee: def.fx_fee,
  };
}

function calcScenario(
  totalTHB: number,
  fxRate: number,
  fixedFeeHome: number,
  pctFee: number,
  fxFee: number,
  fxRateLabel: string
): ScenarioResult {
  const baseAmountHome = totalTHB / fxRate;
  const percentageFeeHome = baseAmountHome * pctFee;
  const fxFeeHome = baseAmountHome * fxFee;
  const totalCardFeeHome = fixedFeeHome + percentageFeeHome + fxFeeHome;
  const totalHome = baseAmountHome + totalCardFeeHome;

  return {
    fxRate,
    baseAmountHome,
    fixedFeeHome,
    percentageFeeHome,
    fxFeeHome,
    totalCardFeeHome,
    totalHome,
    fxRateLabel,
  };
}

export function calculate(inputs: CalculatorInputs): CalculationResult | null {
  const { withdrawalAmountTHB, thaiAtmFeeTHB, atmLimitTHB, currency, spotRateTHBperUnit, card } = inputs;

  if (!withdrawalAmountTHB || withdrawalAmountTHB <= 0 || !spotRateTHBperUnit || spotRateTHBperUnit <= 0) {
    return null;
  }

  // Calculate number of transactions needed based on ATM per-transaction limit
  const effectiveLimit = atmLimitTHB > 0 ? atmLimitTHB : DEFAULT_ATM_LIMIT_THB;
  const numTransactions = Math.ceil(withdrawalAmountTHB / effectiveLimit);
  const totalAtmFeeTHB = thaiAtmFeeTHB * numTransactions;

  const totalTHB = withdrawalAmountTHB + totalAtmFeeTHB;

  const cardNetworkRate = spotRateTHBperUnit * CARD_NETWORK_MULTIPLIER;
  const atmDccRate = spotRateTHBperUnit * ATM_DCC_MULTIPLIER;

  const { fixedFee, fixedFeeCurrency, pctFee, fxFee } = getCardFees(card, currency);

  // Convert fixed fee to home currency
  // Some cards (e.g. Turkish banks) charge fixed fees in USD — convert via THB cross-rate
  let fixedFeeHome = fixedFee;
  if (fixedFeeCurrency !== currency && fixedFee > 0) {
    const rates = inputs.allRates || {};
    const feeCurrencyThb = rates[fixedFeeCurrency]; // THB per 1 unit of fee currency (e.g. USD)
    const homeCurrencyThb = spotRateTHBperUnit;      // THB per 1 unit of home currency
    if (feeCurrencyThb && homeCurrencyThb > 0) {
      // Convert: fee in feeCurrency -> THB -> home currency
      fixedFeeHome = (fixedFee * feeCurrencyThb) / homeCurrencyThb;
    }
  }

  const withoutConversion = calcScenario(
    totalTHB,
    cardNetworkRate,
    fixedFeeHome,
    pctFee,
    fxFee,
    `Card network rate: 1 ${currency} = ${cardNetworkRate.toFixed(4)} THB`
  );

  const withConversion = calcScenario(
    totalTHB,
    atmDccRate,
    fixedFeeHome,
    pctFee,
    fxFee,
    `ATM DCC rate: 1 ${currency} = ${atmDccRate.toFixed(4)} THB`
  );

  const savingsHome = withConversion.totalHome - withoutConversion.totalHome;
  const savingsTHB = savingsHome * cardNetworkRate;
  const padKraPao = Math.max(0, Math.round(savingsTHB / 70));

  const usingDefaultProfile = !card;
  const defaultProfileBasis = usingDefaultProfile ? DEFAULT_PROFILES[currency]?.basis : undefined;

  return {
    withoutConversion,
    withConversion,
    savingsHome,
    savingsTHB,
    padKraPao,
    currency,
    totalTHB,
    isWithoutBetter: savingsHome > 0,
    usingDefaultProfile,
    defaultProfileBasis,
    numTransactions,
    totalAtmFeeTHB,
  };
}
