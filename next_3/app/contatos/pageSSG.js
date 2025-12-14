export const revalidate = false; //Gera no build, não revalida nunca (SSG)

async function getContatos() {
  let contatos;
  await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((data) => (contatos = data));
  return contatos;
}

export default async function Contatos() {
  let results = await getContatos();

  return (
    <main>
      <h1>Contatos SSR</h1>
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
