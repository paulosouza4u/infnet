import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

//isso funciona como uma sobrescrita de método
export async function getServerSideProps() {
  console.log("getServerSideProps");
  let user;
  await fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    user = data;
  });
  return {props: {user}}
}

export default function Pagina1(props) {
  return (
    <Layout>
      <Head>
        <title>SSR</title>
      </Head>
      <main>
        <h1>Server Side Rendering</h1>
        <h3>Olá {props.user.name}</h3>
      </main>
    </Layout>
  );
}
