const express = require('express');
const {
    createProduct, getAllProducts, getProductById,
    updateProduct, deleteProduct
} = require('../models/product.model');
const validateProduct = require('../middleware/validateProduct');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();

router.get('/', (req, res) => {
    const { category, search, page = 1, limit = 5 } = req.query;
    let data = getAllProducts();

    if (category) data = data.filter(p => p.category === category);
    if (search) data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    const start = (page - 1) * limit;
    const paginated = data.slice(start, start + parseInt(limit));

    res.json({ total: data.length, results: paginated });
});

router.get('/:id', (req, res, next) => {
    const product = getProductById(req.params.id);
    if (!product) return next(new NotFoundError('Product not found'));
    res.json(product);
});

router.post('/', validateProduct, (req, res) => {
    const product = createProduct(req.body);
    res.status(201).json(product);
});

router.put('/:id', validateProduct, (req, res, next) => {
    const product = updateProduct(req.params.id, req.body);
    if (!product) return next(new NotFoundError('Product not found'));
    res.json(product);
});

router.delete('/:id', (req, res, next) => {
    const product = deleteProduct(req.params.id);
    if (!product) return next(new NotFoundError('Product not found'));
    res.status(204).send();
});

module.exports = router;