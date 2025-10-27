import * as React from 'react';
import Layout from '../componentes/layout';

export default function IndexPage() {
  return (
    <Layout>
      <p>Página Inicial</p>
    </Layout>
  )
}

export const Head = () => <title>Meu Blog - Home</title>