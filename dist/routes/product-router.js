"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const product_repository_1 = require("../repository/product-repository");
exports.productRoute = (0, express_1.Router)({});
exports.productRoute.get('/', (req, res) => {
    var _a;
    const findProducts = product_repository_1.productRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(findProducts);
});
exports.productRoute.post('/', (req, res) => {
    const newProduct = product_repository_1.productRepository.createProduct(req.body.title.toString());
    res.status(201).send(newProduct);
});
exports.productRoute.get('/:id', (req, res) => {
    const product = product_repository_1.productRepository.getProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productRoute.put('/:id', (req, res) => {
    const isUpdated = product_repository_1.productRepository.updateProduct(+req.params.id, req.body.title);
    if (isUpdated) {
        const product = product_repository_1.productRepository.getProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productRoute.delete('/:id', (req, res) => {
    const isDelete = product_repository_1.productRepository.deleteProduct(+req.params.id);
    if (isDelete) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
