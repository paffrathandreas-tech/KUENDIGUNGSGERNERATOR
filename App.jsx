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
    McFIT: "McFIT GmbH, Berlin",
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
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Kündigungsgenerator</h1>

      <h3>Name</h3>
      <input
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>Kundennummer</h3>
      <input
        placeholder="Kundennummer"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>Anbieter</h3>
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <option>Vodafone</option>
        <option>Telekom</option>
        <option>McFIT</option>
      </select>

      <h3>Vertragsbeginn</h3>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>Laufzeit (Monate)</h3>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <p>
        👉 Kündigung spätestens am: <b>{calculateDeadline()}</b>
      </p>

      <h3>Kündigungstext</h3>
      <textarea
        value={generateText()}
        readOnly
        style={{ width: "100%", height: "200px" }}
      />

      <button
        onClick={() => navigator.clipboard.writeText(generateText())}
        style={{ marginTop: "10px" }}
      >
        Text kopieren
      </button>
    </div>
  );
}
