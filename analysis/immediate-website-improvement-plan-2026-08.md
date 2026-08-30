# Thailand ATM Calculator — Immediate Website-Improvement Plan

**Status:** Proposed for approval. No production website changes are included in this plan.  
**Planning basis:** Latest Google Search Console and Manus Dashboard analysis, plus the 20 August Krungthai DCC validation datapoint.

## 1. Intent

The next build cycle should improve the site’s ability to convert its growing search visibility into qualified calculator use and, later, transparent affiliate revenue. The plan deliberately focuses on the subjects the data already validates: travellers searching for the **best or cheapest ATM in Thailand**, **ATM fees**, **withdrawal limits**, and particularly **AEON foreign-card fees and locations**.

This is not a broad content-marketing programme. It is a narrow, measured sequence that removes technical SEO ambiguity, fulfils a demonstrated search need, improves the mobile journey into the calculator, and creates a clean foundation for monetisation measurement.

## 2. Success criteria

The first 90 days should aim to establish four observable outcomes rather than promise a revenue figure.

| Outcome | Observable success measure | Current reference point |
|---|---|---:|
| Crawl clarity | Search Console reports the intended, self-referencing canonical for every public page; sitemap is successfully read. | Static homepage canonical currently applies at application level. |
| High-intent content coverage | New AEON guide is indexed and receives impressions for AEON/low-fee/location queries. | AEON cluster: 2,001 impressions; 0.35% CTR; average position 5.2. |
| Search efficiency | The `Thailand ATM Fees` page and homepage show improved 28-day CTR versus their immediately prior 28 days. | 0.16% and 0.34% respectively. |
| Revenue-funnel visibility | Calculator completion and future affiliate CTA events are recorded, with no misleading commercial copy. | No event-level conversion data today. |

## 3. Constraints and non-goals

The site must remain a calm, trustworthy utility. Calculator estimates must stay clearly separated from commercial calls to action. Affiliate links will **not** be invented or added until the user has approval and real URLs. No display advertisements are included in this build cycle because current traffic does not yet justify the UX trade-off.

The AEON guide will not present unverified ATM locations or claim a universal 150 THB fee. Any fee/location claim must be dated, attributed to an accessible source or first-hand evidence, and expressed with a variation caveat. The current calculator logic and the 102-card database are out of scope unless research uncovers a material factual discrepancy.

## 4. Assumptions to validate during implementation

| Assumption | Why it matters | Validation method |
|---|---|---|
| Each client-side blog route can receive a self-referencing canonical in the rendered document. | Search engines need route-level canonical clarity. | Inspect rendered DOM and Google Search Console URL Inspection after publishing. |
| The site can host static `sitemap.xml` and `robots.txt` in the public directory. | Needed for basic crawl discovery. | Verify deployed URLs and submit sitemap in Search Console. |
| The current AEON fee/location information can be adequately sourced. | The guide’s credibility and safety depend on it. | Research official locations plus recent, corroborated field evidence before writing. |
| The existing analytics setup can record custom product events, or a lightweight supported alternative can be added. | Required to assess calculator and affiliate conversion quality. | Review current analytics implementation before changing it. |

## 5. System shape

The intended visitor flow is deliberately simple:

```text
High-intent search query
  → focused article answering the query immediately
  → context-specific link to calculator
  → completed calculation / selected-card event
  → (only after partner approval) clearly disclosed, contextual affiliate CTA
  → outbound CTA event
```

Technical SEO supports the crawl path beneath it:

```text
robots.txt → sitemap.xml → public route
                         → self-referencing canonical
                         → title / description / Article metadata
```

## 6. Phased work plan

### Phase A — Technical SEO foundation

**Scope.** Add route-aware canonical metadata for the homepage, blog index, and six articles. Create a static `sitemap.xml` listing all public URLs and a minimal `robots.txt` that permits public crawling and references the sitemap. Verify that canonical tags are replaced correctly as a user navigates between client-side routes.

**Why now.** The current static canonical points to the homepage. The articles are appearing in Google already, but continuing to expand while canonical metadata is ambiguous introduces needless indexing risk.

**Acceptance criteria.** Each public route renders one canonical URL matching itself. `https://www.thailand-atm-calculator.com/sitemap.xml` and `/robots.txt` are reachable after publishing. The sitemap is submitted through Search Console by the user.

**Risk.** Client-side rendering can complicate canonical interpretation. We will verify the emitted DOM and then inspect a sample article through Search Console rather than assuming it is fixed.

**Effort.** One focused build session. This is the recommended **quick win**.

### Phase B — AEON guide: validate demand with a source-backed page

**Proposed working title.** *AEON ATMs in Thailand (2026): 150 THB Foreign-Card Fee, Locations, and What to Check*.

**Scope.** Research current fee information and locations; draft a focused guide; create a dedicated route with article metadata; link it from the Best ATM and Thailand ATM Fees pages; link back to the calculator; and add it to the blog index, sitemap, and internal-link structure.

**Article structure.** The opening answer will explain why travellers look for AEON, make clear the fee may vary and should be checked at the screen, then cover where to find confirmed machines, how to decline DCC, whether a trip is worthwhile for the fee saving, and the calculation scenario where it matters. The article will not use fabricated testimonials, reviews, or location data.

**Why now.** The current 28-day AEON/low-fee/location cluster has 2,001 impressions, improved average position (5.2), and only seven clicks. It is the clearest evidence of underserved demand.

**Acceptance criteria.** All material factual claims include a source or a visible verification limitation. Existing lead articles contain descriptive links to the guide. The guide is added to the sitemap and submitted for indexing.

**Risk.** AEON machine availability and fees can change. Every page statement needs a verification date and a user-facing prompt to check the ATM screen before confirming the withdrawal.

**Effort.** One research/content build session plus a short review of sources and wording.

### Phase C — Improve high-impression pages and the mobile route to the calculator

**Scope.** Refine the title, meta description, first answer block, and first calculator CTA on the two priority pages: `/blog/thailand-atm-fees` and `/`. The existing Best ATM article remains mostly intact because it is already the best performer; changes there should be limited to internal links and an explicit early calculator path.

**Proposed content changes.** The ATM Fees article should answer the visitor’s practical question immediately: Thai bank fee, DCC risk, and the reason a user’s card matters. The homepage search snippet should make the comparison function explicit rather than sounding like a generic guide. On mobile, the calculator link will appear near the opening answer with intent-specific copy—not interrupting the content or making a commercial claim.

**Why now.** The ATM Fees page receives 20,222 impressions at 0.16% CTR. The homepage gained impressions from 1,711 to 4,640 while remaining flat at 16 clicks. These are meaningful opportunities before creating further general content.

**Acceptance criteria.** New copy is accurate, calm, and consistent with the calculator’s methodology. It is documented as a 28-day CTR test, with no claim that it will guarantee a ranking change.

**Risk.** More aggressive titles could weaken trust or create a mismatch with the page. The wording should remain factual and avoid urgency, exaggerated savings, or unsupported fee claims.

**Effort.** One concise content/UI refinement session.

### Phase D — Measurement and affiliate readiness

**Scope now.** Design and implement product-usage events for `calculator_started`, `calculator_completed`, `card_selected`, and `share_clicked`. Design (but do not activate) the event model for `affiliate_cta_view` and `affiliate_cta_clicked`.

**Scope after affiliate approval.** Add one clearly labelled partner CTA only where it genuinely matches the article or calculator scenario. Add a visible affiliate disclosure near the CTA. Track CTA views, CTA clicks, and—if the partner supports it—approved conversions and realised commission.

**Why now.** The current Dashboard reports 624 visitors in 30 days but cannot distinguish a successful calculation from a quick exit. The 89.7% bounce rate is therefore not actionable. Event data is required before revenue optimisation is meaningful.

**Acceptance criteria.** Events are named consistently, do not expose sensitive personal/payment information, and are documented in the project context. No affiliate link, claim, or suggested product placement goes live before the user supplies real approved links.

**Risk.** The current dashboard/export capabilities are uncertain. Analytics implementation must be confirmed against the project’s available supported instrumentation before code is written.

**Effort.** One implementation session before affiliate approval; a short follow-up when live links are supplied.

## 7. Priority and sequencing

| Order | Workstream | Decision required from you | Why this order |
|---:|---|---|---|
| 1 | Phase A: canonicals, sitemap, robots | Approve technical SEO build. | Fixes an existing technical ambiguity and gives every current/future guide a clean crawl path. |
| 2 | Phase B: AEON research and guide | Approve research-led content build. | Best evidence-based opportunity in the current query data. |
| 3 | Phase C: CTR and mobile calculator path | Approve content/UI copy test. | Improves the pages already earning nearly all organic traffic. |
| 4 | Phase D: product-event tracking | Approve instrumentation approach; no affiliate URL needed yet. | Makes the visitor-to-revenue path measurable before commercial changes. |
| 5 | Affiliate CTA activation | Provide approved partner links, programme terms, and disclosure requirements. | Activates monetisation only when it is genuine and trackable. |

## 8. Failure modes and mitigations

| Failure mode | Early warning | Mitigation |
|---|---|---|
| The sitemap/canonical change does not alter index status. | Search Console continues showing a different canonical after crawl. | Inspect rendered DOM, then adjust the metadata implementation rather than assuming client-side changes are sufficient. |
| AEON information proves too unstable or difficult to source. | Conflicting current fees/locations or outdated official listings. | Publish a narrower fee-decision guide with dated caveats; omit uncertain locations. |
| Search CTR does not improve. | No 28-day uplift on priority pages. | Review query-level mismatch and test the first answer/description one page at a time. |
| Dashboard bounce rate remains high. | High bounce persists after events exist. | Use completion/scroll/CTA events to separate productive single-page use from genuine abandonment. |
| Commercial links reduce trust. | Community feedback or lower calculator engagement after activation. | Keep one optional disclosed CTA, separated from results; remove/adjust based on event data. |

## 9. First build scope

The smallest high-confidence build that advances the site is **Phase A only**: route-aware canonicals, `sitemap.xml`, and `robots.txt`. It is contained, testable, and resolves an identified technical issue without changing the calculator or relying on unverified research.

If a broader first session is preferred, pair Phase A with **research only** for Phase B. The AEON guide itself should be drafted after sources are checked, not before.

## 10. Approval options

| Option | Approval wording | What happens next |
|---|---|---|
| Conservative | “Approve Phase A only.” | Build and verify technical SEO foundations, then return with source-validated AEON content plan. |
| Recommended | “Approve Phases A–C; research Phase B before publishing.” | Complete technical SEO, research/draft AEON guide for review, then refine priority content/mobile CTAs. |
| Measurement-first | “Approve Phase A and Phase D.” | Fix technical discovery while making calculator outcomes measurable before new content. |
| Full immediate cycle | “Approve Phases A–D; no affiliate CTA activation.” | Complete all non-commercial work, with the AEON article published only after factual review. |
