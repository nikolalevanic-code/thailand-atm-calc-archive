/**
 * Calculator Logic — Pure Functions
 * Design: Calm Fintech Utility
 *
 * Calibration (from actual CommBank transaction, Feb 3 2026):
 *   card_network_rate = spot_rate × 1.011  (~1.1% better than spot)
 *   atm_dcc_rate      = spot_rate × 0.960  (~4% worse than spot)
 *
 * Formula:
 *   total_thb = withdrawal_amount + thai_atm_fee
 *   base_amount = total_thb / fx_rate
 *   card_fee = fixed_fee + (base_amount × pct_fee) + (base_amount × fx_fee)
 *   total = base_amount + card_fee
 */

import { CardProfile, DEFAULT_PROFILES } from './cardData';

export const CARD_NETWORK_MULTIPLIER = 1.011;
export const ATM_DCC_MULTIPLIER = 0.960;
export const DEFAULT_THAI_ATM_FEE = 250; // THB

export interface CalculatorInputs {
  withdrawalAmountTHB: number;
  thaiAtmFeeTHB: number;
  currency: string;
  spotRateTHBperUnit: number; // how many THB per 1 unit of home currency
  card: CardProfile | null;
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
  const { withdrawalAmountTHB, thaiAtmFeeTHB, currency, spotRateTHBperUnit, card } = inputs;

  if (!withdrawalAmountTHB || withdrawalAmountTHB <= 0 || !spotRateTHBperUnit || spotRateTHBperUnit <= 0) {
    return null;
  }

  const totalTHB = withdrawalAmountTHB + thaiAtmFeeTHB;

  const cardNetworkRate = spotRateTHBperUnit * CARD_NETWORK_MULTIPLIER;
  const atmDccRate = spotRateTHBperUnit * ATM_DCC_MULTIPLIER;

  const { fixedFee, fixedFeeCurrency, pctFee, fxFee } = getCardFees(card, currency);

  // Convert fixed fee to home currency (it's already in home currency for most cards)
  // If fixed fee currency differs from home currency, we'd need conversion — for V1 assume same
  const fixedFeeHome = fixedFee;

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
  };
}
