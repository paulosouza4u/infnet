import * as React from "react"
import { Link } from "gatsby"
import {container, navLinks, navLinkItem, navLinkText} from "./layout.module.css"

export default function Layout({titulo, children}) {
    return (
        <div className={container}>
            <hr />
            <p>cabeçalho</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Início</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">Sobre</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/fornecedores">Fornecedores</Link></li>
                </ul>
            </nav>
            <hr />
            <main>
                <h1>{titulo}</h1>
                {children}
            </main>
            <hr />
            <p>rodapé</p>
            <hr />
        </div>
    )
}