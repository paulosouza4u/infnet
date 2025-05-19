//models/ Responsável pelo acesso aos dados (leitura, escrita nos arquivos JSON).

const fs = require('fs/promises'); // File System
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

const getProducts = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        try {
            return JSON.parse(data);
        } catch (parseError) {
            console.error(`Erro ao fazer parse do arquivo de produtos JSON em ${filePath}:`, parseError.message);
            throw new Error(`Falha ao processar dados do arquivo de produtos: ${parseError.message}`);
        }

    } catch (readError) {
        if (readError.code === 'ENOENT') {
            console.warn(`Arquivo de produtos não encontrado em ${filePath}. Retornando array vazio.`);
            return [];
        } else {
            console.error(`Erro ao ler o arquivo de produtos em ${filePath}:`, readError.message);
            throw new Error(`Falha ao ler o arquivo de produtos: ${readError.message}`);
        }
    }
}

const getProductById = async (id) => {
    const data = await getProducts();
    const product = data.find(
        product => product.id === Number(id)
    );
    return product;
}

const saveProducts = async (products) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8');
    } catch (writeError) {
        console.error(`Erro ao salvar o arquivo de produtos em ${filePath}:`, writeError.message);
        throw new Error(`Falha ao salvar o arquivo de produtos: ${writeError.message}`);
    }
}

const saveProduct = async (product) => {
    const products = await getProducts();
    products.push(product);
    await saveProducts(products);
}

module.exports = {
    getProducts,
    getProductById,
    saveProducts,
    saveProduct
}
