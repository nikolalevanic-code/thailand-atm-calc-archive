/*
 * Article: Thailand ATM Fees (2026)
 * Targets: "thailand atm fees", "thailand atm conversion"
 */

import BlogLayout from '@/components/BlogLayout';

const faqItems = [
  {
    question: 'How much does a Thai ATM charge for foreign cards?',
    answer: 'As of 2026, most Thai ATMs charge 250 THB per withdrawal for Visa cards and 350 THB for Mastercard cards. AEON Bank ATMs are the exception, charging a lower flat fee of 150 THB regardless of card network.',
  },
  {
    question: 'Should I accept or decline DCC at a Thai ATM?',
    answer: 'Always decline DCC (dynamic currency conversion) and choose to be charged in Thai Baht. When you accept DCC, the ATM applies its own exchange rate, which is typically 3–7% worse than the Visa or Mastercard network rate. Choosing Thai Baht lets your card network handle the conversion at a better rate.',
  },
  {
    question: 'What is the cheapest ATM to use in Thailand?',
    answer: 'AEON Bank ATMs are the cheapest for foreign cards, charging 150 THB per withdrawal. They are located inside Big C and Lotus\'s (formerly Tesco Lotus) supermarkets. All other major Thai banks — Bangkok Bank, KBank, SCB, Krungthai, Krungsri — charge 250 THB (Visa) or 350 THB (Mastercard).',
  },
  {
    question: 'What is the ATM withdrawal limit in Thailand?',
    answer: 'Most Thai ATMs cap each transaction at 20,000 THB. Some machines at Bangkok Bank and UOB allow up to 25,000–30,000 THB per transaction. Each transaction incurs the flat ATM fee, so fewer larger withdrawals are more cost-efficient.',
  },
  {
    question: 'Do travel cards like Wise and Revolut avoid Thai ATM fees?',
    answer: 'Wise and Revolut eliminate your home bank\'s foreign transaction fee and international ATM fee. However, they cannot waive the Thai bank\'s flat fee (150–350 THB), which is charged by the ATM operator regardless of which card you use. Wise offers up to ฿7,000 free per month before charging 1.75%; Revolut Standard offers up to ฿5,000 free.',
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
      title="Thailand ATM Fees (2026): 250–350 THB Flat Fee + Hidden Conversion Charges"
      description="Thai ATMs charge 250 THB (Visa) or 350 THB (Mastercard) per withdrawal, plus a hidden DCC conversion fee. Every charge explained for 2026."
      lastUpdated="May 2026"
      slug="thailand-atm-fees"
      faqItems={faqItems}
      ctaHeading="Calculate the exact cost of your withdrawal"
      ctaBody="See every fee layer broken down — Thai ATM flat fee, your bank's charges, and the exchange rate spread — for your specific card and amount."
      ctaLabel="Calculate my withdrawal cost →"
    >
      <p>
        Withdrawing cash from an ATM in Thailand costs more than most tourists expect. The headline fee — the one Thai banks display prominently — is just one part of the picture. By the time your bank processes the transaction, you may have paid two or three separate charges on top of the exchange rate spread. This guide breaks down exactly what those fees are, who charges them, and which ones you can avoid. For the best cards to minimise these costs, see our guide on <a href="/blog/thailand-atm-no-fee">how to withdraw money in Thailand without fees</a>. For per-bank withdrawal caps, see <a href="/blog/thailand-atm-withdrawal-limit">Thailand ATM withdrawal limits</a>.
      </p>

      <h2>The three layers of ATM fees in Thailand</h2>
      <p>
        Every ATM withdrawal in Thailand involves up to three separate fee layers, each charged by a different party. Most tourists are aware of one, unaware of the second, and completely blindsided by the third.
      </p>

      <h3>Layer 1: The Thai ATM flat fee</h3>
      <p>
        Thai banks charge a flat fee on every foreign card withdrawal. As of 2026, the standard rates across all major Thai banks are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Card network</th>
            <th>Fee per withdrawal</th>
            <th>Exception</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visa</td>
            <td>250 THB (~$7 USD)</td>
            <td>AEON: 150 THB</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>350 THB (~$10 USD)</td>
            <td>AEON: 150 THB</td>
          </tr>
        </tbody>
      </table>
      <p>
        This fee is charged by Bangkok Bank, Kasikorn Bank (KBank), SCB, Krungthai, Krungsri, TMBThanachart, and most other major Thai banks. The one notable exception is <strong>AEON Bank ATMs</strong>, which charge a lower flat fee of 150 THB per withdrawal regardless of card network. AEON ATMs are located inside Big C and Lotus's supermarkets across Thailand.
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
        The Thai ATM flat fee is the same across all major banks except AEON. The table below shows the current fees and per-transaction limits:
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
            <td><strong>AEON Bank</strong></td>
            <td><strong>150 THB</strong></td>
            <td><strong>150 THB</strong></td>
            <td>20,000 THB</td>
          </tr>
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
        For a full guide to which ATMs are cheapest and where to find them, see <a href="/blog/best-atm-thailand-foreigners">best ATMs in Thailand for foreigners</a>.
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
        <strong>3. Use AEON ATMs.</strong> At 150 THB per withdrawal versus 250–350 THB at other banks, AEON saves 100–200 THB per transaction. Find them inside Big C and Lotus's supermarkets. See our guide on <a href="/blog/best-atm-thailand-foreigners">best ATMs in Thailand for foreigners</a>.
      </p>
      <p>
        <strong>4. Withdraw larger amounts less frequently.</strong> The Thai ATM flat fee is the same whether you withdraw ฿3,000 or ฿20,000. Two withdrawals of ฿10,000 cost twice the flat fee of one withdrawal of ฿20,000. Maximise each transaction up to the 20,000 THB limit where possible.
      </p>
      <p>
        <strong>5. Use Visa over Mastercard.</strong> If you have both, use your Visa card — it saves 100 THB per transaction at every Thai bank except AEON.
      </p>

      <h2>Frequently asked questions</h2>

      <h3>How much does a Thai ATM charge for foreign cards?</h3>
      <p>
        As of 2026, most Thai ATMs charge 250 THB per withdrawal for Visa cards and 350 THB for Mastercard cards. AEON Bank ATMs are the exception, charging 150 THB regardless of card network.
      </p>

      <h3>Should I accept or decline DCC at a Thai ATM?</h3>
      <p>
        Always decline DCC and choose to be charged in Thai Baht. When you accept DCC, the ATM applies its own exchange rate — typically 3–7% worse than the Visa or Mastercard network rate. Choosing Thai Baht lets your card network handle the conversion at a significantly better rate.
      </p>

      <h3>Do travel cards like Wise and Revolut avoid Thai ATM fees?</h3>
      <p>
        Wise and Revolut eliminate your home bank's foreign transaction fee and international ATM fee. However, they cannot waive the Thai bank's flat fee (150–350 THB), which is charged by the ATM operator regardless of which card you use. Wise offers up to ฿7,000 free per month before charging 1.75%; Revolut Standard offers up to ฿5,000 free. For a direct comparison, see <a href="/blog/wise-revolut-thailand">Wise vs Revolut for Thailand</a>.
      </p>

      <h3>Are airport ATMs in Thailand more expensive?</h3>
      <p>
        Airport ATMs at Suvarnabhumi (BKK) and Don Mueang (DMK) charge the same flat fee as city ATMs — 250 THB for Visa, 350 THB for Mastercard. There is no airport surcharge. However, airport ATMs are particularly aggressive about offering DCC, so be careful to decline the conversion offer on arrival.
      </p>

      <h2>Summary</h2>
      <p>
        Thai ATM fees in 2026 consist of three layers: the local bank's flat fee (150–350 THB depending on the ATM and card network), your home bank's foreign transaction charges, and the exchange rate spread — which is dramatically worse if you accept DCC. The optimal strategy is to use a travel-optimised card, always decline the ATM's conversion offer, use AEON ATMs where available, and maximise each withdrawal up to the 20,000 THB per-transaction limit.
      </p>
      <p>
        Use our <a href="/">free calculator</a> to see exactly what your specific card and withdrawal amount will cost — with a side-by-side comparison of accepting vs declining DCC.
      </p>
    </BlogLayout>
  );
}
