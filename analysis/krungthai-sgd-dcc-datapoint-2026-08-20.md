# Krungthai DCC Datapoint Comparison — 20 August 2026

## Observed transaction screen

The supplied Krungthai ATM conversion screen shows the following offer for an SGD-denominated card:

| Screen item | Observed value |
|---|---:|
| Thai bank | Krungthai Bank |
| Cash withdrawal | 2,000.00 THB |
| ATM access fee | 250.00 THB |
| Total converted by DCC | 2,250.00 THB |
| DCC exchange rate | 24.0800 THB per SGD |
| ATM-disclosed exchange-rate mark-up | 5% |
| DCC amount charged | 93.43 SGD |

The arithmetic is internally consistent: `2,250 ÷ 24.0800 = 93.4385 SGD`, which rounds to the 93.43 SGD displayed by the ATM.

## Comparison with the calculator’s current model

The calculator currently uses a 250 THB Visa ATM-fee default and an ATM DCC rate of `spot × 0.930`—approximately 7% below a mid-market spot rate. It uses a card-network rate of `spot × 0.978`—approximately 2.2% below spot.

An historical SGD/THB market close of 25.8296 on 20 August 2026 provides a reasonable external benchmark. It is not the exact live card-network rate at the instant of the ATM offer, so the comparison should be interpreted as a validation point, not a statement of the final amount that a particular cardholder would have paid.[1] [2]

| Comparison | Rate / amount | Difference from observed DCC |
|---|---:|---:|
| Historical market close, 20 Aug | 25.8296 THB/SGD | Reference rate. |
| Observed Krungthai DCC rate | 24.0800 THB/SGD | **6.77% below** the historical market close. |
| Calculator modelled DCC rate | 24.0215 THB/SGD | 0.24% lower than observed DCC rate. |
| Calculator modelled DCC amount for 2,250 THB | 93.67 SGD | **0.23 SGD higher** than the observed 93.43 SGD. |
| Calculator modelled card-network amount before issuer fees | 89.07 SGD | DCC was 4.37 SGD, or 4.91%, higher. |
| Mid-market amount for 2,250 THB | 87.11 SGD | DCC was 6.33 SGD higher before card/issuer fees. |

## Interpretation

The screen **supports the current DCC model**. The current 7% DCC-to-spot calibration is close to this observed SGD transaction: against the 20 August benchmark, the actual DCC rate was 6.77% below spot. In currency terms, the calculator would have estimated this DCC result at 93.67 SGD, only 0.23 SGD above the ATM’s actual displayed 93.43 SGD.

The observed 250 THB access fee also corroborates the calculator’s **250 THB Visa-default setting** for a Krungthai withdrawal. The photo does not identify the card network, however, so it cannot on its own validate the Visa/Mastercard rule; it validates the 250 THB outcome for this specific transaction only.

The ATM’s own “5% exchange-rate mark-up” label is not inconsistent with the 6.77% gap to the historical market close. Krungthai states that it derives the rate from its counter-rate “Note Buy” announcement. The 5% label appears to be calculated against that bank reference rate, whereas the calculator’s 7% calibration is measured against an external spot/mid-market benchmark. These are different reference points.

## Recommendation

No immediate multiplier or Thai ATM-fee change is warranted from this one datapoint. It is a high-quality validation sample because the screen discloses withdrawal amount, fee, rate, stated mark-up, and DCC total; nevertheless, one bank, one date, one currency, and an unidentified card network cannot establish a new universal model.

This sample should be retained as a **Krungthai / SGD / 20 August 2026** validation record. If the user can collect three or more comparable screens across Thai banks, Visa/Mastercard, and different home currencies, the next recalibration could be evidence-based rather than relying on a single historical calibration.

## References

[1]: https://finance.yahoo.com/quote/SGDTHB=X/history/ "Yahoo Finance — SGD/THB historical prices; 20 August 2026 close 25.8296"

[2]: https://www.exchangerates.org.uk/SGD-THB-spot-exchange-rates-history-2026.html "Exchange Rates UK — SGD/THB historical rate; 20 August 2026 close 25.8201"
