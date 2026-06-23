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
    <div style={{ maxWidth: "750px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>

      {/* 🔥 SEO HEADER */}
      <h1>Kündigungsgenerator kostenlos – Verträge schnell kündigen</h1>
      <p>
        Kündige deinen Vertrag in wenigen Sekunden. Erstelle dein Kündigungsschreiben für Vodafone,
        Telekom oder Fitnessstudio kostenlos online.
      </p>

      {/* 💰 AFFILIATE OBEN */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <a
          href="https://www.check24.net/"
          target="_blank"
          style={{
            background: "#ffcc00",
            padding: "12px",
            fontWeight: "bold",
            display: "inline-block",
            borderRadius: "8px"
          }}
        >
          👉 Spare jetzt bis zu 300€ – Angebote vergleichen
        </a>
      </div>

      {/* 🧾 FORMULAR */}
      <h2>Deine Daten</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        placeholder="Kundennummer"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <h2>Vertragsdaten</h2>

      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      >
        <option>Vodafone</option>
        <option>Telekom</option>
        <option>McFIT</option>
      </select>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="number"
        placeholder="Laufzeit (Monate)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <p>
        👉 Kündigung spätestens am: <b>{calculateDeadline()}</b>
      </p>

      {/* 📄 TEXT */}
      <h2>Kündigungsschreiben</h2>

      <textarea
        value={generateText()}
        readOnly
        style={{ width: "100%", height: "200px", padding: "10px" }}
      />

      <button
        onClick={() => navigator.clipboard.writeText(generateText())}
        style={{
          marginTop: "10px",
          background: "#000",
          color: "#fff",
          padding: "10px",
          borderRadius: "6px"
        }}
      >
        Text kopieren
      </button>

      {/* 💥 BESTE CONVERSION POSITION */}
      <div style={{ 
        marginTop: "25px", 
        padding: "20px", 
        background: "#f5f5f5", 
        borderRadius: "10px" 
      }}>
        <h3>✅ Kündigung fertig!</h3>
        <p>Jetzt kannst du zu einem günstigeren Anbieter wechseln und sparen.</p>

        <a
          href="https://www.check24.net/"
          target="_blank"
          style={{
            background: "#ffcc00",
            padding: "12px",
            fontWeight: "bold",
            display: "inline-block",
            borderRadius: "8px"
          }}
itnessstudios erschweren die Kündigung. Nutze unseren Generator für dein Schreiben.
        </p>

        <h2>Handyvertrag kündigen</h2>
        <p>
          Kündige deinen Handyvertrag stressfrei und schnell mit unserem Online Generator.
        </p>
      </div>

      {/* 💰 AFFILIATE UNTEN */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <p>Werbung</p>

        <a
          href="https://www.check24.net/"
          target="_blank"
          style={{ fontWeight: "bold" }}
  );
}
