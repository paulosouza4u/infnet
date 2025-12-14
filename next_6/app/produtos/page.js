"use client"

import { useFormState } from "react-dom";
import { gravarProduto } from "./Produtos";

export default function Produtos() {
  const [state, formAction] = useFormState(gravarProduto, {});

  return (
    <main>
      <h1>Produtos</h1>
      <form
        className="p-3 m-3 bg-gray-100 w-full max-w-sm"
        action={formAction}
        method="post"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-nome"
            >
              Nome
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="nome"
              value={state.nome}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-nome"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-descricao"
            >
              Descrição
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="descricao"
              value={state.descricao}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Gravar Produto
            </button>
          </div>
        </div>
        <div>{state.mensagem}</div>
      </form>
    </main>
  );
}
