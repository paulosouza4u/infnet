import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
    return (
        <Layout titulo="Sobre">
            <h1>Sobre Esse Site</h1>
            <p>Estamos desenvolvendo estudos de Jamstack com Gatsby</p>
            <Link to="/">Volta</Link> {/* indo para a página principal */ }
        </Layout>
    )
}

export const Head = () => <title>Sobre</title>