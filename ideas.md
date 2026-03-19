# Thailand ATM Calculator — Design Brainstorm

Three distinct design approaches. One will be selected and committed to fully.

---

<response>
<probability>0.07</probability>
<text>

## Idea A: "Thai Government Notice Board"

**Design Movement:** Brutalist Utility / Thai Public Signage

**Core Principles:**
1. Information hierarchy so clear it reads like a tax form — and that's a compliment
2. High contrast, no decoration that doesn't carry meaning
3. Every element earns its space by doing a job
4. Deliberately non-fintech — feels like a tool built by a careful person, not a startup

**Color Philosophy:**
- Background: warm off-white `#F7F4EF` (aged paper, not sterile white)
- Primary text: near-black `#1A1A1A`
- Primary action: deep Thai royal purple `#3D1A78`
- "Better choice" accent: forest green `#1A5C2A`
- "Worse choice" accent: muted red `#8C2A1A`
- Borders: medium grey `#BBBBB0` — visible, structural, not decorative

**Layout Paradigm:**
- Full-width horizontal bands, not cards
- Calculator sits in a left-heavy asymmetric two-column on desktop (inputs left, results right)
- Results table is the dominant element — large, tabular, no rounding
- Content sections use a newspaper-style narrow column with wide margins

**Signature Elements:**
1. Thick left-border rule on section headings (3px solid purple)
2. Monospaced numbers throughout (currency amounts in `font-mono`)
3. A subtle Thai temple silhouette watermark in the hero — very faint, structural

**Interaction Philosophy:**
- No animations except a single number-count-up on results reveal
- Hover states: underline only, no colour change
- Focus states: thick purple outline

**Animation:**
- Results panel: numbers count up from 0 over 400ms on calculate
- No other motion

**Typography System:**
- Headings: `Playfair Display` — authoritative, slightly editorial
- Body: `Source Sans 3` — highly legible, neutral
- Numbers: `JetBrains Mono` — monospaced, precise

</text>
</response>

---

<response>
<probability>0.08</probability>
<text>

## Idea B: "Calm Fintech Utility" (SELECTED)

**Design Movement:** Restrained Swiss Modernism meets Southeast Asian Calm

**Core Principles:**
1. The calculator is the product — everything else serves it
2. Calm authority: no urgency, no dark patterns, no "you're losing money!" anxiety
3. Typographic hierarchy does the heavy lifting — colour is used sparingly
4. Mobile-first grid: single column on mobile, two-column calculator+results on tablet+

**Color Philosophy:**
- Background: pure white `#FFFFFF` with a very subtle warm tint on section alternates `#FAFAF8`
- Primary: deep SCB-inspired purple `#4A1E8C` — used only for primary actions and key labels
- Purple tint surface: `#F3EEFF` — used for the calculator card background
- "Better" accent: teal-green `#0D7A5F` — used for the "without conversion" column highlight
- "Worse" accent: muted amber `#B45309` — used for the "with conversion" column when it's worse
- Text: `#1C1917` (near-black warm), muted: `#6B7280`
- Border: `#E5E7EB` — light, structural

**Layout Paradigm:**
- Sticky top nav bar (minimal: logo left, "How it works" anchor right)
- Hero: left-aligned headline on white, with a generated image occupying the right 40% on desktop
- Calculator card: full-width on mobile, max-width 720px centered on desktop, purple-tinted background
- Results: appear below calculator on mobile, slide in as right panel on desktop (≥1024px)
- Content sections: alternating white / warm-tint bands, max-width 800px prose

**Signature Elements:**
1. The results comparison table uses a subtle left green border on the "without conversion" column header when it's the winner
2. A "savings pill" — a rounded badge showing "Save X AUD" in teal — appears prominently above the results
3. Section dividers are a single 1px line with a small Thai Baht symbol (฿) centered on it

**Interaction Philosophy:**
- Calculator inputs respond instantly (no submit button — live calculation)
- Smooth 300ms ease-out transitions on result value changes
- "Don't see your bank?" link has a subtle underline animation on hover

**Animation:**
- Results numbers: smooth count-up animation (500ms, ease-out) on first calculation
- Subsequent changes: 200ms cross-fade on number updates
- Savings pill: scale-in from 0.95 → 1.0 on appear (200ms)
- No parallax, no scroll-triggered animations

**Typography System:**
- Display/headings: `DM Serif Display` — warm, authoritative, slightly editorial without being stuffy
- Body/UI: `DM Sans` — clean, modern, highly legible at small sizes
- Numbers/amounts: `DM Mono` — monospaced for currency alignment
- Scale: 14px base mobile, 15px desktop; heading scale 2xl/3xl/4xl

</text>
</response>

---

<response>
<probability>0.06</probability>
<text>

## Idea C: "Travel Notebook"

**Design Movement:** Editorial Travel Magazine / Moleskine Notebook

**Core Principles:**
1. Feels like a well-designed travel guide, not a financial tool
2. Warm, tactile — subtle paper texture, ink-like typography
3. Information presented as a story, not a form
4. The calculator is embedded mid-page like a pull-quote box

**Color Philosophy:**
- Background: warm cream `#F5F0E8`
- Primary: deep indigo `#2D2B6B`
- Accent: terracotta `#C4622D`
- Text: dark brown `#2C1810`
- Calculator box: white card on cream background

**Layout Paradigm:**
- Single long-scroll editorial page
- Calculator appears as a "boxed feature" mid-article
- Wide margins on desktop with pull-quotes in the margins
- Results shown as a magazine-style comparison spread

**Signature Elements:**
1. Subtle paper grain texture on section backgrounds
2. Hand-drawn style dividers (SVG)
3. Pull-quote style savings callout

**Interaction Philosophy:**
- Gentle transitions, tactile feel
- Scroll-triggered fade-ins for content sections

**Animation:**
- Fade-in on scroll for content blocks
- Calculator results: gentle slide-up reveal

**Typography System:**
- Headings: `Lora` — serif, editorial
- Body: `Lora` regular — consistent editorial feel
- Numbers: `IBM Plex Mono`

</text>
</response>

---

## Selected Approach: **Idea B — Calm Fintech Utility**

Rationale: The tool's primary job is to answer a specific question clearly and quickly. The Swiss Modernism approach keeps the calculator dominant, uses colour purposefully (purple = brand, teal = "good choice", amber = "bad choice"), and avoids both the sterility of pure white fintech and the heaviness of editorial design. DM Serif Display gives warmth and authority to headings without being decorative. The live-calculation pattern (no submit button) reduces friction on mobile.
