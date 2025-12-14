"use server"

export async function gravarProduto(estadoAnterio, formData) {
    const nome = formData.get("nome");
    const descricao = formData.get("descricao");
    console.log(nome + " - " + descricao);

    return {mensagem: `${nome} gravado com sucesso`, nome: "", descricao: ""};
}