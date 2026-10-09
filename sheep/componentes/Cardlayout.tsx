import { Layout } from "@/types/Tipos";

type layoutProps = {
    titulo: string;
    valor: string;
    contexto: string;
    bordaCor: string;
}

export function Layoutcard({ titulo, valor, contexto, bordaCor }: layoutProps) {
    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', borderTop: `4px solid ${bordaCor}` }}>
            <span style={{ color: '#6B7280', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>{titulo}</span>
            <h3 style={{ fontSize: '32px', color: '#111827', margin: '8px 0', fontWeight: '700' }}>{valor}</h3>
            <span style={{ fontSize: '13px', color: bordaCor }}>{contexto}</span>
        </div>
    );
}