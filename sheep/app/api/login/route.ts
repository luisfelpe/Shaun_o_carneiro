import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Credenciais de exemplo — substitua por validação real
    const validUser = username === 'admin' && password === 'senha123';

    if (!validUser) {
      return NextResponse.json({ ok: false, message: 'Credenciais inválidas' }, { status: 401 });
    }

    // Em uma implementação real, gere um token JWT ou crie sessão
    const token = 'fake-jwt-token';

    return NextResponse.json({ ok: true, token, user: { name: 'Administrador' } });
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Erro no servidor' }, { status: 500 });
  }
}
