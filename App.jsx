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
    Vodafone: "Vodafone GmbH",
    Telekom: "Telekom Deutschland GmbH",
    O2: "Telefónica Germany GmbH",
    "Vodafone DSL": "Vodafone DSL",
    "Telekom DSL": "Telekom DSL",
    "1&1": "1&1 Telecom GmbH",
    McFIT: "McFIT GmbH",
    FitX: "FitX Deutschland GmbH",
    CleverFit: "CleverFit"
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
      "hiermit kündige ich meinen " + (category || "") + "-Vertrag fristgerecht.\n\n" +
      "Anbieter:\n" +
      (providerAddresses[provider] || "") + "\n\n" +
      "Kundennummer: " + customerId + "\n\n" +
      "Bitte bestätigen Sie mir die Kündigung.\n\n" +
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
