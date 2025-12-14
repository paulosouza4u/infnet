import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="m-3">
        <nav>
          <Link href="/">Inicio</Link>&nbsp;|&nbsp;
          <Link href="/fornecedores">Fornecedores</Link>&nbsp;|&nbsp;
          <Link href="/contatos">Contatos</Link>&nbsp;|&nbsp;
          <Link href="/produtos">Produtos</Link>
        </nav>
        <hr />
        <div className="min-h-96">{children}</div>
        <hr />
        Copyright &copy; 2025 Instituto Infnet
      </body>
    </html>
  );
}
