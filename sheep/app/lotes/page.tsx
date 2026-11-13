import Link from 'next/link';
import { OvelhaCard } from '@/componentes/Cardovelha'
import { Animal } from "@/types/Tipos";
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { connection } from 'next/server';
import { revalidatePath } from 'next/cache';

const dbPath = join(process.cwd(), 'db.json');

async function lerOvelhas(): Promise<Animal[]> {
    const dados: unknown = JSON.parse(await readFile(dbPath, 'utf8'));

    if (!dados || typeof dados !== 'object' || !('ovelhas' in dados) || !Array.isArray(dados.ovelhas)) {
        throw new Error('db.json deve conter uma lista em "ovelhas".');
    }

    return dados.ovelhas as Animal[];
}

export default async function Dashboard() {
    await connection();
    const ovelhas = await lerOvelhas();

    async function cadastrar(formData: FormData){
        "use server";

        const atuais = await lerOvelhas();
        const novaOvelha = {
            id: Math.max(0, ...atuais.map(ovelha => ovelha.id)) + 1,
            nome: String(formData.get('nome') ?? ''),
            sexo: String(formData.get('sexo') ?? ''),
            idade: Number(formData.get('idade')),
            status: String(formData.get('status') ?? ''),
            peso: Number(formData.get('peso')),
            GPD: Number(formData.get('gpd')),
            brinco: String(formData.get('brinco') ?? ''),
            categoria: 'Não informada',
        };

        await writeFile(dbPath, JSON.stringify({ ovelhas: [...atuais, novaOvelha] }, null, 2));
        revalidatePath('/lotes');
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

        <table>
            <tbody>
                {ovelhas.map(ovelha => <OvelhaCard key={ovelha.id} {...ovelha} />)}
            </tbody>
        </table>
        
        <Link href="/geral" style={{ textDecoration: 'none', color: '#EF4444', padding: '12px 16px', fontWeight: '600', fontSize: '15px' }}>🚪 Retornar</Link>
    </>;
}



    
