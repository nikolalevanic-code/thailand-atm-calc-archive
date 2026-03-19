/**
 * FX Rate Fetcher — Daily Cache
 * Design: Calm Fintech Utility
 *
 * Fetches THB exchange rates from exchangerate-api.com (free tier, no key needed).
 * Caches in localStorage for 24 hours to avoid hammering the API.
 * Returns: THB per 1 unit of home currency (e.g. AUD: ~22.1 means 1 AUD = 22.1 THB)
 */

const CACHE_KEY = 'thb_fx_rates_v1';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface FxCacheEntry {
  rates: Record<string, number>; // currency -> THB per 1 unit
  fetchedAt: number;
}

interface ExchangeRateApiResponse {
  result: string;
  base_code: string;
  rates: Record<string, number>;
}

function loadCache(): FxCacheEntry | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: FxCacheEntry = JSON.parse(raw);
    if (Date.now() - entry.fetchedAt > CACHE_TTL_MS) return null;
    return entry;
  } catch {
    return null;
  }
}

function saveCache(rates: Record<string, number>): void {
  try {
    const entry: FxCacheEntry = { rates, fetchedAt: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage might be unavailable in some contexts
  }
}

/**
 * Fetch THB-based rates for all supported currencies.
 * Returns a map: currency -> THB per 1 unit of that currency
 * e.g. { AUD: 22.1, USD: 34.5, ... }
 */
export async function fetchThbRates(): Promise<Record<string, number>> {
  // Check cache first
  const cached = loadCache();
  if (cached) return cached.rates;

  try {
    // Primary: exchangerate-api.com (no key needed for basic endpoint)
    const res = await fetch('https://open.er-api.com/v6/latest/THB');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: ExchangeRateApiResponse = await res.json();

    if (data.result !== 'success') throw new Error('API returned non-success');

    // data.rates gives: 1 THB = X units of other currency
    // We want: 1 unit of other currency = Y THB
    // So: thbPerUnit = 1 / data.rates[currency]
    const thbRates: Record<string, number> = {};
    for (const [currency, rateFromThb] of Object.entries(data.rates)) {
      if (rateFromThb > 0) {
        thbRates[currency] = 1 / rateFromThb;
      }
    }

    saveCache(thbRates);
    return thbRates;
  } catch (primaryError) {
    console.warn('Primary FX API failed, trying fallback:', primaryError);

    try {
      // Fallback: exchangerate-api.com v4 endpoint
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/THB');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const thbRates: Record<string, number> = {};
      for (const [currency, rateFromThb] of Object.entries(data.rates as Record<string, number>)) {
        if (rateFromThb > 0) {
          thbRates[currency] = 1 / rateFromThb;
        }
      }

      saveCache(thbRates);
      return thbRates;
    } catch (fallbackError) {
      console.error('Both FX APIs failed:', fallbackError);
      // Return hardcoded fallback rates (approximate, clearly labelled as stale)
      return FALLBACK_RATES;
    }
  }
}

/** Hardcoded approximate rates as last-resort fallback (March 2026 approximate) */
export const FALLBACK_RATES: Record<string, number> = {
  AUD: 21.8,
  CNY: 4.7,
  EUR: 36.2,
  GBP: 43.1,
  HKD: 4.4,
  INR: 0.40,
  JPY: 0.23,
  KRW: 0.025,
  MYR: 7.8,
  RUB: 0.38,
  SGD: 26.5,
  TWD: 1.07,
  USD: 34.5,
};

export function isFallbackRate(rates: Record<string, number>): boolean {
  // If AUD rate matches fallback exactly, we're using fallback
  return rates['AUD'] === FALLBACK_RATES['AUD'];
}
