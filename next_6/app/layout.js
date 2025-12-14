import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="m-3">
        <nav className="bg-sky-500 p-2">
          <Link href="/">Inicio</Link>&nbsp;|&nbsp;
          <Link href="/vendas">Vendas</Link>&nbsp;|&nbsp;
          <Link href="/ti">TI</Link>&nbsp;|&nbsp;
          <Link href="/rh">RH</Link>&nbsp;|&nbsp;
        </nav>
        <hr />
        <div className="min-h-96">{children}</div>
        <hr />
        Copyright &copy; 2025 Instituto Infnet
      </body>
    </html>
  );
}
