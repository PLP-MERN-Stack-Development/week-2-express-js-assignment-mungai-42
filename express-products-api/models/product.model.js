const { v4: uuidv4 } = require('uuid');

let products = [];

const createProduct = (data) => {
    const newProduct = { id: uuidv4(), ...data };
    products.push(newProduct);
    return newProduct;
};

const getAllProducts = () => products;

const getProductById = (id) => products.find(p => p.id === id);

const updateProduct = (id, data) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...data };
    return products[index];
};

const deleteProduct = (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    return products.splice(index, 1)[0];
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};