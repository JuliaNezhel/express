const products = [{title: 'product', id: 1}, {title: 'tomato', id: 2}]


export const productRepository = {
    findProducts: (title?: string) => {
        if (title) {
            return products.filter(product => product.title.indexOf(title))
        } else {
            return products
        }
    },
    createProduct(newTitle: string) {
        const newProduct = {
            id: +(new Date()),
            title: newTitle
        }
        products.push(newProduct)
        return newProduct
    },
    getProductById(id: number) {
        const product = products.find(p => p.id === id)
        return product
    },
    updateProduct(id: number, title: string) {
        const product = products.find(p => p.id === id)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    deleteProduct(id: number) {
        const prodictIndex = products.findIndex(p => p.id === id)
        if (prodictIndex !== -1) {
            products.splice(prodictIndex, 1)
            return true
        }
        return false
    }
}
