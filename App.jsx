import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kündigungsgenerator</h1>

      <textarea
        rows="6"
        style={{ width: "100%" }}
        placeholder="Text eingeben..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => alert(text)} style={{ marginTop: "10px" }}>
        Anzeigen
      </button>
    </div>
  );
}
