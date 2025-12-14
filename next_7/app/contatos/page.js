export default async function ContatosPage() {
  const contatos = await fetch("http://localhost:3000/api/contatos")
    .then(response => response.json());

  return (
    <main>
      <h1>Contatos (REST)</h1>

      {contatos.map(contato => (
        <p key={contato.id}>{contato.name} – {contato.email}</p>
      ))}
    </main>
  );
}
