import { Animal } from "@/types/Tipos";

type OvelhaProps = {
    id: number;
    nome: string;
    categoria: string;
    brinco: string;
    sexo: string;
    peso: number;
    GPD: number;
    status: string;
}
export function OvelhaCard({ id, nome, categoria, brinco, sexo, peso, GPD, status }: OvelhaProps) {
    return (
        <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
            <td style={{ padding: '16px 10px', fontWeight: '700' }}>{brinco}</td>
            <td>{categoria}</td>
            <td>{peso} kg</td>
            <td>{GPD} kg/dia</td>
            <td><span style={{ color: '#16A34A', fontWeight: '600' }}>{status}</span></td>
        </tr>
    );
};