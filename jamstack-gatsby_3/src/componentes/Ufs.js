import React from "react";
import { useState, useEffect } from "react";

export default function Ufs({setOpcaoUf}) {

    const [options, setOptions] = useState([]);//iniciando com um array vazio

    useEffect(() => {
        const opt = [{id: "", nome: "Selecione..."}];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(results => results.json())
        .then(data => {
            data.forEach(uf => {
                opt.push({id: uf.id, nome: uf.nome});
            });
            setOptions(opt);
        })
    }, []);//array com o que queremos monitorar

    function handleChange(event) {
        setOpcaoUf({id: event.target.value, nome: event.target[event.target.selectedIndex].text})
    }

    return (
        <select name="uf" onChange={handleChange}>
            {options.map(estado => {
                return (
                    <option key={estado.id} value={estado.id}>
                        {estado.nome}
                    </option>
                )
            })}
        </select>
    )
}