"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = require("./routes/product-router");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
const parserMidleweare = (0, body_parser_1.default)({});
app.use(parserMidleweare);
app.get('/', (req, res) => {
    res.send({ title: 'lolxsxsx!!d' });
});
app.listen(port, () => {
    console.log(`Example app listxxening on port ${port}`);
});
app.use('/product', product_router_1.productRoute);
