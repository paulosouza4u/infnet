import Head from "next/head";
import Layout from "../../components/layout";

export async function getServerSideProps({params}) {
  let user;
  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then((response) => response.json())
    .then((data) => (user = data));
  return { props: { user } };
}

export default function User(props) {
    return (
        <Layout>
            <Head>
                <title>Usuário</title>
            </Head>
            <h1>Olá {props.user.name}</h1>
            <h2>Email: {props.user.email}</h2>
            <h2>Phone: {props.user.phone}</h2>
        </Layout>
    )
}