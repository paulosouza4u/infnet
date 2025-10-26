import React from "react";
import Layout from "../componentes/layout";
import { graphql, useStaticQuery } from "gatsby";

export default function Pagina3() {
    const data = useStaticQuery(graphql`
        query { 
            allUser {
                nodes {
                    id
                    name
                    phone
                    website
                }
            }
        }
    `);
    const users = data.allUser.nodes;

    return (
        <Layout>
            <h3>Dados Internos</h3>
            <h4>Usuários</h4>
            <table width="900px" border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Site</th>
                </tr>
                {users.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                        </tr>
                    )
                })
                }
            </table>
        </Layout>
    );
}
