const productService = require('../services/products.service');

const getAllProducts = async (request, response) => {
    try {
        const products = await productService.getAll();
        return response.status(200).json(products);
    } catch (error) {
        console.error(error);
        if (error.message === 'No products found.') {
            return response.status(404).json({message: error.message});
        }
        response.status(500).json({message: "Internal server error: " + error.message});
    }

}

const getProduct = async (request, response) => {
    try {
        const product = await productService.getProduct(request.params.id);
        return response.status(200).json(product);
    } catch (error) {
        console.error(error);
        if (error.message === 'No product found..') {
            return response.status(404).json({message: error.message});
        }
        response.status(500).json({message: "Internal server errorr: " + error.message});
    }
}

const updateProduct = async (request, response) => {
    try {
        const imagePath = request.file ? request.file.filename : null;
        const updated = await productService.updateProduct(request.params.id, request.body, imagePath);
        return response.status(200).json(updated);
    } catch (error) {
        console.error(error);
        response.status(500).json({message: "Internal server error: " + error.message});
    }
}

const createProduct = async (request, response) => {
    try {
        const imagePath = request.file ? request.file.filename : null;
        const product = await productService.createProduct(request.body, imagePath);
        response.status(201).json(product);
    } catch (error) {
        response.status(500).json({message: "Internal server error: " + error.message});
    }
}

const removeProduct = async (request, response) => {
    try {
        const deleted = await productService.removeProduct(request.params.id);
        if (!deleted) {
            return response.status(404).json({message: "Product not found."});
        }
        return response.status(204).send();
    } catch (error) {
        response.status(500).json({message: "Internal server error: " + error.message});
    }
}

const searchByName = async (request, response) => {
    try {
        const { searchTerm } = request.query;
        if (!searchTerm) {
            return response.status(400).json({message: "Invalid search term."});
        }
        const products = await productService.searchByName(searchTerm);
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({message: "Internal server errorr: " + error.message});
    }
}

const updateStock = async (request, response) => {
    const { id } = request.params;
    const { quantity } = request.body;

    if (!quantity) {
        return response.status(400).json({message: "Invalid quantity."});
    }

    productService.updateStock(id, quantity)
        .then(  product => {
            if (!product) {
                return response.status(404).json({message: "Product not found."});
            }
            console.log("Updated product: success");
            response.status(200).json(product)
        })
        .catch( error => {
            console.log("Updated product: error");
            response.status(500).json({message: "Internal server error: " + error.message});
        })
        .finally( () => {
            console.log("Updated product: finally");
        });
}

module.exports = {
    getAllProducts,
    getProduct,
    updateProduct,
    createProduct,
    removeProduct,
    searchByName,
    updateStock
}