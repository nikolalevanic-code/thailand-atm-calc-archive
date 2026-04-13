/*
 * Article: Thailand ATM Fees Explained (2026)
 * Targets: "thailand atm fees", "thailand atm conversion"
 */

import BlogLayout from '@/components/BlogLayout';

export default function ThailandAtmFees() {
  return (
    <BlogLayout
      title="Thailand ATM Fees Explained (2026)"
      description="A clear breakdown of every fee you'll encounter at a Thai ATM — and how to avoid the ones that aren't worth paying."
      lastUpdated="April 2026"
    >
      <p>
        Withdrawing cash from an ATM in Thailand costs more than most tourists expect. The headline fee — the one Thai banks display prominently — is just one part of the picture. By the time your bank processes the transaction, you may have paid two or three separate charges on top of the exchange rate spread. This guide breaks down exactly what those fees are, who charges them, and which ones you can avoid.
      </p>

      <h2>The two types of ATM fees in Thailand</h2>
      <p>
        Every ATM withdrawal in Thailand involves two separate parties charging you: the Thai bank that owns the ATM, and your home bank that issued your card. Understanding which is which is the first step to reducing what you pay.
      </p>

      <h3>1. The Thai ATM fee (charged by the local bank)</h3>
      <p>
        Thai banks charge a flat fee on every foreign card withdrawal. As of 2026, the standard rates are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Card network</th>
            <th>Fee per withdrawal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visa</td>
            <td>250 THB (~$7 USD)</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>350 THB (~$10 USD)</td>
          </tr>
        </tbody>
      </table>
      <p>
        This fee is charged by Bangkok Bank, Kasikorn Bank (KBank), SCB, Krungthai, Krungsri, and most other major Thai banks. There is one notable exception: <strong>AEON Bank ATMs</strong> charge a lower fee of 150 THB per withdrawal and are worth seeking out if you need to withdraw frequently.
      </p>
      <div className="callout">
        <p><strong>Note:</strong> The Mastercard premium (100 THB more per transaction) is a relatively recent change. If you have both a Visa and a Mastercard, use the Visa card at Thai ATMs.</p>
      </div>

      <h3>2. Your home bank's foreign transaction fee</h3>
      <p>
        On top of the Thai ATM fee, your own bank will typically charge one or both of the following:
      </p>
      <ul>
        <li><strong>Foreign transaction fee:</strong> Usually 1.5–3% of the withdrawal amount, charged as a percentage.</li>
        <li><strong>International ATM fee:</strong> A flat fee of $2–$5 per transaction, charged regardless of amount.</li>
      </ul>
      <p>
        These fees vary significantly by bank and card. Cards like Wise, Revolut, and Charles Schwab (US) are specifically designed to minimise or eliminate these charges. Traditional high-street banks tend to charge the most.
      </p>

      <h2>The hidden fee: dynamic currency conversion (DCC)</h2>
      <p>
        When you insert a foreign card at a Thai ATM, the machine will typically ask whether you want to be charged in your home currency (e.g. USD, GBP, AUD) or in Thai Baht. This is called <strong>dynamic currency conversion (DCC)</strong>, and it is almost always the more expensive option.
      </p>
      <p>
        When you accept DCC, the ATM's bank applies its own exchange rate — typically 3–7% worse than the interbank rate used by Visa and Mastercard. That spread goes directly to the ATM operator as profit.
      </p>
      <div className="callout-tip">
        <p><strong>The rule:</strong> Always choose to be charged in Thai Baht (THB). Decline the ATM's conversion offer and let your own card network handle the conversion. The Visa and Mastercard rates are almost always better.</p>
      </div>

      <h2>What does a typical withdrawal actually cost?</h2>
      <p>
        Here is an example for a tourist withdrawing ฿10,000 (~$285 USD) with a standard UK debit card:
      </p>
      <table>
        <thead>
          <tr>
            <th>Fee component</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thai ATM fee (Visa)</td>
            <td>250 THB (~$7)</td>
          </tr>
          <tr>
            <td>Home bank foreign transaction fee (2.75%)</td>
            <td>~$7.85</td>
          </tr>
          <tr>
            <td>Exchange rate spread (Visa network rate)</td>
            <td>~$0–2</td>
          </tr>
          <tr>
            <td><strong>Total cost above spot rate</strong></td>
            <td><strong>~$15–17</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        If that same tourist had accepted DCC, the ATM's conversion rate would have added another $15–20 on top — making the total overhead $30–37 on a single ฿10,000 withdrawal.
      </p>

      <h2>How to reduce your ATM fees in Thailand</h2>
      <ul>
        <li><strong>Use a fee-free travel card</strong> (Wise, Revolut, Starling, Charles Schwab) to eliminate your home bank's foreign transaction and ATM fees.</li>
        <li><strong>Always decline DCC</strong> — choose Thai Baht every time.</li>
        <li><strong>Withdraw larger amounts less frequently</strong> — the Thai ATM flat fee is the same whether you withdraw ฿3,000 or ฿20,000, so fewer large withdrawals are more efficient.</li>
        <li><strong>Use AEON ATMs</strong> where available — 150 THB fee vs 250–350 THB at other banks.</li>
        <li><strong>Use a Visa card over Mastercard</strong> at Thai ATMs — saves 100 THB per transaction.</li>
      </ul>

      <h2>ATM withdrawal limits in Thailand</h2>
      <p>
        Most Thai ATMs cap withdrawals at <strong>20,000 THB per transaction</strong>, with some machines allowing up to 30,000 THB. If you need to withdraw more, you will need to make multiple transactions — each incurring the flat ATM fee. See our guide to <a href="/blog/thailand-atm-withdrawal-limit">Thailand ATM withdrawal limits</a> for a full breakdown by bank.
      </p>

      <h2>Summary</h2>
      <p>
        Thai ATM fees are made up of three layers: the local bank's flat fee (250–350 THB), your home bank's foreign transaction charges, and the exchange rate spread — which is dramatically worse if you accept DCC. The single most impactful change most tourists can make is to use a travel-optimised card and always decline the ATM's conversion offer.
      </p>
      <p>
        Use our <a href="/">free calculator</a> to see exactly what your specific card and withdrawal amount will cost.
      </p>
    </BlogLayout>
  );
}
