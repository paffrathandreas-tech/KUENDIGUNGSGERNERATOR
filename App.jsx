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
    Fitness: ["McFIT", "FitX", "CleverFit"],
    Streaming: ["Netflix", "Amazon Prime", "Disney+"]
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
    "Disney+": "Disney Plus"
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
    return (
      "Sehr geehrte Damen und Herren,\n\n" +
      "hiermit kündige ich meinen " + (category || "") + "-Vertrag fristgerecht zum nächstmöglichen Zeitpunkt.\n\n" +
      "Anbieter:\n" +
      (providerAddresses[provider] || "") + "\n\n" +
      "Kundennummer: " + customerId + "\n\n" +
      "Vertragsbeginn: " + startDate + "\n\n" +
      "Bitte bestätigen Sie mir die Kündigung schriftlich.\n\n" +
      "Mit freundlichen Grüßen\n" +
      name
    );
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
        <option value="Handy">Handy</option>
        <option value="Internet">Internet</option>
        <option value="Fitness">Fitness</option>
        <option value="Streaming">Streaming</option>
      </select>

      {category && (
        <>
          <h2>2. Anbieter</h2>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="">Bitte wählen</option>
            {(providerOptions[category] || []).map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </>
      )}

      {provider && (
        <>
          <h2>3. Daten</h2>

          <input
            style={{ display: "block", margin: "10px 0", width: "100%" }}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={{ display: "block", margin: "10px 0", width: "100%" }}
            placeholder="Kundennummer"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />

          <input
            style={{ display: "block", margin: "10px 0" }}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <input
            style={{ display: "block", margin: "10px 0" }}
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />

          <p>
            Kündigung spätestens am: <b>{calculateDeadline()}</b>
          </p>

          <textarea
            value={generateText()}
            readOnly
            style={{ width: "100%", height: "200px" }}
          />

          <button
            onClick={() => navigator.clipboard.writeText(generateText())}
            style={{ marginTop: "10px", padding: "10px" }}
          >
            Kündigung kopieren
          </button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://www.check24.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold" }}
           
