'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();//cancela o submit do HTML
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      router.refresh(); // Atualiza rotas do servidor
      router.push('/dashboard');
    } else {
      const data = await res.json();
      setError(data.error);
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <label className="block mb-2 text-sm font-bold">Email</label>
        <input name="email" type="email" required className="w-full border p-2 mb-4 rounded" />

        <label className="block mb-2 text-sm font-bold">Senha</label>
        <input name="password" type="password" required className="w-full border p-2 mb-6 rounded" />

        <button disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded font-bold">
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}