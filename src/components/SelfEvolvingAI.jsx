import { useEffect, useState } from 'react';
import { simulateLearning } from '../modules/evolvingCore';

export default function SelfEvolvingAI() {
  const [log, setLog] = useState([]);

  useEffect(() => {
    const updates = simulateLearning();
    setLog(updates);
  }, []);

  return (
    <div className="self-evolving-ai">
      <h2>🧠 ذكاء يتطور تلقائيًا</h2>
      <ul>
        {log.map((entry, i) => (
          <li key={i}>📈 {entry}</li>
        ))}
      </ul>
    </div>
  );
}
