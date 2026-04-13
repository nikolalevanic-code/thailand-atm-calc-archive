/**
 * Card Data Module
 * Loads the 102-card database and provides typed access + grouping utilities.
 * Design: Calm Fintech Utility — data layer only, no UI concerns.
 */

import rawCards from '../data/cards_database.json';

export interface CardProfile {
  id: string;
  country: string;
  bank_name: string;
  product_name: string;
  network: string;
  home_currency: string;
  fixed_foreign_atm_fee: number | null;
  fixed_foreign_atm_fee_currency: string;
  percentage_foreign_atm_fee: number | null;
  foreign_transaction_fee_pct: number | null;
  extra_fx_markup_pct: number | null;
  notes: string;
  source_url: string;
  source_label: string;
  last_verified_date: string;
  confidence_level: 'high' | 'medium' | 'low';
  card_type: 'consumer_debit' | 'premium_debit' | 'travel_card' | 'digital_bank' | 'credit';
  active: boolean;
}

export const CURRENCIES: Record<string, { label: string; symbol: string; countries: string[] }> = {
  AUD: { label: 'Australian Dollar', symbol: 'A$', countries: ['Australia'] },
  CNY: { label: 'Chinese Yuan', symbol: '¥', countries: ['China'] },
  EUR: { label: 'Euro', symbol: '€', countries: ['France', 'Germany'] },
  HKD: { label: 'Hong Kong Dollar', symbol: 'HK$', countries: ['Hong Kong'] },
  INR: { label: 'Indian Rupee', symbol: '₹', countries: ['India'] },
  JPY: { label: 'Japanese Yen', symbol: '¥', countries: ['Japan'] },
  MYR: { label: 'Malaysian Ringgit', symbol: 'RM', countries: ['Malaysia'] },
  RUB: { label: 'Russian Ruble', symbol: '₽', countries: ['Russia'] },
  SGD: { label: 'Singapore Dollar', symbol: 'S$', countries: ['Singapore'] },
  KRW: { label: 'South Korean Won', symbol: '₩', countries: ['South Korea'] },
  TWD: { label: 'New Taiwan Dollar', symbol: 'NT$', countries: ['Taiwan'] },
  CAD: { label: 'Canadian Dollar', symbol: 'CA$', countries: ['Canada'] },
  NZD: { label: 'New Zealand Dollar', symbol: 'NZ$', countries: ['New Zealand'] },
  GBP: { label: 'British Pound', symbol: '£', countries: ['United Kingdom'] },
  TRY: { label: 'Turkish Lira', symbol: '₺', countries: ['Turkey'] },
  USD: { label: 'US Dollar', symbol: '$', countries: ['United States'] },
};

// Default profiles when no card is selected
export const DEFAULT_PROFILES: Record<string, {
  fixed_fee: number;
  fixed_fee_currency: string;
  pct_fee: number;
  fx_fee: number;
  basis: string;
}> = {
  AUD: { fixed_fee: 5.00, fixed_fee_currency: 'AUD', pct_fee: 0, fx_fee: 0.030, basis: 'Big 4 bank average' },
  CNY: { fixed_fee: 12, fixed_fee_currency: 'CNY', pct_fee: 0.010, fx_fee: 0, basis: 'State bank average (UnionPay)' },
  EUR: { fixed_fee: 5.99, fixed_fee_currency: 'EUR', pct_fee: 0.015, fx_fee: 0.0175, basis: 'Deutsche Bank / Commerzbank average' },
  GBP: { fixed_fee: 1.50, fixed_fee_currency: 'GBP', pct_fee: 0.0275, fx_fee: 0.0275, basis: 'Barclays / NatWest average' },
  HKD: { fixed_fee: 40, fixed_fee_currency: 'HKD', pct_fee: 0.0195, fx_fee: 0, basis: 'HSBC HK / Hang Seng average' },
  INR: { fixed_fee: 125, fixed_fee_currency: 'INR', pct_fee: 0.035, fx_fee: 0.035, basis: 'SBI / HDFC / ICICI average' },
  JPY: { fixed_fee: 110, fixed_fee_currency: 'JPY', pct_fee: 0.035, fx_fee: 0, basis: 'Japan Post / Seven Bank average' },
  KRW: { fixed_fee: 3000, fixed_fee_currency: 'KRW', pct_fee: 0.010, fx_fee: 0, basis: 'KB Kookmin average' },
  MYR: { fixed_fee: 12, fixed_fee_currency: 'MYR', pct_fee: 0, fx_fee: 0.010, basis: 'Maybank / CIMB average' },
  RUB: { fixed_fee: 100, fixed_fee_currency: 'RUB', pct_fee: 0.015, fx_fee: 0, basis: 'VTB Mir card average' },
  SGD: { fixed_fee: 7.00, fixed_fee_currency: 'SGD', pct_fee: 0, fx_fee: 0.0325, basis: 'DBS average' },
  TWD: { fixed_fee: 70, fixed_fee_currency: 'TWD', pct_fee: 0.011, fx_fee: 0.015, basis: 'Cathay / Fubon average' },
  CAD: { fixed_fee: 5.00, fixed_fee_currency: 'CAD', pct_fee: 0, fx_fee: 0.025, basis: 'TD / RBC average' },
  NZD: { fixed_fee: 5.00, fixed_fee_currency: 'NZD', pct_fee: 0, fx_fee: 0.025, basis: 'ANZ NZ / Westpac NZ average' },
  TRY: { fixed_fee: 3.00, fixed_fee_currency: 'USD', pct_fee: 0, fx_fee: 0.025, basis: 'İş Bankası / Yapı Kredi average' },
  USD: { fixed_fee: 5.00, fixed_fee_currency: 'USD', pct_fee: 0, fx_fee: 0.030, basis: 'Chase / BofA average' },
};

export const allCards: CardProfile[] = (rawCards as CardProfile[]).filter(c => c.active);

/** Group cards by currency, then by bank */
export function getCardsByCurrency(currency: string): CardProfile[] {
  return allCards.filter(c => c.home_currency === currency);
}

/** Group cards by bank name within a currency */
export function getCardsByBank(currency: string): Record<string, CardProfile[]> {
  const cards = getCardsByCurrency(currency);
  const grouped: Record<string, CardProfile[]> = {};
  for (const card of cards) {
    if (!grouped[card.bank_name]) grouped[card.bank_name] = [];
    grouped[card.bank_name].push(card);
  }
  return grouped;
}

export function formatCurrency(amount: number, currency: string, decimals = 2): string {
  const info = CURRENCIES[currency];
  const symbol = info?.symbol ?? currency + ' ';
  if (currency === 'JPY' || currency === 'KRW' || currency === 'INR') {
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  }
  return `${symbol}${amount.toFixed(decimals)}`;
}

export function getCurrencySymbol(currency: string): string {
  return CURRENCIES[currency]?.symbol ?? currency;
}

export const CARD_TYPE_LABELS: Record<string, string> = {
  consumer_debit: 'Standard Debit',
  premium_debit: 'Premium Debit',
  travel_card: 'Travel Card',
  digital_bank: 'Digital / Fintech',
  credit: 'Credit Card',
};
