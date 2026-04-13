/*
 * Article: Thailand ATM Withdrawal Limits (2026)
 * Targets: "thailand atm withdrawal limit", "thailand atm limit"
 */

import BlogLayout from '@/components/BlogLayout';

export default function ThailandAtmWithdrawalLimit() {
  return (
    <BlogLayout
      title="Thailand ATM Withdrawal Limits (2026)"
      description="How much can you withdraw from a Thai ATM in one transaction? Per day? Here are the limits by bank — and how to work around them efficiently."
      lastUpdated="April 2026"
    >
      <p>
        Thailand has some of the most restrictive ATM withdrawal limits in Southeast Asia. Most machines cap each transaction at 20,000 THB, and some banks impose additional daily limits on foreign cards. If you need a larger amount of cash — for a hotel deposit, a motorbike rental, or a longer stay — understanding these limits in advance will save you time and unnecessary fees.
      </p>

      <h2>Per-transaction limits by Thai bank</h2>
      <p>
        The per-transaction limit is the maximum you can withdraw in a single ATM session. This is set by the Thai bank that owns the ATM, not by your home bank.
      </p>
      <table>
        <thead>
          <tr>
            <th>Thai bank</th>
            <th>Per-transaction limit</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bangkok Bank</td>
            <td>20,000 THB</td>
            <td>Widely available across Thailand</td>
          </tr>
          <tr>
            <td>Kasikorn Bank (KBank)</td>
            <td>20,000 THB</td>
            <td>Large ATM network, common in malls</td>
          </tr>
          <tr>
            <td>SCB (Siam Commercial Bank)</td>
            <td>20,000 THB</td>
            <td>Purple branding, very common</td>
          </tr>
          <tr>
            <td>Krungthai Bank</td>
            <td>20,000 THB</td>
            <td>State-owned, found near government buildings</td>
          </tr>
          <tr>
            <td>Krungsri (Bank of Ayudhya)</td>
            <td>20,000 THB</td>
            <td>Yellow branding</td>
          </tr>
          <tr>
            <td>TMBThanachart (TTB)</td>
            <td>20,000 THB</td>
            <td>Less common but widely distributed</td>
          </tr>
          <tr>
            <td>AEON Bank</td>
            <td>20,000 THB</td>
            <td>Lower fee (150 THB); found in Big C, Tesco Lotus</td>
          </tr>
          <tr>
            <td>UOB Thailand</td>
            <td>25,000 THB</td>
            <td>Slightly higher limit</td>
          </tr>
          <tr>
            <td>CIMB Thai</td>
            <td>20,000 THB</td>
            <td>Less common outside Bangkok</td>
          </tr>
        </tbody>
      </table>
      <div className="callout">
        <p><strong>Note:</strong> Limits can vary between individual ATM machines at the same bank. Some older machines may have lower limits. The figures above reflect the standard limits as of 2026.</p>
      </div>

      <h2>Your home bank's daily limit</h2>
      <p>
        In addition to the Thai ATM's per-transaction cap, your own bank will have a daily withdrawal limit for international ATM use. This is separate from the Thai bank's limit and is set by your card issuer. Common limits:
      </p>
      <table>
        <thead>
          <tr>
            <th>Card type</th>
            <th>Typical daily ATM limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wise (multi-currency)</td>
            <td>~$1,400 USD equivalent (2 free withdrawals/month)</td>
          </tr>
          <tr>
            <td>Revolut Standard</td>
            <td>~$300 USD equivalent free, then 2% fee</td>
          </tr>
          <tr>
            <td>Standard UK high-street bank</td>
            <td>£300–£500 per day</td>
          </tr>
          <tr>
            <td>Standard US bank debit card</td>
            <td>$400–$1,000 per day</td>
          </tr>
          <tr>
            <td>Australian bank debit card</td>
            <td>A$1,000–A$2,000 per day</td>
          </tr>
        </tbody>
      </table>
      <p>
        Check with your bank before you travel. Some banks allow you to temporarily raise your international ATM limit if you notify them in advance.
      </p>

      <h2>The fee implication of multiple transactions</h2>
      <p>
        Because Thai ATMs charge a flat fee per transaction (250 THB for Visa, 350 THB for Mastercard), the number of withdrawals you make has a direct impact on your total cost. If you need ฿40,000 and the ATM limits you to ฿20,000 per transaction, you will pay the flat fee twice.
      </p>
      <p>
        This is why <strong>withdrawing the maximum amount per transaction</strong> is almost always the most cost-efficient strategy — assuming you have a safe place to store the cash.
      </p>
      <div className="callout-tip">
        <p><strong>Example:</strong> Withdrawing ฿20,000 twice costs 500 THB in Thai ATM fees (Visa). Withdrawing ฿10,000 four times costs 1,000 THB. Same cash, double the fees.</p>
      </div>

      <h2>What to do if you need more than 20,000 THB at once</h2>
      <p>
        If you need a large amount of cash — for a long-term rental deposit, a tour package, or similar — there are a few options:
      </p>
      <ul>
        <li><strong>Make multiple ATM withdrawals</strong> across different machines or at different times of day (some banks reset transaction counts at midnight).</li>
        <li><strong>Use a bank branch</strong> — you can often withdraw larger amounts over the counter at a Thai bank branch with your foreign card and passport, though fees may differ.</li>
        <li><strong>Use a currency exchange booth</strong> (Superrich, Vasu Exchange) — for large amounts, the exchange rate at a reputable money changer in Bangkok can be better than the ATM rate, with no flat fee. This requires bringing foreign cash from home.</li>
        <li><strong>Bank transfer</strong> — for very large amounts (property deposits, long-term rentals), a SWIFT transfer to a Thai bank account is often the most cost-effective route.</li>
      </ul>

      <h2>Summary</h2>
      <p>
        Most Thai ATMs limit foreign card withdrawals to <strong>20,000 THB per transaction</strong>. Your home bank may impose an additional daily limit. To minimise fees, always withdraw the maximum amount per transaction, use a Visa card over Mastercard, and consider AEON ATMs for their lower 150 THB flat fee.
      </p>
      <p>
        Use our <a href="/">free calculator</a> to see the total cost of your planned withdrawals, including multi-transaction scenarios.
      </p>
    </BlogLayout>
  );
}
