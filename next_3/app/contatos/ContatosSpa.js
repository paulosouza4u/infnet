"use client";

import { useEffect, useState } from "react";

export default function ContatosSpa() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContatos() {
      let contatos;
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (contatos = data));
      setContatos(contatos);
      setLoading(false);
    }

    getContatos();
  }, []);

  if(loading) return <p className="bg-amber-300">Carregando...</p>;

  return (
    <main>
        <h1>Contatos SPA</h1>
        {contatos.map(contato => {
        return (
          <p className="m-2" key={contato.id}>
            {contato.name} - {contato.email}
          </p>
        );
      })}
    </main>
  );
}
