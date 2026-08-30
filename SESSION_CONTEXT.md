# Thailand ATM Calculator — Session Context

**Last updated:** 30 August 2026

## Current state

The public site is live at `https://www.thailand-atm-calculator.com`. The GitHub-connected project was restored at checkpoint `e8705afe`. The calculator covers 102 cards across 17 countries; the site includes six SEO articles and a blog index.

## Latest analytics review

The user supplied a Google Search Console export for 3–9 August 2026. It recorded 50 clicks, 15,711 impressions, 0.32% CTR, and average position 6.5. Compared with the 22 March–27 May baseline, daily clicks rose 12.9× and daily impressions 8.7×. The leading article is `/blog/best-atm-thailand-foreigners`, followed by `/blog/thailand-atm-fees`.

The strongest query opportunity is an AEON/low-fee ATM cluster: 106 queries, 637 impressions, average position 5.0, but only one click. The recommended next content asset is a fully verified AEON ATM Thailand fee/location guide.

## Important technical decisions

1. The current static canonical in `client/index.html` points every route to the homepage. Add self-referencing canonical URLs for each article route before expanding the content cluster further.
2. `sitemap.xml` and `robots.txt` are currently absent from `client/public`; create and submit a sitemap in Google Search Console.
3. Do not rely on FAQPage schema for visible Google rich results. Google removed the FAQ rich-result feature in May 2026. Keep FAQs for readers and answer coverage only.
4. `llms.txt` is harmless but Google states it does not affect Search ranking or visibility. Do not allocate SEO effort to it.

## Suggested next build scope

Implement per-route canonical metadata, `sitemap.xml`, and `robots.txt`; then research and publish a source-backed AEON ATM Thailand guide. When Wise/Revolut affiliate links are approved, add transparent CTAs and measure `calculator_completed`, `card_selected`, `affiliate_cta_view`, and `affiliate_cta_clicked` events.

## Supporting artefact

Detailed report: `analysis/gsc-performance-analysis-2026-08.md`

## Three-month comparison update

The user later supplied a three-month Google Search Console export with comparison enabled. Current period: 286 clicks vs 19 previously (15.1×); 79,349 impressions vs 8,369 (9.5×); CTR 0.36% vs 0.23%. The organic baseline is approximately 95 Google clicks/month.

The strongest pages are Best ATM (136 clicks), Withdrawal Limit (53), homepage calculator (43), and ATM Fees (38). Thailand supplied 141 clicks; mobile supplied 207 clicks. AEON/low-fee/location queries are the largest unfulfilled content cluster: 2,757 impressions, 8 clicks, average position 6.4.

The $500/month goal is not yet near at current organic traffic. Under a $15 realised affiliate commission, 1,700–6,800 monthly visitors are required at a 2.0%–0.5% visitor-to-approved-referral rate. Recommended sequence remains: technical canonicals/sitemap/robots; a verified AEON guide; affiliate funnel tracking and transparent CTAs when links are approved.

Detailed report: `analysis/gsc-three-month-growth-and-revenue-2026-08.md`

## Current 28-day Search Console and Dashboard review

The user provided Last 28 days vs Previous 28 days Search Console exports and Manus Dashboard screenshots. GSC: 208 clicks vs 126 (+65%); 61,017 impressions vs 29,403 (+108%); CTR 0.34% vs 0.43%; average position 6.83 vs 7.85. Strongest current pages: Best ATM (110 clicks), ATM Fees (33), Withdrawal Limit (32), home (16), Wise vs Revolut (10).

Dashboard, Last 30 days: 624 visitors, 678 visits, 804 pageviews, 44s average duration, and 89.7% bounce rate. Google is the largest listed referrer (266); ChatGPT 15 and Claude 5 show early AI-referral traffic; Reddit and Facebook combined show 6. Top Dashboard pages agree with GSC: Best ATM (283 visitors), home (145), ATM Fees (93), Withdrawal Limit (89).

Do not treat the Dashboard’s -86% to -89% headline change as a confirmed traffic collapse without examining prior-period filters, referrer details, or bots; it conflicts with the positive GSC comparison and the dashboard shows 22 “searchbot” browser visits. The need for custom calculator/conversion events is now urgent.

Primary next actions: fix canonical per route and add sitemap/robots; research/publish a source-backed AEON fee and location guide; strengthen ATM Fees/home snippets and mobile article-to-calculator CTA; add transparent affiliate tracking and CTAs when approvals arrive. Detailed report: `analysis/dashboard-and-gsc-review-2026-08.md`.

## Krungthai DCC validation datapoint — 20 August 2026

User supplied a Krungthai Bank ATM DCC screen for SGD: withdrawal 2,000 THB, access fee 250 THB, DCC exchange rate 24.0800 THB/SGD, ATM-disclosed 5% mark-up, and charged amount 93.43 SGD. The image does not identify card network.

Historical SGD/THB close on 20 August was around 25.82–25.83. The observed DCC rate was 6.77% below a 25.8296 market benchmark, closely validating the current DCC multiplier of spot × 0.930 (7% lower): modelled DCC amount 93.67 SGD vs observed 93.43 SGD (0.23 SGD difference). The 250 THB fee corroborates the existing 250 THB Visa-default outcome for this transaction, but cannot independently verify the network rule because card network is absent. No immediate calculation change is required. Detailed report: `analysis/krungthai-sgd-dcc-datapoint-2026-08-20.md`.

## Phase A–C implementation — 30 August 2026

The approved technical/content conversion pass is complete and ready for checkpointing. Phase A: added a route-aware SEO helper, client-side canonical/OG/title/description updates, and server-side canonical/OG/title/description injection for all eight public routes. Created `client/public/sitemap.xml` and `client/public/robots.txt`; production checks confirmed 8 sitemap URLs and correct article canonical HTML.

AEON research uncovered material contradictory evidence: a 2024 phased AEON ATM-service termination notice, no current official foreign-card ATM network/fee schedule in available AEON material, and conflicting community data. The planned AEON fee/location guide was not published. Instead, the prior claims that AEON currently charges 150 THB and is available in specific retailers were removed from the homepage, calculator helper, FAQ, guides, Blog index and `llms.txt`. Current guidance now tells travellers to check the displayed fee and use the manual override. Research note: `analysis/aeon-thailand-atm-research-2026-08.md`.

Phase C: tightened the homepage value proposition, added earlier contextual calculator CTAs on the Best ATM and ATM Fees articles, updated August freshness dates, and applied the visual-review refinements aligned with `ideas.md`: warm-white homepage hero, controlled purple use, DM Serif Display for headings, a responsive desktop ATM-decision checklist, and recurring ฿ guide/divider motif. User’s previously specified no-new-images decision was preserved. TypeScript and production build pass. A post-change mobile screenshot confirms the root and two priority article pages render cleanly. Pending checkpoint/version ID and user publication via the Manus Publish UI.
