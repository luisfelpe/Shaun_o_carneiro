'use client';

import Link from 'next/link';

interface CardMetricaProps {
    titulo: string;
    valor: string;
    contexto: string;
    bordaCor: string;
}

const CardMetrica = ({ titulo, valor, contexto, bordaCor }: CardMetricaProps) => (
    <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', borderTop: `4px solid ${bordaCor}` }}>
        <span style={{ color: '#6B7280', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>{titulo}</span>
        <h3 style={{ fontSize: '32px', color: '#111827', margin: '8px 0', fontWeight: '700' }}>{valor}</h3>
        <span style={{ fontSize: '13px', color: bordaCor }}>{contexto}</span>
    </div>
);

export default function Dashboard() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F3F4F6', fontFamily: 'system-ui, sans-serif' }}>
            <aside style={{ width: '280px', backgroundColor: '#111827', color: '#FFF', padding: '35px 24px', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '26px', margin: '0 0 45px 10px', fontWeight: '800' }}>
                    Suffolk
                </h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <div style={{ padding: '12px 16px', backgroundColor: '#16A34A', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>📊 Visão Geral</div>
                    <div style={{ padding: '12px 16px', color: '#9CA3AF', cursor: 'pointer', borderRadius: '8px' }}>🐑 Controle de Lotes</div>
                    <div style={{ padding: '12px 16px', color: '#9CA3AF', cursor: 'pointer', borderRadius: '8px' }}>🧬 Cruzamentos & EBVs</div>
                    <div style={{ padding: '12px 16px', color: '#9CA3AF', cursor: 'pointer', borderRadius: '8px' }}>💉 Cronograma Sanitário</div>
                </nav>
                <Link href="/" style={{ textDecoration: 'none', color: '#EF4444', padding: '12px 16px', fontWeight: '600', fontSize: '15px' }}>🚪 Encerrar Sessão</Link>
            </aside>

            <main style={{ flex: 1, padding: '40px' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
                    <div>
                        <h1 style={{ fontSize: '28px', color: '#111827', margin: 0, fontWeight: '700' }}>Dashboard</h1>
                        <p style={{ color: '#4B5563', margin: '4px 0 0 0', fontSize: '15px' }}>Análise de desempenho do rebanho terminal de corte</p>
                    </div>
                    <div style={{ backgroundColor: '#FFF', padding: '10px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', color: '#374151', border: '1px solid #E5E7EB' }}>
                        📅 Safra Atual: <strong>2026/2</strong>
                    </div>
                </header>

                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                    <CardMetrica titulo="Plantel Ativo" valor="245 ovinos" contexto="180 Matrizes | 55 Cordeiros" bordaCor="#111827" />
                    <CardMetrica titulo="GPD Médio de Cordeiros" valor="0.415 kg/dia" contexto="🏆 Meta de precocidade atingida" bordaCor="#16A34A" />
                    <CardMetrica titulo="Peso Médio ao Abate" valor="44.8 kg" contexto="Terminação ideal (90-110 dias)" bordaCor="#16A34A" />
                    <CardMetrica titulo="Atenção Nutricional" valor="3 Borregos" contexto="⚠️ GPD abaixo da linha de corte" bordaCor="#D97706" />
                </section>

                <section style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ fontSize: '18px', color: '#111827', marginBottom: '20px', fontWeight: '700' }}>Pesagem Individual dos Animais</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #F3F4F6', color: '#6B7280', fontSize: '14px' }}>
                                <th style={{ padding: '12px 10px' }}>Brinco (ID)</th>
                                <th>Categoria Zootécnica</th>
                                <th>Peso Atual</th>
                                <th>GPD Registrado</th>
                                <th>Status Genético / Produtivo</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#111827', fontSize: '15px' }}>
                            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                                <td style={{ padding: '16px 10px', fontWeight: '700' }}>#SUF-881</td>
                                <td>Reprodutor (Macho)</td>
                                <td>122.3 kg</td>
                                <td>--</td>
                                <td><span style={{ color: '#16A34A', fontWeight: '600' }}>🟢 Reprodutor Superior</span></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                                <td style={{ padding: '16px 10px', fontWeight: '700' }}>#SUF-942</td>
                                <td>Borrego para Abate</td>
                                <td>45.1 kg</td>
                                <td>0.430 kg/dia</td>
                                <td><span style={{ color: '#16A34A', fontWeight: '600' }}>🟢 Alta Conversão</span></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                                <td style={{ padding: '16px 10px', fontWeight: '700' }}>#SUF-950</td>
                                <td>Cordeiro Desmamado</td>
                                <td>28.4 kg</td>
                                <td>0.295 kg/dia</td>
                                <td><span style={{ color: '#D97706', fontWeight: '600' }}>🟡 Déficit Nutricional</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
