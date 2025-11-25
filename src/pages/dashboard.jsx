import Header from '../components/Header';
import SessionClock from '../components/SessionClock';
import SignalOverlay from '../components/SignalOverlay';

export default function Dashboard() {
  return (
    <main style={{ padding: '2rem', background: '#0d1117', color: '#fff' }}>
      <Header />
      <h2>📊 لوحة التحكم</h2>
      <SessionClock />
      <SignalOverlay />
      <div style={{ marginTop: '2rem' }}>
        <p>هنا يمكنك مراقبة السوق، مراجعة توصيات التداول، وتتبع الجلسات النشطة.</p>
      </div>
    </main>
  );
}
