import {Request, Response, NextFunction} from 'express'

import {IProduct} from '../types/IProduct'

import productsService from '../services/products-service'

class ProductsController {
    async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await productsService.getProducts()
            res.json(products)   
        } catch (err) {
            next(err)
        }
    }

    async addProduct(req: Request<{}, {}, {product: IProduct}>, res: Response, next: NextFunction): Promise<void> {
        try {
            const {product} = req.body
            const createdProduct = await productsService.addProduct(product)
            res.json(createdProduct)
        } catch (err) {
            next(err)
        }
    }
}

export default new ProductsController()