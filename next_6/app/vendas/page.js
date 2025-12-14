import Image from "next/image";
import Link from "next/link";

export default function Vendas() {
  return (
      <main>    
        <h1>Vendas</h1>
        <Link href="/vendas/angra">Angra</Link> | <Link href="/vendas/santos">Santos</Link>
      </main>
  );
}
