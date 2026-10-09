import { Layout } from "@/types/Tipos";

type layoutProps = {
    lay: Layout;
}

export function Layoutcard({ lay }: layoutProps) {
    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', borderTop: `4px solid ${lay.bordaCor}` }}>
            <span style={{ color: '#6B7280', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>{lay.titulo}</span>
            <h3 style={{ fontSize: '32px', color: '#111827', margin: '8px 0', fontWeight: '700' }}>{lay.valor}</h3>
            <span style={{ fontSize: '13px', color: bordaCor }}>{lay.contexto}</span>
        </div>
    );
}