import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("");
  const [provider, setProvider] = useState("");
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(12);
  const [copied, setCopied] = useState(false);

  const providerOptions = {
    Handy: ["Vodafone", "Telekom", "O2"],
    Internet: ["Vodafone DSL", "Telekom DSL", "1&1"],
    Fitness: ["McFIT", "FitX", "CleverFit"],
    Streaming: ["Netflix", "Amazon Prime", "Disney+"],
  };

  const providerAddresses = {
    Vodafone: "Vodafone GmbH",
    Telekom: "Telekom Deutschland GmbH",
    O2: "Telefónica Germany GmbH",
    "Vodafone DSL": "Vodafone DSL",
    "Telekom DSL": "Telekom DSL",
    "1&1": "1&1 Telecom GmbH",
    McFIT: "McFIT GmbH",
    FitX: "FitX Deutschland GmbH",
    CleverFit: "CleverFit",
    Netflix: "Netflix International",
    "Amazon Prime": "Amazon Deutschland",
    "Disney+": "Disney Plus",
  };

  const calculateDeadline = () => {
    if (!startDate) return "–";
    const end = new Date(startDate);
    end.setMonth(end.getMonth() + Number(duration));
    const deadline = new Date(end);
    deadline.setMonth(deadline.getMonth() - 1);
    return deadline.toLocaleDateString("de-DE");
  };

  const generateText = () =>
    `Sehr geehrte Damen und Herren,

hiermit kündige ich meinen ${category}-Vertrag fristgerecht zum nächstmöglichen Zeitpunkt.

Anbieter:
${providerAddresses[provider] || provider}

Kundennummer: ${customerId}

Vertragsbeginn: ${new Date(startDate).toLocaleDateString("de-DE")}

Bitte bestätigen Sie mir die Kündigung schriftlich.

Mit freundlichen Grüßen
${name}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generateText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>Kündigungsgenerator</h1>

      <h2>1. Kategorie</h2>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setProvider("");
        }}
      >
        <option value="">Bitte wählen</option>
        {Object.keys(providerOptions).map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      {category && (
        <>
          <h2>2. Anbieter</h2>
          <select value={provider} onChange={(e) => setProvider(e.target.value)}>
            <option value="">Bitte wählen</option>
            {providerOptions[category].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </>
      )}

      {provider && (
        <>
          <h2>3. Daten</h2>

          <label style={{ display: "block", margin: "10px 0" }}>
            Name
            <input
              style={{ display: "block", width: "100%", marginTop: "4px" }}
              placeholder="Max Mustermann"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label style={{ display: "block", margin: "10px 0" }}>
            Kundennummer
            <input
              style={{ display: "block", width: "100%", marginTop: "4px" }}
              placeholder="123456789"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </label>

          <label style={{ display: "block", margin: "10px 0" }}>
            Vertragsbeginn
            <input
              style={{ display: "block", marginTop: "4px" }}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label style={{ display: "block", margin: "10px 0" }}>
            Laufzeit (Monate)
            <input
              style={{ display: "block", marginTop: "4px", width: "80px" }}
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </label>

          {startDate && (
            <p>
              Kündigung spätestens am: <b>{calculateDeadline()}</b>
            </p>
          )}

          <textarea
            value={generateText()}
            readOnly
            style={{ width: "100%", height: "220px", marginTop: "10px" }}
          />

          <button
            onClick={handleCopy}
            style={{ marginTop: "10px", padding: "10px 20px" }}
          >
            {copied ? "✓ Kopiert!" : "Kündigung kopieren"}
          </button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://www.check24.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold" }}
            >
              Günstigen Nachfolgevertrag auf Check24 finden
            </a>
          </div>
        </>
      )}
    </div>
  );
}


