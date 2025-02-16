import {Router, Request, Response} from "express";
import {productRepository} from "../repository/product-repository";

export const productRoute = Router({})

productRoute.get('/', (req: Request, res: Response) => {
    const findProducts = productRepository.findProducts(req.query.title?.toString())

    res.send(findProducts)
})

productRoute.post('/', (req: Request, res: Response) => {
    const newProduct = productRepository.createProduct(req.body.title.toString())
    res.status(201).send(newProduct)
})

productRoute.get('/:id', (req: Request, res: Response) => {
    const product = productRepository.getProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})

productRoute.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpdated) {
        const product = productRepository.getProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }
})

productRoute.delete('/:id', (req: Request, res: Response) => {
    const isDelete = productRepository.deleteProduct(+req.params.id)
    if (isDelete) {
        res.send(204)
    } else {
        res.send(404)
    }
})
