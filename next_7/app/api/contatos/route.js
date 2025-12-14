let contatos = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" }
];

export async function GET() {
  return Response.json(contatos);
}

export async function POST(request) {
  const body = await request.json();
  const newContato = { id: Date.now(), ...body };
  contatos.push(newContato);
  return Response.json(newContato, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  contatos = contatos.map(contato => (contato.id === body.id ? body : contato));
  return Response.json(body);
}

export async function DELETE(request) {
  const body = await request.json();
  contatos = contatos.filter(contato => contato.id !== body.id);
  return Response.json({ deleted: true });
}
