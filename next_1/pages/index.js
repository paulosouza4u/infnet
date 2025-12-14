import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import Login from "../components/login";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello NextJS World!</title>
      </Head>
      <main>
        <h1>Hello NextJS World!</h1>
        <Login />
      </main>
    </Layout>
  );
}
