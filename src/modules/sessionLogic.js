export function getSessionsStatus() {
  const now = new Date();
  const hour = now.getUTCHours() + now.getUTCMinutes() / 60;

  const sessions = [
    { name: 'سيدني', start: 22, end: 7 },
    { name: 'طوكيو', start: 0, end: 9 },
    { name: 'لندن', start: 8, end: 17 },
    { name: 'نيويورك', start: 13, end: 22 }
  ];

  return sessions.map(s => {
    const active = s.start < s.end
      ? hour >= s.start && hour < s.end
      : hour >= s.start || hour < s.end;

    const timeLeft = active
      ? ((s.end > hour ? s.end : s.end + 24) - hour).toFixed(2)
      : ((s.start > hour ? s.start : s.start + 24) - hour).toFixed(2);

    return { ...s, active, timeLeft };
  });
}
