const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// These route paths are relative to /api/products from server.js
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct); // ✅ FIXED
router.put('/:id', productController.updateProduct); // ✅ FIXED
router.delete('/:id', productController.deleteProduct); // ✅ FIXED

module.exports = router;
