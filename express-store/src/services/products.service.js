const {getProducts, getProductById, saveProducts, saveProduct} = require('../models/products.model');

const getAll = async () => {
    const products = await getProducts();
    if (!products || products.length === 0) {
        throw new Error ('No products found.');
    }
    return products;
}

const getProduct = async (id) => {
    const product = await getProductById(id);
    if (!product || product.length === 0) {
        throw new Error ('No product found.');
    }
    return product;
}

const updateProduct = async (id, data, imagePath) => {
    const product = await getProduct(id);
    if (!product || product.length === 0) {
        throw new Error ('No product found.');
    }

    console.log('Dados recebidos (data):', data);
    console.log('Tipo de dados recebidos (data):', typeof data);
    console.log('ImagePath recebido:', imagePath);

    //combina o produto com o novo
    const updatedProduct = { ...product };

    if (data && typeof data === 'object' && !Array.isArray(data)) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (data[key] !== undefined && data[key] !== null) {
                    if (key === 'price') {
                        updatedProduct[key] = parseFloat(data[key]);
                    } else if (key === 'stock') {
                        updatedProduct[key] = parseInt(data[key]);
                    } else if (key === 'id') {
                        continue;
                    }
                    else {
                        updatedProduct[key] = data[key];
                    }
                }
            }
        }
    } else {
        console.warn('O objeto de dados (data) não é um objeto válido para atualização:', data);
    }

    if (imagePath !== undefined && imagePath !== null) {
        updatedProduct.image = imagePath;
    }

    updatedProduct.id = product.id;

    //procurar e mesclar o produto no json
    const products = await getProducts();
    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        throw new Error(`No product found ID: ${id}.`);
    }

    products[index] = updatedProduct;

    await saveProducts(products);
    return products[index];
}

const createProduct = async (data, imagePath) => {
    const newProduct = {
        id: Date.now(),
        ...data,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        image: imagePath,
        rating: {
            count: 0,
            rate: 0
        }
    };
    await saveProduct(newProduct);
    return newProduct;
}

const removeProduct = async (id) => {
    const products = await getProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );
    if (index === -1) return null;
    const deleted = products.splice(index, 1);
    await saveProducts(products);
    return deleted[0];
}

const searchByName = async (searchTerm) => {
    const products = await getProducts();

    return products.filter(
        product => {
            const title = product.title || '';
            const description = product.description || '';

            return title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                description.toLowerCase().includes(searchTerm.toLowerCase());
        }
    );
}

const updateStock = async (id, quantity) => {
    const products = await getProducts();

    const index = products.findIndex(product => product.id === Number(id))
    if (index === -1) return null;

    products[index].stock = parseInt(quantity);
    await saveProducts(products);
    return products[index];
}

module.exports = {
    getAll,
    getProduct,
    updateProduct,
    createProduct,
    removeProduct,
    searchByName,
    updateStock
}