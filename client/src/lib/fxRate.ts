/**
 * FX Rate Fetcher — Twice-Daily Cache
 * Design: Calm Fintech Utility
 *
 * Fetches THB exchange rates from exchangerate-api.com (free tier, no key needed).
 * Caches in localStorage for 12 hours to keep rates fresh twice daily.
 * Returns: THB per 1 unit of home currency (e.g. AUD: ~22.1 means 1 AUD = 22.1 THB)
 */

const CACHE_KEY = 'thb_fx_rates_v1';
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours (twice daily)

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

export interface FxRateResult {
  rates: Record<string, number>;
  fetchedAt: number; // unix ms timestamp of when rates were last fetched/cached
}

/**
 * Fetch THB-based rates for all supported currencies.
 * Returns rates map plus the timestamp of when the data was fetched.
 * e.g. { rates: { AUD: 22.1, USD: 34.5, ... }, fetchedAt: 1711234567890 }
 */
export async function fetchThbRates(): Promise<FxRateResult> {
  // Check cache first
  const cached = loadCache();
  if (cached) return { rates: cached.rates, fetchedAt: cached.fetchedAt };

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
    const now = Date.now();
    return { rates: thbRates, fetchedAt: now };
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
      const now = Date.now();
      return { rates: thbRates, fetchedAt: now };
    } catch (fallbackError) {
      console.error('Both FX APIs failed:', fallbackError);
      // Return hardcoded fallback rates (approximate, clearly labelled as stale)
      return { rates: FALLBACK_RATES, fetchedAt: 0 };
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
  TRY: 0.95,
  TWD: 1.07,
  USD: 34.5,
  CAD: 25.5,
  NZD: 20.0,
};

export function isFallbackRate(rates: Record<string, number>): boolean {
  // If AUD rate matches fallback exactly, we're using fallback
  return rates['AUD'] === FALLBACK_RATES['AUD'];
}

/** Format a fetchedAt timestamp for display in the UI */
export function formatFetchedAt(fetchedAt: number): string {
  if (!fetchedAt) return '';
  const d = new Date(fetchedAt);
  const formatted = d.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Bangkok',
  });
  return `${formatted} (Thailand time, GMT+7)`;
}
