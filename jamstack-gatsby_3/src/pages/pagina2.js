import React, { useState } from "react";
import Ufs from "../componentes/Ufs";
import Layout from "../componentes/layout";
import Municipios from "../componentes/Municipios";

export default function Pagina2() {

    const [opcaoUf, setOpcaoUf] = useState({id: "", nome: ""});

    return (
        <Layout>
            <h3>Dados Externos</h3>
            <Ufs setOpcaoUf={setOpcaoUf} /><br />
            <Municipios uf={opcaoUf.id} />
        </Layout>
    )
}