import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("");
  const [provider, setProvider] = useState("");
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(12);

  const providerOptions = {
    Handy: ["Vodafone", "Telekom", "O2"],
    Internet: ["Vodafone DSL", "Telekom DSL", "1&1"],
    Fitness: ["McFIT", "FitX", "CleverFit"]
  };

  const providerAddresses = {
    Vodafone: "Vodafone GmbH, Kundenservice, 40875 Ratingen",
    Telekom: "Telekom Deutschland GmbH, Bonn",
    O2: "Telefónica Germany GmbH",
    "Vodafone DSL": "Vodafone GmbH DSL",
    "Telekom DSL": "Telekom Deutschland GmbH",
    "1&1": "1&1 Telecom GmbH",
    McFIT: "McFIT GmbH, Berlin",
    FitX: "FitX Deutschland GmbH",
    CleverFit: "clever-fit GmbH"
  };

  const calculateDeadline = () => {
    if (!startDate) return "";
    const end = new Date(startDate);
    end.setMonth(end.getMonth() + Number(duration));
    const deadline = new Date(end);
    deadline.setMonth(deadline.getMonth() - 1);
    return deadline.toLocaleDateString("de-DE");
  };

  const generateText = () => {
    return `Sehr geehrte Damen und Herren,

hiermit kündige ich meinen ${category}-Vertrag fristgerecht zum nächstmöglichen Zeitpunkt.

Anbieter:
${providerAddresses[provider] || ""}

Kundennummer: ${customerId}

Bitte bestätigen Sie mir die Kündigung schriftlich.

Mit freundlichen Grüßen
${name}`;
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>

      <h1>Kündigungsgenerator</h1>
      <p>Erstelle dein Kündigungsschreiben schnell und kostenlos.</p>

      {/* ✅ Affiliate oben FIXED */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <a href="https://www.check24.net/" target="_blank">
          👉 Jetzt Tarife vergleichen und sparen
        </a>
      </div>

      <h2>1. Kategorie wählen</h2>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setProvider("");
        }}
      >
        <option value="">bitte wählen</option>
        <option value="Handy">Handyvertrag</option>
        <option value="Internet">Internetvertrag</option>
        <option value="Fitness">Fitnessstudio</option>
      </select>

      {category && (
        <>
          <h2>2. Anbieter auswählen</h2>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="">bitte wählen</option>
            {providerOptions[category].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </>
      )}

      {provider && (
        <>
          <h2>3. Deine Daten</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Kundennummer"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />

          <h3>Vertragsdaten</h3>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
