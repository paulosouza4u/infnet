import * as React from "react";
import { graphql } from "gatsby";
import Tela1 from "../componentes/Tela1";

export const query = graphql`
  {
    allFirestoreUser {
      nodes {
        id
        fone
        email
        nome
      }
    }
  }
`;

const IndexPage = ({data}) => {

  const usuarios = data.allFirestoreUser.nodes;

  return (
    <main style={{padding: "2rem"}}>
      <h1>Usuários do Firestore</h1>
      <ul>
        {
          usuarios.map(usuario => (
            <li key={usuario.email}>
              <strong>{usuario.nome}</strong> - {usuario.fone}
            </li>
          ))
        }
      </ul>
      <Tela1 />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
