export const revalidate = 60; //Revalida a cada 60 segundos

async function getContatos() {
  let contatos;
  await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {revalidate: 60},
  })
    .then((response) => response.json())
    .then((data) => (contatos = data));
  return contatos;
}

export default async function Contatos() {
  let results = await getContatos();

  return (
    <main>
      <h1>Contatos ISR</h1>
      {results.map((contato) => {
        return (
          <p className="m-2" key={contato.id}>
            {contato.name} - {contato.email}
          </p>
        );
      })}
    </main>
  );
}
