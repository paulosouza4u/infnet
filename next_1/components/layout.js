import Link from "next/link";

export default function Layout({children}) {
    return (
        <main className="layout">
            <div className="header">
                <h3>Estudos de Jamstack - NextJS</h3>
                <nav className="topnav">
                    &nbsp;<Link href="/">Início</Link>
                    &nbsp;<Link href="/pagina1">Server Side Rendering</Link>
                    &nbsp;<Link href="/pagina2">Static Site Generation</Link>
                    &nbsp;<Link href="/pagina3">Usuários</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
        </main>
    )
}