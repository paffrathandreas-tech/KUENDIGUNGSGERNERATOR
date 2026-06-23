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
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      
      {/* SEO TEXT */}
      <h1>Kündigungsgenerator kostenlos</h1>
      <p>
        Kündige deinen Vertrag schnell und kostenlos. Erstelle dein Kündigungsschreiben
        für Vodafone, Telekom oder Fitnessstudio in wenigen Sekunden.
      </p>

      {/* FORM */}
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
        <option>Vodafone</option>
        <option>Telekom</option>
        <option>McFIT</option>
      </select>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="number"
        placeholder="Laufzeit in Monaten"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <p>
        👉 Kündigung spätestens am: <b>{calculateDeadline()}</b>
      </p>

      {/* RESULT */}
      <h2>Kündigungstext</h2>

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

      {/* 💰 GELD VERDIENEN SECTION */}
      <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #ccc" }}>
        <h2>💡 Spar jetzt Geld</h2>
        <p>
          Du hast deinen Vertrag gekündigt? Jetzt kannst du einen besseren Tarif sparen.
        </p>

        <a
          href="https://www.check24.net/"
          target="_blank"
          style={{ display: "block", marginTop: "10px", color: "blue" }}
  <div style={{ marginTop: "40px" }}>
        <h2>Vertrag kündigen leicht gemacht</h2>
        <p>
          Viele Anbieter erschweren die Kündigung. Mit unserem Generator kannst du
          dein Kündigungsschreiben einfach erstellen und sofort verwenden.
        </p>
      </div>

    </div>
  );
}
