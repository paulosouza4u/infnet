import ContatosHibrido from "./ContatosHibrido";
import ContatosSpa from "./ContatosSpa";
//import ContatosSsr from "./ContatosSsr";

async function getContatos() {
  let contatos;
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => (contatos = data));
  return contatos;
}

export default async function Contatos() {

  const contatos = await getContatos();

  {/* return <ContatosSsr /> */}
  {/* return <ContatosSpa /> */}
  return <ContatosHibrido contatos={contatos}  />
}
