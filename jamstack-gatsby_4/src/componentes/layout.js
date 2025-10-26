import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Footer from "./footer"

export default function Layout({children}) {//desestrutura��o de objeto = props.children
    return (
        <main className="layout">
            {/* Aqui vai um coment�rio no JSX */}
            <div className="header">
                <h3>Estudos de Jamstack</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/pagina1">Formulário Netlify</Link>
                    <Link to="/pagina2">Formulário React</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear={2025} />
        </main>
    )
}