import Link from 'next/link';
import { OvelhaCard } from '@/componentes/Cardovelha'
import { Animal } from "@/types/Tipos";
export default async function Dashboard() {
    const url = "http://localhost:3000/lotes";
    const ovelhas: Animal[] = await fetch(url).then(
        (resp) => resp.json()
    );

    async function cadastrar(formData: FormData){
        "use server";

        const resposta = await fetch(
            url,

            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    "nome": formData.get("nome"),
                    "sexo": formData.get("sexo"),
                    "idade": formData.get("idade"),
                    "status": formData.get("status"),
                    "peso": formData.get("peso"),
                    "gpd": formData.get("gpd"),
                    "brinco": formData.get("brinco"),
                })
            }
        )

        if(!resposta.ok) {
            throw new Error("Não consegui cadastrar.")
        }
    }   



    return <>
        <form action={cadastrar}>
            <input type="text" name="nome" id="nome" placeholder="nome da ovelha"/><br />
            <input type="text" name="sexo" id="sexo" placeholder="sexo da ovelha"/><br />
            <label htmlFor="idade">Idade da ovelha</label><input type="number" name="idade" id="idade"/><br />
            <select name="status" id="status">
                <option value="true">Ativa</option>
                <option value="false">Inativa</option>
            </select><br />
            <label htmlFor="peso">Peso da ovelha</label><input type="number" name="peso" id="peso"/><br />
            <label htmlFor="gpd">Produção de leite da ovelha</label><input type="number" name="gpd" id="gpd"/><br />
            <input type="text" name="brinco" id="brinco" placeholder="Brinco da ovelha"/>
            
            <button type="submit">Salvar</button>
        </form>

        {ovelhas.map(ovelha => <OvelhaCard key={ovelha.brinco} ovelha={ovelha}></OvelhaCard>)}
        
        <Link href="/geral" style={{ textDecoration: 'none', color: '#EF4444', padding: '12px 16px', fontWeight: '600', fontSize: '15px' }}>🚪 Retornar</Link>
    </>;
}



    
