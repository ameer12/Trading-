import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1>🚀 Sentinel Trade Platform</h1>
      <nav>
        <Link href="/">الرئيسية</Link> |{' '}
        <Link href="/dashboard">لوحة التحكم</Link> |{' '}
        <Link href="/simulator">المحاكاة</Link>
      </nav>
    </header>
  );
}
