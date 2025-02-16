"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const products = [{ title: 'product', id: 1 }, { title: 'tomato', id: 2 }];
exports.productRepository = {
    findProducts: (title) => {
        if (title) {
            return products.filter(product => product.title.indexOf(title));
        }
        else {
            return products;
        }
    },
    createProduct(newTitle) {
        const newProduct = {
            id: +(new Date()),
            title: newTitle
        };
        products.push(newProduct);
        return newProduct;
    },
    getProductById(id) {
        const product = products.find(p => p.id === id);
        return product;
    },
    updateProduct(id, title) {
        const product = products.find(p => p.id === id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(id) {
        const prodictIndex = products.findIndex(p => p.id === id);
        if (prodictIndex !== -1) {
            products.splice(prodictIndex, 1);
            return true;
        }
        return false;
    }
};
