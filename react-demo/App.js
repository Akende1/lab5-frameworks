import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome, <span style={{ color: "blue" }}>Rival</span>!</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a toggleable message using React state!</p>}
    </div>
  );
}
