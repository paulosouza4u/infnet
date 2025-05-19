const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

//GET: localhost:3000/products
router.get('/', productsController.getAllProducts);

//GET localhost:3000/products/searchByName?searchTerm=...
router.get('/searchByName', productsController.searchByName);

//GET: localhost:3000/products/1
router.get('/:id', productsController.getProduct);

module.exports = router;
