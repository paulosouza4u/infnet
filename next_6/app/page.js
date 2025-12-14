"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1>Página Inicial</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/vendas")}
        >
          Vendas
        </button>
      </div>
    </main>
  );
}
