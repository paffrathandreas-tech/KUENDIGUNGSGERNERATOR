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

