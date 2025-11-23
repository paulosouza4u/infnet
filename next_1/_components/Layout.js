import Link from "next/link";

export default function Layout({ childrem }) {
    return (
        <main>
            <div>
                <h3>Estudos de Jamstack - Next.js</h3>
                <nav>
                    &nbsp;<Link href="/public">Início</Link>&nbsp;|
                    &nbsp;<Link href="/pagina1">Pagina 1</Link>
                </nav>
            </div>
            <div>
                {childrem}
            </div>
        </main>
    );
}
