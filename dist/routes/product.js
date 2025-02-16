"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const product = [{ title: 'product', id: 1 }, { title: 'tomato', id: 2 }];
exports.route = (0, express_1.Router)({});
exports.route.get('/', (req, res) => {
    res.send(product);
});
