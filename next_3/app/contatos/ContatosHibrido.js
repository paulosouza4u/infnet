"use client";

export default function ContatosHibrido({ contatos }) {
  return (
    <main>
      <h1>Contatos Hibrido</h1>
      {contatos.map((contato) => {
        return (
          <p className="m-2" key={contato.id}>
            {contato.name} - {contato.email}
          </p>
        );
      })}
    </main>
  );
}
