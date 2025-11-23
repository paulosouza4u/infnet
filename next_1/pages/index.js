import Head from 'next/head';
import Layout from "../_components/Layout";

export default function Home() {
  return (
      <Layout>
          <Head>
              <title>Hi!</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
              <h1>Hello World!</h1>
          </main>
      </Layout>
  );
}
