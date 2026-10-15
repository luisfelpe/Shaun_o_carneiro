import Link from 'next/link';
export default function Dashboard() {
    return (
        <Link href="/geral" style={{ textDecoration: 'none', color: '#EF4444', padding: '12px 16px', fontWeight: '600', fontSize: '15px' }}>🚪 Retornar</Link>
    );
}