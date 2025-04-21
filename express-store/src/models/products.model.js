//models/ Responsável pelo acesso aos dados (leitura, escrita nos arquivos JSON).

const fs = require('fs/promises'); // File System
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

const getProducts = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

const getProductById = async (id) => {
    const data = await getProducts();
    const product = data.find(product => product.id === Number(id)
    );
    return product;
}

const saveProducts = async (products) => {
    await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8');
}

module.exports = {
    getProducts,
    getProductById,
    saveProducts,
}
