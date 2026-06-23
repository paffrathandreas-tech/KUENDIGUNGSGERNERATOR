import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(12);
  const [provider, setProvider] = useState("Vodafone");

  const providers = {
    Vodafone: "Vodafone GmbH, Kundenservice, 40875 Ratingen",
    Telekom: "Telekom Deutschland GmbH, Bonn",
    McFIT: "McFIT GmbH, Berlin"
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

hiermit kündige ich meinen Vertrag fristgerecht zum nächstmöglichen Zeitpunkt.

Anbieter:
${providers[provider]}

Kundennummer: ${customerId}

Bitte bestätigen Sie mir die Kündigung schriftlich.

Mit freundlichen Grüßen
${name}`;
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>

      {/* 🔍 SEO HAUPT TEXT */}
      <h1>Kündigungsgenerator kostenlos</h1>
      <p>
        Kündige deinen Vertrag einfach und schnell. Erstelle dein Kündigungsschreiben für Vodafone,
        Telekom oder Fitnessstudio kostenlos online.
      </p>

      {/* 🧾 FORMULAR */}
      <h2>Deine Daten</h2>

      <input
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        placeholder="Kundennummer"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h2>Vertrag</h2>

      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      >
