import { useEffect, useState } from 'react';
import { getSessionsStatus } from '../modules/sessionLogic';

export default function SessionClock() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessionsStatus());
    const timer = setInterval(() => setSessions(getSessionsStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="session-clock">
      <h2>🕒 جلسات التداول</h2>
      {sessions.map((s, i) => (
        <div key={i}>
          {s.active ? '🟢' : '⚪'} {s.name} — {s.active ? 'مفتوحة' : 'مغلقة'} ({s.timeLeft} ساعة)
        </div>
      ))}
    </div>
  );
}
