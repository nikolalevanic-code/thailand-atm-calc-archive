/*
 * Article: Thailand ATM Fees (2026)
 * Targets: "thailand atm fees", "thailand atm conversion"
 */

import BlogLayout from '@/components/BlogLayout';
import ArticleCalculatorCta from '@/components/ArticleCalculatorCta';

const faqItems = [
  {
    question: 'How much does a Thai ATM charge for foreign cards?',
    answer: 'At many major Thai bank ATMs, the foreign-card fee is 250 THB per withdrawal for Visa cards and 350 THB for Mastercard cards. Fees can change or vary by machine, so check the screen before confirming and use the calculator’s fee override if needed.',
  },
  {
    question: 'Should I accept or decline DCC at a Thai ATM?',
    answer: 'Always decline DCC (dynamic currency conversion) and choose to be charged in Thai Baht. When you accept DCC, the ATM applies its own exchange rate, which is typically 3–7% worse than the Visa or Mastercard network rate. Choosing Thai Baht lets your card network handle the conversion at a better rate.',
  },
  {
    question: 'What should I look for when choosing a Thai ATM?',
    answer: 'Use a reliable major-bank ATM, check the fee and transaction limit displayed before you confirm, and choose Thai Baht rather than the ATM’s home-currency conversion offer. Historical guides may mention a lower AEON fee, but we cannot verify a current foreign-card AEON ATM network.',
  },
  {
    question: 'What is the ATM withdrawal limit in Thailand?',
    answer: 'Most Thai ATMs cap each transaction at 20,000 THB. Some machines at Bangkok Bank and UOB allow up to 25,000–30,000 THB per transaction. Each transaction incurs the flat ATM fee, so fewer larger withdrawals are more cost-efficient.',
  },
  {
    question: 'Do travel cards like Wise and Revolut avoid Thai ATM fees?',
    answer: 'Wise and Revolut may reduce or eliminate some home-bank fees, depending on the card, currency, and allowance. They cannot waive the Thai ATM operator’s displayed foreign-card fee. Check the current card terms and the ATM screen before confirming.',
  },
  {
    question: 'Is it better to use Visa or Mastercard at Thai ATMs?',
    answer: 'Visa is cheaper at Thai ATMs in 2026. Visa cards are charged 250 THB per withdrawal; Mastercard cards are charged 350 THB — a 100 THB difference per transaction. If you have both, use your Visa card at Thai ATMs.',
  },
  {
    question: 'Are airport ATMs in Thailand more expensive?',
    answer: 'Airport ATMs at Suvarnabhumi (BKK) and Don Mueang (DMK) charge the same flat fee as city ATMs — 250 THB for Visa, 350 THB for Mastercard. There is no airport surcharge. However, airport ATMs are particularly aggressive about offering DCC, so be careful to decline the conversion offer.',
  },
];

export default function ThailandAtmFees() {
  return (
    <BlogLayout
      title="Thailand ATM Fees (2026): 250–350 THB Fee + Conversion Costs"
      description="Understand Thai ATM fees, Visa and Mastercard charges, card costs, and the conversion offer to decline before you withdraw."
      lastUpdated="August 2026"
      slug="thailand-atm-fees"
      faqItems={faqItems}
      ctaHeading="Calculate the exact cost of your withdrawal"
      ctaBody="See every fee layer broken down — Thai ATM flat fee, your bank's charges, and the exchange rate spread — for your specific card and amount."
      ctaLabel="Calculate my withdrawal cost →"
    >
      <p>
        Withdrawing cash from an ATM in Thailand costs more than most tourists expect. The headline fee — the one Thai banks display prominently — is just one part of the picture. By the time your bank processes the transaction, you may have paid two or three separate charges on top of the exchange rate spread. This guide breaks down exactly what those fees are, who charges them, and which ones you can avoid. For the best cards to minimise these costs, see our guide on <a href="/blog/thailand-atm-no-fee">how to withdraw money in Thailand without fees</a>. For per-bank withdrawal caps, see <a href="/blog/thailand-atm-withdrawal-limit">Thailand ATM withdrawal limits</a>.
      </p>

      <ArticleCalculatorCta
        title="See your estimated withdrawal total"
        body="Compare Thai ATM fees, your card’s charges, and the effect of accepting or declining the ATM’s conversion offer."
        label="Calculate my withdrawal cost →"
      />

      <h2>The three layers of ATM fees in Thailand</h2>
      <p>
        Every ATM withdrawal in Thailand involves up to three separate fee layers, each charged by a different party. Most tourists are aware of one, unaware of the second, and completely blindsided by the third.
      </p>

      <h3>Layer 1: The Thai ATM flat fee</h3>
      <p>
        Many major Thai banks charge a flat fee on every foreign-card withdrawal. The calculator uses the following network-aware defaults, but you should check the fee shown on the ATM screen before confirming:
      </p>
      <table>
        <thead>
          <tr>
            <th>Card network</th>
            <th>Fee per withdrawal</th>
            <th>What to check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visa</td>
            <td>250 THB (~$7 USD)</td>
            <td>Confirm the fee on screen</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>350 THB (~$10 USD)</td>
            <td>Confirm the fee on screen</td>
          </tr>
        </tbody>
      </table>
      <p>
        These defaults reflect common displayed fees at Bangkok Bank, Kasikorn Bank (KBank), SCB, Krungthai, Krungsri, TMBThanachart, and other major Thai bank ATMs. Fees can vary or change. Older guides may mention a lower AEON foreign-card ATM fee, but we cannot verify a current AEON network or availability, so it is not used as a current recommendation here.
      </p>
      <div className="callout">
        <p><strong>Visa vs Mastercard:</strong> The 100 THB Mastercard premium is a relatively recent change. If you have both a Visa and a Mastercard, use the Visa card at Thai ATMs — it saves 100 THB on every single transaction.</p>
      </div>

      <h3>Layer 2: Your home bank's foreign transaction fee</h3>
      <p>
        On top of the Thai ATM flat fee, your own bank will typically charge one or both of the following on the same transaction:
      </p>
      <table>
        <thead>
          <tr>
            <th>Fee type</th>
            <th>Typical amount</th>
            <th>Who charges it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foreign transaction fee</td>
            <td>1.5–3% of withdrawal amount</td>
            <td>Your home bank</td>
          </tr>
          <tr>
            <td>International ATM fee</td>
            <td>$2–$5 flat per transaction</td>
            <td>Your home bank</td>
          </tr>
        </tbody>
      </table>
      <p>
        These fees vary significantly by bank and card type. Traditional high-street banks in the UK, US, Australia, and Europe tend to charge both. Travel-optimised cards like Wise, Revolut, Starling, and Charles Schwab (US) are specifically designed to eliminate or minimise these charges. This is the layer that travel cards address — they cannot waive the Thai bank's flat fee, but they can eliminate your home bank's charges entirely.
      </p>

      <h3>Layer 3: Dynamic currency conversion (DCC)</h3>
      <p>
        When you insert a foreign card at a Thai ATM, the machine will typically display a screen asking whether you want to be charged in your home currency (e.g. USD, GBP, AUD, EUR) or in Thai Baht. This is called <strong>dynamic currency conversion (DCC)</strong>, and it is the most expensive fee layer of the three — and the most avoidable.
      </p>
      <p>
        When you accept DCC, the ATM operator applies its own exchange rate to your transaction. This rate is typically <strong>3–7% worse than the interbank rate</strong> used by Visa and Mastercard. That spread goes directly to the ATM operator as profit. On a ฿10,000 withdrawal, accepting DCC can cost you an additional $15–20 compared to declining it.
      </p>
      <div className="callout-tip">
        <p><strong>The rule, without exception:</strong> Always choose to be charged in Thai Baht (THB). Decline the ATM's conversion offer every time and let your card network handle the conversion. The Visa and Mastercard rates are almost always significantly better than the ATM's DCC rate.</p>
      </div>

      <h2>What does a typical withdrawal actually cost?</h2>
      <p>
        To make this concrete, here is a full cost breakdown for a tourist withdrawing ฿10,000 (~$285 USD) with a standard UK debit card, compared against using a travel-optimised card:
      </p>
      <table>
        <thead>
          <tr>
            <th>Fee component</th>
            <th>Standard UK bank</th>
            <th>Wise / Revolut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thai ATM flat fee (Visa)</td>
            <td>250 THB (~$7)</td>
            <td>250 THB (~$7)</td>
          </tr>
          <tr>
            <td>Home bank foreign transaction fee (2.75%)</td>
            <td>~$7.85</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Home bank international ATM fee</td>
            <td>~$3–5</td>
            <td>$0 (within free limit)</td>
          </tr>
          <tr>
            <td>Exchange rate spread</td>
            <td>~$1–3</td>
            <td>~$0–2</td>
          </tr>
          <tr>
            <td><strong>Total cost above spot rate</strong></td>
            <td><strong>~$19–22</strong></td>
            <td><strong>~$7</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        If that same tourist had accepted DCC with a standard bank card, the ATM's conversion rate would have added another $15–20 on top — making the total overhead $34–42 on a single ฿10,000 withdrawal. That is roughly 12–15% of the withdrawal amount lost to fees.
      </p>

      <h2>Fee comparison by Thai bank</h2>
      <p>
        The table below shows the calculator’s current major-bank fee defaults and typical per-transaction limits. Treat them as planning estimates and confirm the ATM screen before continuing:
      </p>
      <table>
        <thead>
          <tr>
            <th>Thai bank</th>
            <th>Visa fee</th>
            <th>Mastercard fee</th>
            <th>Max per transaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bangkok Bank</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>Kasikorn Bank (KBank)</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>SCB</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>Krungthai Bank</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>Krungsri</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>TMBThanachart (TTB)</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>20,000 THB</td>
          </tr>
          <tr>
            <td>UOB Thailand</td>
            <td>250 THB</td>
            <td>350 THB</td>
            <td>25,000 THB</td>
          </tr>
        </tbody>
      </table>
      <p>
        For a practical guide to choosing an ATM, checking fees, and declining conversion, see <a href="/blog/best-atm-thailand-foreigners">best ATMs in Thailand for foreigners</a>.
      </p>

      <h2>How to reduce your ATM fees in Thailand</h2>
      <p>
        The most effective strategies, in order of impact:
      </p>
      <p>
        <strong>1. Use a fee-free travel card.</strong> Wise, Revolut, Starling (UK), Charles Schwab (US), and Macquarie (AUS) all eliminate or significantly reduce your home bank's foreign transaction fee and international ATM fee. This is typically the largest single saving available to most tourists.
      </p>
      <p>
        <strong>2. Always decline DCC.</strong> Choose Thai Baht every time the ATM asks. This is the single most common and costly mistake tourists make — and it is completely avoidable.
      </p>
      <p>
        <strong>3. Withdraw larger amounts less often.</strong> The Thai ATM fee is usually per transaction, not per baht. Provided it is safe and within your card and ATM limits, fewer withdrawals reduce the number of flat fees paid. See <a href="/blog/thailand-atm-withdrawal-limit">Thailand ATM withdrawal limits</a> for planning guidance.
      </p>
      <p>
        <strong>4. Check the displayed ATM fee.</strong> Individual machines can vary. If the displayed fee differs from the calculator default, use the manual Thai ATM fee setting so your result stays relevant.
      </p>
      <p>
        <strong>5. Use Visa over Mastercard where the displayed fee follows the common split.</strong> If you have both, Visa may save 100 THB per transaction at many major Thai bank ATMs. Confirm the screen because fees can change.
      </p>

      <h2>Frequently asked questions</h2>

      <h3>How much does a Thai ATM charge for foreign cards?</h3>
      <p>
        At many major Thai bank ATMs, foreign cards are charged 250 THB for Visa or 350 THB for Mastercard. The ATM screen is the source of truth for a specific withdrawal because fees can change or vary by machine.
      </p>

      <h3>Should I accept or decline DCC at a Thai ATM?</h3>
      <p>
        Always decline DCC and choose to be charged in Thai Baht. When you accept DCC, the ATM applies its own exchange rate — typically 3–7% worse than the Visa or Mastercard network rate. Choosing Thai Baht lets your card network handle the conversion at a significantly better rate.
      </p>

      <h3>Do travel cards like Wise and Revolut avoid Thai ATM fees?</h3>
      <p>
        Wise and Revolut may reduce or eliminate some home-bank fees, subject to the card, currency, and allowance. They cannot waive the Thai bank's displayed foreign-card fee. For a direct comparison, see <a href="/blog/wise-revolut-thailand">Wise vs Revolut for Thailand</a>.
      </p>

      <h3>Are airport ATMs in Thailand more expensive?</h3>
      <p>
        Airport ATMs at Suvarnabhumi (BKK) and Don Mueang (DMK) charge the same flat fee as city ATMs — 250 THB for Visa, 350 THB for Mastercard. There is no airport surcharge. However, airport ATMs are particularly aggressive about offering DCC, so be careful to decline the conversion offer on arrival.
      </p>

      <h2>Summary</h2>
      <p>
        Thai ATM fees in 2026 can include three layers: the local bank's displayed flat fee, your home bank's foreign-transaction charges, and the exchange-rate spread—which is generally worse if you accept DCC. The practical strategy is to use a travel-optimised card, always decline the ATM's conversion offer, check the displayed fee, and make fewer withdrawals within your safe and sensible cash limit.
      </p>
      <p>
        Use our <a href="/">free calculator</a> to see exactly what your specific card and withdrawal amount will cost — with a side-by-side comparison of accepting vs declining DCC.
      </p>
    </BlogLayout>
  );
}
