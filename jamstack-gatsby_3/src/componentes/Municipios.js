import React from "react";
import { useState, useEffect } from "react";

export default function Municipios({ uf }) {

    const [options, setOptions] = useState([]);//iniciando com um array vazio

    useEffect(() => {
        const opt = [{id: "", nome: "Selecione..."}];
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(results => results.json())
        .then(data => {
            data.forEach(mun => {
                opt.push({id: mun.id, nome: mun.nome});
            });
            setOptions(opt);
        })
    }, [uf]);//array com o que queremos monitorar

    return (
        <select name="municipio">
            {options.map(municipio => {
                return (
                    <option key={municipio.id} value={municipio.id}>
                        {municipio.nome}
                    </option>
                )
            })}
        </select>
    )
}