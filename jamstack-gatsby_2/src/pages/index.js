import * as React from "react" //pega tudo que está no módulo react
import { Link } from "gatsby" //pega somente o elemento Link que está no módulo gatsby
import Layout from "../components/layout"
import Teste from "../components/teste"

export default function IndexPage () {
  return (
    <Layout titulo="Home Page">
      <h1>Olá Mundo Gatsby!</h1>
      <p>Iniciando com os primeiros componentes do React no Gatsby.</p>
      <Teste nome="Machado de Assis" />
      <Link to="/about">Sobre</Link>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
