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
        if (error.message === 'No product found.') {
            return response.status(404).json({message: error.message});
        }
        response.status(500).json({message: "Internal server error: " + error.message});
    }
}

const updateProduct = async (request, response) => {
    try {
        const updated = await productService.updateProduct(request.params.id, request.body);
        return response.status(200).json(updated);
    } catch (error) {
        console.error(error);
        response.status(500).json({message: "Internal server error: " + error.message});
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    updateProduct,
}