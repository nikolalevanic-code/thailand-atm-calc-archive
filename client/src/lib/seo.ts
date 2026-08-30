/**
 * SEO Metadata Helpers
 * Keeps browser-route metadata aligned with the calm, factual positioning of the public calculator.
 */

import { useEffect } from 'react';

export const SITE_URL = 'https://www.thailand-atm-calculator.com';

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  const previous = element.content;
  element.content = content;
  return () => {
    element!.content = previous;
  };
}

/** Updates route-specific metadata after client-side navigation. */
export function useSeoMeta({ title, description, path, type = 'website' }: SeoMeta) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const previousTitle = document.title;
    document.title = title;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = url;

    const cleanups = [
      upsertMeta('meta[name="description"]', 'name', 'description', description),
      upsertMeta('meta[property="og:title"]', 'property', 'og:title', title),
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description),
      upsertMeta('meta[property="og:url"]', 'property', 'og:url', url),
      upsertMeta('meta[property="og:type"]', 'property', 'og:type', type),
      upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title),
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description),
    ];

    return () => {
      document.title = previousTitle;
      canonical!.href = previousCanonical;
      cleanups.forEach(cleanup => cleanup());
    };
  }, [title, description, path, type]);
}
