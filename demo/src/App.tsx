import { useState } from "react";
import { OraEsatta } from "@aurasphere/react-ora-esatta";

export default function App() {
  const [loading, setLoading] = useState(false);
  const demoLoadingValues = [2, 5, 10, 60];

  const simulateLoading = (seconds: number) => {
    setLoading(true);
    setTimeout(() => setLoading(false), seconds * 1000);
  };

  if (loading) {
    return <OraEsatta />;
  }

  return (
    <>
      <h2>React Ora Esatta Demo</h2>
      <h5>Warning: pressing the buttons will play audio</h5>
      <p>Simulate loading:</p>
      {demoLoadingValues.map((v) => (
        <input
          type="button"
          value={`${v} seconds`}
          onClick={() => simulateLoading(v)}
        />
      ))}
    </>
  );
}
