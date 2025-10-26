import * as React from "react"
import Layout from "../componentes/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h3>Olá Mundo Gastby</h3>
      <p>Esse é o primeiro parágrafo</p>
      <p>Esse é o segundo parágrafo</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
