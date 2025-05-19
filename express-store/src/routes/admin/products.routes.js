const express = require('express');
const adminRouter = express.Router();
const productsController = require('../../controllers/products.controller');
const upload = require('../../middlewares/upload.middleware');

//PATCH: localhost:3000/admin/products/1/stock
adminRouter.patch('/:id/stock', productsController.updateStock);

//PUT: localhost:3000/admin/products/1
adminRouter.put('/:id', upload.single('image'), productsController.updateProduct);

//POST: localhost:3000/admin/products
adminRouter.post('/', upload.single('image'), productsController.createProduct);

//DELETE: localhost:3000/admin/products
adminRouter.delete('/:id', productsController.removeProduct);

module.exports = adminRouter;
