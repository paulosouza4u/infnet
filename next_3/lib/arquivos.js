import fs from "fs";
import path from "path";
import matter from "gray-matter";

const diretorio = path.join(process.cwd(), "arquivos");

export default function getSortedData() {  
    console.log("getSortedData");
    const nomesArquivos = fs.readdirSync(diretorio);
    const dados = nomesArquivos.map(fileName => {
        const id = fileName.replace(/\.md/, "");
        const fullPath = path.join(diretorio, fileName);
        const conteudo = fs.readFileSync(fullPath, "utf8");
        const texto = matter(conteudo);
        return {id, ...texto};
    });
    return dados.sort((a, b) => {
        if(a.data.date > b.data.date) return 1;
        else return -1
    });
}