export default async function Page({ params }) {

const { slug } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1>Teste de Slug - {slug}</h1>
      </div>
    </main>
  );
}
