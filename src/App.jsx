import "./styles.css";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState(null);

  setInterval(() => {
    let d = new Date();
    setTime(d.toLocaleTimeString());
  }, 1000);

  return (
    <div className="App">
      <h1 id="clock">{time}</h1>
    </div>
  );
}
