import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import "./App3_better.css";

const DIESEL_PRICE = 99.67;
const PETROL_PRICE = 114.57;
const BILL_PRICE = 99.67;
const REMAINING_BILL_PRICE = 10;

const DEFAULT_NOZZLES = [
  { start: "2", end: "1", category: "d" },
  { start: "", end: "", category: "d" },
  { start: "", end: "", category: "d" },
  { start: "", end: "", category: "d" },
  { start: "", end: "", category: "p" },
  { start: "2", end: "1", category: "p" },
];

const DEFAULT_ARRAY = Array(10).fill("");

function safeParse(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function money(value) {
  return `₹${Number(value || 0).toFixed(2)}`;
}

function StatCard({ label, value, hint, tone = "neutral" }) {
  return (
    <div className={`stat-card stat-card--${tone}`}>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      {hint ? <span className="stat-hint">{hint}</span> : null}
    </div>
  );
}

function NumberField({ label, value, onChange, placeholder }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        type="number"
        inputMode="decimal"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export default function App3() {
  const [nozzles, setNozzles] = useState(() => {
    if (typeof localStorage === "undefined") return DEFAULT_NOZZLES;
    return safeParse("nozzles", DEFAULT_NOZZLES);
  });

  const [bills, setBills] = useState(() => {
    if (typeof localStorage === "undefined") return DEFAULT_ARRAY;
    return safeParse("bills", DEFAULT_ARRAY);
  });

  const [rembills, setRemBills] = useState(() => {
    if (typeof localStorage === "undefined") return DEFAULT_ARRAY;
    return safeParse("rembills", DEFAULT_ARRAY);
  });

  const [creditCards, setCreditCards] = useState(() => {
    if (typeof localStorage === "undefined") return DEFAULT_ARRAY;
    return safeParse("creditCards", DEFAULT_ARRAY);
  });

  const [paytm, setPaytm] = useState(() => {
    if (typeof localStorage === "undefined") return "";
    return localStorage.getItem("paytm") || "";
  });

  useEffect(() => {
    localStorage.setItem("nozzles", JSON.stringify(nozzles));
  }, [nozzles]);

  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  useEffect(() => {
    localStorage.setItem("rembills", JSON.stringify(rembills));
  }, [rembills]);

  useEffect(() => {
    localStorage.setItem("creditCards", JSON.stringify(creditCards));
  }, [creditCards]);

  useEffect(() => {
    localStorage.setItem("paytm", paytm);
  }, [paytm]);

  const totals = useMemo(() => {
    const nozzleTotals = nozzles.map((nozzle) => {
      const price = nozzle.category === "d" ? DIESEL_PRICE : PETROL_PRICE;
      const litres = Math.max(Number(nozzle.end) - Number(nozzle.start), 0);
      return {
        price,
        litres,
        amount: litres * price,
      };
    });

    const totalDifference = nozzleTotals.reduce((sum, item) => sum + item.litres, 0);
    const totalAmount = nozzleTotals.reduce((sum, item) => sum + item.amount, 0);
    const totalBills = bills.reduce((sum, bill) => sum + Number(bill || 0) * BILL_PRICE, 0);
    const totalRemBills = rembills.reduce(
      (sum, bill) => sum + Number(bill || 0) * REMAINING_BILL_PRICE,
      0
    );
    const totalCreditCards = creditCards.reduce((sum, amount) => sum + Number(amount || 0), 0);
    const cashInHand =
      totalAmount - totalBills - totalRemBills - Number(paytm || 0) - totalCreditCards;

    return {
      nozzleTotals,
      totalDifference,
      totalAmount,
      totalBills,
      totalRemBills,
      totalCreditCards,
      cashInHand,
    };
  }, [nozzles, bills, rembills, creditCards, paytm]);

  const updateArray = (setter, index, value) => {
    setter((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const resetAll = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Petrol Pump Calculator</p>
          <h1>Fast, clean, and easy to trust.</h1>
          <p className="hero-text">
            A calm dashboard for daily fuel, bills, Paytm, and card reconciliation.
            Everything is saved automatically.
          </p>
        </div>

        <div className="hero-badge">
          <span>Auto-save</span>
          <strong>Enabled</strong>
        </div>
      </header>

      <main className="content-grid">
        <Section title="Today’s snapshot" subtitle="The numbers that matter most, at a glance.">
          <div className="stats-grid">
            <StatCard
              label="Cash in hand"
              value={money(totals.cashInHand)}
              hint="After every deduction"
              tone={totals.cashInHand >= 0 ? "good" : "bad"}
            />
            <StatCard
              label="Fuel sold"
              value={money(totals.totalAmount)}
              hint={`${totals.totalDifference.toFixed(2)} litres`}
              tone="accent"
            />
            <StatCard
              label="Bills"
              value={money(totals.totalBills)}
              hint="Bill entries × price"
            />
            <StatCard
              label="Remaining bills"
              value={money(totals.totalRemBills)}
              hint="Remainders tracked separately"
            />
          </div>

          <div className="mini-summary">
            <div>
              <span>Total litres</span>
              <strong>{totals.totalDifference.toFixed(2)}</strong>
            </div>
            <div>
              <span>Paytm</span>
              <strong>{money(paytm)}</strong>
            </div>
            <div>
              <span>Credit card</span>
              <strong>{money(totals.totalCreditCards)}</strong>
            </div>
          </div>
        </Section>

        <Section title="Nozzles" subtitle="Enter start and end readings for each nozzle.">
          <div className="card-grid">
            {nozzles.map((nozzle, index) => {
              const price = nozzle.category === "d" ? DIESEL_PRICE : PETROL_PRICE;
              const litres = Math.max(Number(nozzle.start) - Number(nozzle.end), 0);
              const amount = litres * price;

              return (
                <article className="entry-card" key={index}>
                  <div className="entry-head">
                    <div>
                      <h3>Nozzle {index + 1}</h3>
                      <p>{nozzle.category === "d" ? "Diesel" : "Petrol"}</p>
                    </div>
                    <span className="chip">{money(price)}/L</span>
                  </div>

                  <div className="field-row">
                    <NumberField
                      label="Start"
                      value={nozzle.start}
                      onChange={(e) => {
                        const next = [...nozzles];
                        next[index].start = e.target.value;
                        setNozzles(next);
                      }}
                    />
                    <NumberField
                      label="End"
                      value={nozzle.end}
                      onChange={(e) => {
                        const next = [...nozzles];
                        next[index].end = e.target.value;
                        setNozzles(next);
                      }}
                    />
                  </div>

                  <div className="result-row">
                    <div>
                      <span>Litres</span>
                      <strong>{litres.toFixed(2)}</strong>
                    </div>
                    <div>
                      <span>Amount</span>
                      <strong>{money(amount)}</strong>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section title="Bill entries" subtitle="Track bill value in a neat grid.">
          <div className="card-grid card-grid--compact">
            {bills.map((item, index) => (
              <article className="entry-card entry-card--compact" key={index}>
                <h3>Bill {index + 1}</h3>
                <NumberField
                  label="Units"
                  value={item}
                  onChange={(e) => updateArray(setBills, index, e.target.value)}
                />
                <p className="muted">Value: {money(Number(item || 0) * BILL_PRICE)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Remaining bills" subtitle="Smaller leftover amounts that still matter.">
          <div className="card-grid card-grid--compact">
            {rembills.map((item, index) => (
              <article className="entry-card entry-card--compact" key={index}>
                <h3>Remaining {index + 1}</h3>
                <NumberField
                  label="Units"
                  value={item}
                  onChange={(e) => updateArray(setRemBills, index, e.target.value)}
                />
                <p className="muted">Value: {money(Number(item || 0) * REMAINING_BILL_PRICE)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Payments" subtitle="Cashless amounts in one place.">
          <div className="payment-grid">
            <label className="field field--wide">
              <span className="field-label">Paytm</span>
              <input
                className="field-input"
                type="number"
                inputMode="decimal"
                placeholder="Enter Paytm amount"
                value={paytm}
                onChange={(e) => setPaytm(e.target.value)}
              />
            </label>

            <div className="card-grid card-grid--compact">
              {creditCards.map((item, index) => (
                <article className="entry-card entry-card--compact" key={index}>
                  <h3>Card {index + 1}</h3>
                  <NumberField
                    label="Amount"
                    value={item}
                    onChange={(e) => updateArray(setCreditCards, index, e.target.value)}
                  />
                </article>
              ))}
            </div>
          </div>
        </Section>

        <footer className="bottom-bar">
          <div>
            <span>Cash in hand</span>
            <strong>{money(totals.cashInHand)}</strong>
          </div>

          <button className="reset-btn" onClick={resetAll}>
            Reset all data
          </button>
        </footer>

        <Footer />
      </main>
    </div>
  );
}
