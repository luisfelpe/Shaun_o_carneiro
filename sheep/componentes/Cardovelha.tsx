import { Animal } from "@/types/Tipos";

type OvelhaProps = {
    ovelha: Animal;
}
export function OvelhaCard({ ovelha }: OvelhaProps) {
    return (
        <div style={{ borderBottom: '1px solid #F3F4F6' }}>
            <p style={{ padding: '16px 10px', fontWeight: '700' }}>#SUF-881</p>
            <p>Reprodutor (Macho)</p>
            <p>{peso}</p>
            <p>{GPD}</p>
            <p><span style={{ color: '#16A34A', fontWeight: '600' }}>🟢 ovelha.status</span></p>
        </div>
    );
};